#!/usr/bin/env python3
"""
Python script to set a property using the BDMSL admin SOAP web service.
"""

import requests
from requests.auth import HTTPBasicAuth
import xml.etree.ElementTree as ET
import argparse
import sys

def create_set_property_soap_request(property_name, property_value):
    """
    Create the SOAP XML request for setting a property.

    Args:
        property_name: The name of the property to set
        property_value: The value to set for the property

    Returns:
        str: SOAP XML request
    """
    soap_envelope = f"""<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:ns="ec:services:wsdl:BDMSL:admin:data:1.0">
    <soap:Header/>
    <soap:Body>
        <ns:SetPropertyRequest>
            <ns:Key>{property_name}</ns:Key>
            <ns:Value>{property_value}</ns:Value>
        </ns:SetPropertyRequest>
    </soap:Body>
</soap:Envelope>"""
    return soap_envelope

def call_set_property_ws(ws_url, property_name, property_value, client_cert_header):
    """
    Call the SOAP web service to set a property.

    Args:
        ws_url: URL of the SOAP web service endpoint
        property_name: The name of the property to set
        property_value: The value to set for the property
        client_cert_header: Client certificate header
    Returns:
        bool: True if successful, False otherwise
    """

    # Create SOAP request
    soap_request = create_set_property_soap_request(property_name, property_value)

    # Set up headers
    headers = {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'ec:services:wsdl:BDMSL:admin:1.0:setProperty',
        'Client-Cert': client_cert_header
    }

    try:
        print(f"Calling SOAP web service at: {ws_url}")
        print(f"Setting property: {property_name}")
        print(f"Property value: {property_value}")
        print()

        # Make the SOAP request
        response = requests.post(
            ws_url,
            data=soap_request,
            headers=headers,
            verify=True,  # Set to False if using self-signed certificates
            timeout=30
        )

        print(f"Response Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        print(f"Response Body: {response.text}")
        print()

        if response.status_code == 200:
            # Check if response contains SOAP fault
            if 'soap:Fault' in response.text or 'faultstring' in response.text:
                print("ERROR: SOAP Fault received:")
                try:
                    root = ET.fromstring(response.text)
                    fault_string = root.find('.//{http://schemas.xmlsoap.org/soap/envelope/}faultstring')
                    if fault_string is not None:
                        print(f"Fault: {fault_string.text}")
                    else:
                        print("Could not parse fault details")
                except ET.ParseError:
                    print("Could not parse SOAP fault response")
                return False
            else:
                print("SUCCESS: Property set successfully!")
                return True
        else:
            print(f"ERROR: HTTP {response.status_code}")
            print(f"Response: {response.text}")
            return False

    except requests.exceptions.RequestException as e:
        print(f"ERROR: Request failed: {e}")
        return False
    except Exception as e:
        print(f"ERROR: Unexpected error: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Set property via BDMSL admin SOAP web service')
    parser.add_argument('--url', default='http://localhost:8084/edelivery-sml/bdmsladminservice')
    parser.add_argument('--property-name', required=True, help='Name of the property to set')
    parser.add_argument('--property-value', required=True, help='Value to set for the property')
    parser.add_argument('--client-cert-header', default='sno=1363701384833571773&subject=CN=domisml-admin,OU=Dev,O=Company,L=City,ST=State,C=HR&validfrom=Jun 11 13:04:14 2025 CEST&validto=Jun 11 13:04:14 2056 CEST&issuer=CN=domismp-ca,OU=Dev,O=Company,L=City,ST=State,C=HR')

    args = parser.parse_args()

    # Validate inputs
    if not args.property_name.strip():
        print("ERROR: Property name cannot be empty")
        sys.exit(1)

    if not args.property_value.strip():
        print("ERROR: Property value cannot be empty")
        sys.exit(1)

    # Call the web service
    success = call_set_property_ws(
        ws_url=args.url,
        property_name=args.property_name.strip(),
        property_value=args.property_value.strip(),
        client_cert_header=args.client_cert_header.strip()
    )

    if success:
        print("Property setting completed successfully!")
        sys.exit(0)
    else:
        print("Property setting failed!")
        sys.exit(1)

if __name__ == '__main__':
    main()
