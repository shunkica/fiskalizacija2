import {IEvidentirajERacunZahtjev} from "../../src";
import {ZaglavljeFiskalizacija} from "../../src/models/xml/fiskalizacija";
import {XmlSigner} from "../../src/util/signing";

export class XmlTestProvider {
    /**
     * Basic UBL invoice with all required fields
     */
    static getBasicUblInvoice(): string {
        return `<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cct="urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:hrextac="urn:hzn.hr:schema:xsd:HRExtensionAggregateComponents-1" xmlns:p3="urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2" xmlns:sac="urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2" xmlns:sig="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 ../xsd/ubl/maindoc/UBL-Invoice-2.1.xsd ">
  <ext:UBLExtensions>
   <ext:UBLExtension>
   <ext:ExtensionContent>
    <sig:UBLDocumentSignatures>
     <sac:SignatureInformation></sac:SignatureInformation>
    </sig:UBLDocumentSignatures>
   </ext:ExtensionContent>
  </ext:UBLExtension>
  </ext:UBLExtensions>
 <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0</cbc:CustomizationID>
 <cbc:ProfileID>P1</cbc:ProfileID>
 <cbc:ID>5-P1-1</cbc:ID>
 <cbc:IssueDate>2025-05-01</cbc:IssueDate>
 <cbc:IssueTime>12:00:00</cbc:IssueTime>
 <cbc:DueDate>2025-05-31</cbc:DueDate>
 <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
 <cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>
 <cac:AccountingSupplierParty>
  <cac:Party>
   <cbc:EndpointID schemeID="9934">12345678901</cbc:EndpointID>
   <cac:PartyIdentification>
    <cbc:ID>9934:12345678901</cbc:ID>
   </cac:PartyIdentification>
   <cac:PostalAddress>
    <cbc:StreetName>VRTNI PUT 3</cbc:StreetName>
    <cbc:CityName>ZAGREB</cbc:CityName>
    <cbc:PostalZone>10000</cbc:PostalZone>
    <cac:Country>
     <cbc:IdentificationCode>HR</cbc:IdentificationCode>
    </cac:Country>
   </cac:PostalAddress>
   <cac:PartyTaxScheme>
    <cbc:CompanyID>HR12345678901</cbc:CompanyID>
    <cac:TaxScheme>
     <cbc:ID>VAT</cbc:ID>
    </cac:TaxScheme>
   </cac:PartyTaxScheme>
   <cac:PartyLegalEntity>
    <cbc:RegistrationName>FINANCIJSKA AGENCIJA</cbc:RegistrationName>
   </cac:PartyLegalEntity>
   <cac:Contact>
    <cbc:Name>IME PREZIME</cbc:Name>
    <cbc:ElectronicMail>ii@mail.hr</cbc:ElectronicMail>
   </cac:Contact>
  </cac:Party>
  <cac:SellerContact>
   <cbc:ID>51634872748</cbc:ID>
   <cbc:Name>Operater1</cbc:Name>
  </cac:SellerContact>
 </cac:AccountingSupplierParty>
 <cac:AccountingCustomerParty>
  <cac:Party>
   <cbc:EndpointID schemeID="9934">11111111119</cbc:EndpointID>
   <cac:PostalAddress>
    <cbc:StreetName>Ulica 2</cbc:StreetName>
    <cbc:CityName>RIJEKA</cbc:CityName>
    <cbc:PostalZone>51000</cbc:PostalZone>
    <cac:Country>
     <cbc:IdentificationCode>HR</cbc:IdentificationCode>
    </cac:Country>
   </cac:PostalAddress>
   <cac:PartyTaxScheme>
    <cbc:CompanyID>HR11111111119</cbc:CompanyID>
    <cac:TaxScheme>
     <cbc:ID>VAT</cbc:ID>
    </cac:TaxScheme>
   </cac:PartyTaxScheme>
   <cac:PartyLegalEntity>
    <cbc:RegistrationName>Tvrtka B d.o.o.</cbc:RegistrationName>
   </cac:PartyLegalEntity>
  </cac:Party>
 </cac:AccountingCustomerParty>
 <cac:PaymentMeans>
  <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode>
  <cbc:InstructionNote>Opis plaćanja</cbc:InstructionNote>
  <cbc:PaymentID>HR00 123456</cbc:PaymentID>
  <cac:PayeeFinancialAccount>
   <cbc:ID>HRXXXXXXXXXXXXXXXX</cbc:ID>
  </cac:PayeeFinancialAccount>
 </cac:PaymentMeans>
 <cac:TaxTotal>
  <cbc:TaxAmount currencyID="EUR">25.00</cbc:TaxAmount>
  <cac:TaxSubtotal>
   <cbc:TaxableAmount currencyID="EUR">100.00</cbc:TaxableAmount>
   <cbc:TaxAmount currencyID="EUR">25.00</cbc:TaxAmount>
   <cac:TaxCategory>
    <cbc:ID>S</cbc:ID>
    <cbc:Percent>25</cbc:Percent>
    <cac:TaxScheme>
     <cbc:ID>VAT</cbc:ID>
    </cac:TaxScheme>
   </cac:TaxCategory>
  </cac:TaxSubtotal>
 </cac:TaxTotal>
 <cac:LegalMonetaryTotal>
  <cbc:LineExtensionAmount currencyID="EUR">100.00</cbc:LineExtensionAmount>
  <cbc:TaxExclusiveAmount currencyID="EUR">100.00</cbc:TaxExclusiveAmount>
  <cbc:TaxInclusiveAmount currencyID="EUR">125.00</cbc:TaxInclusiveAmount>
  <cbc:PayableAmount currencyID="EUR">125.00</cbc:PayableAmount>
 </cac:LegalMonetaryTotal>
 <cac:InvoiceLine>
  <cbc:ID>1</cbc:ID>
  <cbc:InvoicedQuantity unitCode="H87">1.000</cbc:InvoicedQuantity>
  <cbc:LineExtensionAmount currencyID="EUR">100.00</cbc:LineExtensionAmount>
  <cac:Item>
   <cbc:Name>Proizvod</cbc:Name>
   <cac:CommodityClassification>
    <cbc:ItemClassificationCode listID="CG">62.90.90</cbc:ItemClassificationCode>
   </cac:CommodityClassification>
   <cac:ClassifiedTaxCategory>
    <cbc:ID>S</cbc:ID>
    <cbc:Name>HR:PDV25</cbc:Name>
    <cbc:Percent>25</cbc:Percent>
    <cac:TaxScheme>
     <cbc:ID>VAT</cbc:ID>
    </cac:TaxScheme>
   </cac:ClassifiedTaxCategory>
  </cac:Item>
  <cac:Price>
   <cbc:PriceAmount currencyID="EUR">100.000000</cbc:PriceAmount>
   <cbc:BaseQuantity unitCode="H87">1.000</cbc:BaseQuantity>
  </cac:Price>
 </cac:InvoiceLine>
</Invoice>
`;
    }

    /**
     * Minimal UBL invoice with only required fields
     */
    static getMinimalUblInvoice(): string {
        return `<Invoice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
         xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2">
  <cbc:ID>MINIMAL-001</cbc:ID>
  <cbc:IssueDate>2024-01-15</cbc:IssueDate>
  <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
  <cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>
  <cbc:ProfileID>P1</cbc:ProfileID>
  
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyName>
        <cbc:Name>Minimal Supplier</cbc:Name>
      </cac:PartyName>
      <cac:PartyTaxScheme>
        <cbc:CompanyID>11111111111</cbc:CompanyID>
      </cac:PartyTaxScheme>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName>Minimal Supplier</cbc:RegistrationName>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingSupplierParty>
  
  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyName>
        <cbc:Name>Minimal Customer</cbc:Name>
      </cac:PartyName>
      <cac:PartyTaxScheme>
        <cbc:CompanyID>22222222222</cbc:CompanyID>
      </cac:PartyTaxScheme>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName>Minimal Customer</cbc:RegistrationName>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingCustomerParty>
  
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount>50.00</cbc:LineExtensionAmount>
    <cbc:TaxExclusiveAmount>50.00</cbc:TaxExclusiveAmount>
    <cbc:TaxInclusiveAmount>50.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount>50.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
  
  <cac:TaxTotal>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount>50.00</cbc:TaxableAmount>
      <cbc:TaxAmount>0.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cbc:ID>Z</cbc:ID>
        <cbc:Percent>0.0</cbc:Percent>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  
  <cac:InvoiceLine>
    <cbc:InvoicedQuantity unitCode="HUR">2</cbc:InvoicedQuantity>
    <cac:Price>
      <cbc:PriceAmount>25.00</cbc:PriceAmount>
    </cac:Price>
    <cac:Item>
      <cbc:Name>Consulting Service</cbc:Name>
      <cac:ClassifiedTaxCategory>
        <cbc:ID>Z</cbc:ID>
        <cbc:Percent>0.0</cbc:Percent>
      </cac:ClassifiedTaxCategory>
    </cac:Item>
  </cac:InvoiceLine>
</Invoice>`;
    }

    /**
     * Invalid invoice (missing required fields)
     */
    static getInvalidInvoice(): string {
        return `<Invoice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
  <cbc:ID>INVALID-001</cbc:ID>
  <cbc:IssueDate>2024-01-15</cbc:IssueDate>
</Invoice>`;
    }

    /**
     * Mock XML request of EvidentirajERacunZahtjev type
     */
    static getEvidentirajERacunZahtjev(): string {
        return `<efis:EvidentirajERacunZahtjev xmlns:efis="http://www.porezna-uprava.gov.hr/fin/2024/types/eFiskalizacija" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" efis:id="TEST-123">
  <efis:Zaglavlje>
    <efis:datumVrijemeSlanja>2024-01-15T10:30:45.1234</efis:datumVrijemeSlanja>
    <efis:vrstaERacuna>I</efis:vrstaERacuna>
  </efis:Zaglavlje>
</efis:EvidentirajERacunZahtjev>`;
    }

    /**
     * Mock private key for testing (not for production use)
     */
    static getMockPrivateKey(): string {
        return `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0VZ7SdT4yyQNk
1laHk5HWucRbVklXcr27i6H7y/U6NiVcVNiTRfdnJoSHBjlU6371asZhk1ZPi6kP
5YNNzb2w3jEU9nT/eBL0mtjgreVh1UDUNDpZcO6T6bn3xH73kWThP2TsjnocMAqK
V8BLkHRPVgQOP9r95Dqkb7zsyR5NLcxYGWxsx781fnwkAqkwC8+xtKltS9QUWtOX
dxaIa22hCtSm27IjE1eIugNoTEM2ey3gahZ61IKiCJUcSksUXyT0GfEKqkFyAzyo
i7Rr9J+isOV38SY4YbFucgwOkk8vZHBsJF0GfH2yrGCZLm4qXRukVVjCQxFe5uEP
UYvzNxhHAgMBAAECggEAN1UyN2dsH08YcH9n64+3Jwi3HEN8m42EdCBjIoyxgRwO
GKecEIxeXlMuRPP+8XSU7x7FIjmAOUYkKNGGmX/wnW1/5+u7eIvSXSWKOF6DTKKP
ks03vivtuIr12fV78+Cz8H1wLTmGdFG1Wj+UrFr1pUZCVlD3lAHMkJoMgScw2gMY
nfGI9CVSkhjGx4PEJSRxdHVdDlBzXSfv31gklJ+1LxvqGuVnMfN7F7R1EorPvF5t
BSweRb/1MMqn2oWicWkcjoYotB75leavS1Y5hG3+pHnvTqPga7Jwiee77xFhG+Eb
CHm7Onep1kNikaCZvhzSxO2FdQa80B3xhiKrza2TaQKBgQDXonfI19X4tcy1E7Do
lZkdLum7ItKIZfcawy/YyA5tG1/0drwZbjXldRPx5k3SejlMAVClx4gdAAmh5Ozh
YAHc3oNSBnPz36YNR/qBQubhDHulI6mt1RoQNP63rjfktYu2FSzPTCCPz1qsQaz5
Rc9t2GwxMnaQKbdmPzUlFYjvtQKBgQDWF4Pji2SYsE7pxsSCrsi5JRJ7qyTH+alv
OtyFeot/J+r/RA2YIQ3PBUgUwQzVzSyeAnnbNNeeq03O2vj7RA9/d5efvRCV/2++
awz0vx2eX05loqWCtH19cm3lSqF52ev9jMuI8FAV/YdXN5nBMOeLu4kVmsUpRDky
oRtlmeXNiwKBgH2sB2m7OM4pjjOeVUVIIqNaewgAhHjQDFLBnPoXpii6gpLkPD4J
+ElRkZ0ynvpjF0+PmKP1hQN5ySNcWx4CqTNDT3+XmS5xksI8x+dbyVkxwEH/Zd2U
zArUB/ufAp49nD4zWxk5geSucWbhI+FnaTvYnT2S7nyYg3WIsv147oTdAoGBAJQE
Af1JnC0siAJ8l9Q5/zBx/wtdUbqoU4pBScFG7jblZEVDyZpKD//3CNTAe509kwFT
eOgi6ogaq1q+bbFaZtSb3EpmLpdl2N3vqS91Coc6ITuHbaKmIrSebng+VtGl5tCP
jRCKBPSPKgkUucqlgxBKggZb0MAtGNZ2KDjgY87tAoGBANV/mG8CNMo27BT646ux
OC4pmyhjGCl/XqYX02SkGNyFANewPwBqmPGSl/sEjz102s4cfBJtq06v+dyFItkQ
9frPcDRMX/jm3W9E9bPLUSMvolHSmvwQxeCZouIlcbktqmfwEvXrUoYzbuatpWQV
uT1ZWPjNuRpiF5epqrO/TVDB
-----END PRIVATE KEY-----`;
    }

    /**
     * Mock public certificate for testing (not for production use)
     */
    static getMockPublicCert(): string {
        return `-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIUNji+KMe16pCsZLDhYwFli38DUIkwDQYJKoZIhvcNAQEL
BQAwKjEbMBkGA1UEAwwSZmlza2FsaXphY2lqYS10ZXN0MQswCQYDVQQGEwJIUjAe
Fw0yNTA2MTYwOTA5MjZaFw0yNjA2MTYwOTA5MjZaMCoxGzAZBgNVBAMMEmZpc2th
bGl6YWNpamEtdGVzdDELMAkGA1UEBhMCSFIwggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQC0VZ7SdT4yyQNk1laHk5HWucRbVklXcr27i6H7y/U6NiVcVNiT
RfdnJoSHBjlU6371asZhk1ZPi6kP5YNNzb2w3jEU9nT/eBL0mtjgreVh1UDUNDpZ
cO6T6bn3xH73kWThP2TsjnocMAqKV8BLkHRPVgQOP9r95Dqkb7zsyR5NLcxYGWxs
x781fnwkAqkwC8+xtKltS9QUWtOXdxaIa22hCtSm27IjE1eIugNoTEM2ey3gahZ6
1IKiCJUcSksUXyT0GfEKqkFyAzyoi7Rr9J+isOV38SY4YbFucgwOkk8vZHBsJF0G
fH2yrGCZLm4qXRukVVjCQxFe5uEPUYvzNxhHAgMBAAGjUzBRMB0GA1UdDgQWBBSp
XVgo4QdluIfqdCwRPhnw5bXNIDAfBgNVHSMEGDAWgBSpXVgo4QdluIfqdCwRPhnw
5bXNIDAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCijnrat/YY
rsU6d56j0I+JckzWSlQ1UCTaMsyIy1xm//LNTQt8NLP+x0BlGcnED4iEx1/rwlb9
sGoesOw1iKz4zbr3pyxY3kjqjhESQNm0gvzGbf3Zo4EztyM+MboIZ9CVLV9wmJIk
lbra88ynkF05SHfE0YoYnv3CejkIYkT3cyhONhkOO8qJI+EvURTqB8XG22ESaB+e
36F50wvDxggDFKN08/3zNrK9FgSqUaE70DsJroNXJjRl0yMVsMByFeW1CqvvIP1v
icpyrDCz5E66m+Ew99chGcPJUemh+zi1FOOYkvM+m93JOo86RPP7lO3R685tYdHV
zEUhxvel9xJJ
-----END CERTIFICATE-----`;
    }

    static getMockEvidentirajERacunZahtjev(): IEvidentirajERacunZahtjev {
        return {
            _id: XmlSigner.generateId("ID"),
            Zaglavlje: {
                datumVrijemeSlanja: new Date().toISOString(),
                vrstaERacuna: "U"
            },
            ERacun: [{
                brojDokumenta: "1234-P1-1",
                datumIzdavanja: "2025-06-23",
                vrstaDokumenta: "380",
                valutaERacuna: "EUR",
                datumDospijecaPlacanja: "2026-01-01",
                vrstaPoslovnogProcesa: "P1",
                Izdavatelj: {
                    ime: "IZDAVATELJ",
                    oibPorezniBroj: "00000000001"
                },
                Primatelj: {
                    ime: "PRIMATELJ",
                    oibPorezniBroj: "11111111119"
                },
                PrijenosSredstava: [{
                    identifikatorRacunaZaPlacanje: "HRXXXXXXXXXXXXXXXX"
                }],
                DokumentUkupanIznos: {
                    neto: 100,
                    iznosBezPdv: 100,
                    pdv: 25,
                    iznosSPdv: 125,
                    iznosKojiDospijevaZaPlacanje: 125
                },
                RaspodjelaPdv: [
                    {
                        kategorijaPdv: "S",
                        oporeziviIznos: 100,
                        iznosPoreza: 25,
                        stopa: 25
                    }
                ],
                StavkaERacuna: [{
                    kolicina: 1,
                    jedinicaMjere: "H87",
                    artiklNetoCijena: 100,
                    artiklOsnovnaKolicina: 1,
                    artiklJedinicaMjereZaOsnovnuKolicinu: "H87",
                    artiklKategorijaPdv: "S",
                    artiklStopaPdv: 25,
                    artiklNaziv: "Proizvod",
                    ArtiklIdentifikatorKlasifikacija: [
                        {
                            identifikatorKlasifikacije: "62.90.90",
                            identifikatorSheme: "CG"
                        }
                    ]
                }],
                indikatorKopije: false
            }]
        };
    }
}
