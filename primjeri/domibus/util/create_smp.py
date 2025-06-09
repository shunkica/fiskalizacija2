#!/usr/bin/env python3
"""
Python script to create an SMP entry by calling the BDMSL SOAP web service.
"""

import requests
from requests.auth import HTTPBasicAuth
import xml.etree.ElementTree as ET
import argparse
import sys

def create_smp_soap_request(smp_id, physical_address, logical_address):
    """
    Create the SOAP XML request for creating an SMP.

    Args:
        smp_id: The SMP identifier
        physical_address: Physical address of the endpoint
        logical_address: Logical address (URL) of the SMP server

    Returns:
        str: SOAP XML request
    """
    soap_envelope = f"""<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:ns="http://busdox.org/serviceMetadata/locator/1.0/">
    <soap:Header/>
    <soap:Body>
        <ns:CreateServiceMetadataPublisherService>
            <ns:PublisherEndpoint>
                <ns:LogicalAddress>{logical_address}</ns:LogicalAddress>
                <ns:PhysicalAddress>{physical_address}</ns:PhysicalAddress>
            </ns:PublisherEndpoint>
            <ns:ServiceMetadataPublisherID>{smp_id}</ns:ServiceMetadataPublisherID>
        </ns:CreateServiceMetadataPublisherService>
    </soap:Body>
</soap:Envelope>"""
    return soap_envelope

def call_create_smp_ws(ws_url, smp_id, physical_address, logical_address, client_cert_header):
    """
    Call the SOAP web service to create an SMP.

    Args:
        ws_url: URL of the SOAP web service endpoint
        smp_id: The SMP identifier
        physical_address: Physical address of the endpoint
        logical_address: Logical address (URL) of the SMP server
        client_cert_header: Client certificate header
    Returns:
        bool: True if successful, False otherwise
    """

    # Create SOAP request
    soap_request = create_smp_soap_request(smp_id, physical_address, logical_address)

    # Set up headers
    headers = {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'http://busdox.org/serviceMetadata/ManageServiceMetadataService/1.0/:createIn',
        'Client-Cert': client_cert_header
    }

    try:
        print(f"Calling SOAP web service at: {ws_url}")
        print(f"Creating SMP with ID: {smp_id}")
        print(f"Logical Address: {logical_address}")
        print(f"Physical Address: {physical_address}")
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
                print("SUCCESS: SMP created successfully!")
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
    parser = argparse.ArgumentParser(description='Create SMP entry via SOAP web service')
    parser.add_argument('--url', default='http://localhost:8084/edelivery-sml/manageservicemetadata')
    parser.add_argument('--smp-id', default="domismp1")
    parser.add_argument('--logical-address', default="http://domismp:8080/smp")
    parser.add_argument('--physical-address', default="172.18.0.5")
    parser.add_argument('--client-cert-header', default='sno=1363701384833571773&subject=CN=SMP_TEST,OU=Dev,O=Company,L=City,ST=State,C=HR&validfrom=Jun 11 13:04:14 2025 CEST&validto=Jun 11 13:04:14 2056 CEST&issuer=CN=domismp-ca,OU=Dev,O=Company,L=City,ST=State,C=HR')

    args = parser.parse_args()

    # Validate inputs
    if not args.smp_id.strip():
        print("ERROR: SMP ID cannot be empty")
        sys.exit(1)

    if not args.logical_address.strip():
        print("ERROR: Logical address cannot be empty")
        sys.exit(1)

    if not args.physical_address.strip():
        print("ERROR: Physical address cannot be empty")
        sys.exit(1)

    # Call the web service
    success = call_create_smp_ws(
        ws_url=args.url,
        smp_id=args.smp_id.strip(),
        physical_address=args.physical_address.strip(),
        logical_address=args.logical_address.strip(),
        client_cert_header=args.client_cert_header.strip()
    )

    if success:
        print("SMP creation completed successfully!")
        sys.exit(0)
    else:
        print("SMP creation failed!")
        sys.exit(1)

if __name__ == '__main__':
    main()
