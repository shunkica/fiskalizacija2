import {IERacun, IEvidentirajERacunZahtjev} from "../../src";
import {ZaglavljeFiskalizacija} from "../../src/models/xml/fiskalizacija";
import {XmlSigner} from "../../src/util/signing";
import {expect} from "vitest";

export class XmlTestProvider {
    /**
     * Basic UBL invoice with all required fields
     */
    static getFullUblInvoice = (): string => `<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cct="urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:hrextac="urn:hzn.hr:schema:xsd:HRExtensionAggregateComponents-1"
         xmlns:p3="urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2" xmlns:sac="urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2" xmlns:sig="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 ../xsd/ubl/maindoc/UBL-Invoice-2.1.xsd ">
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
  <cbc:CopyIndicator>true</cbc:CopyIndicator>
  <cbc:IssueDate>2025-05-01</cbc:IssueDate>
  <cbc:IssueTime>12:00:00</cbc:IssueTime>
  <cbc:DueDate>2025-05-31</cbc:DueDate>
  <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
  <cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>
  <cac:BillingReference>
    <cac:InvoiceDocumentReference>
      <cbc:ID>PREV-001</cbc:ID>
      <cbc:IssueDate>2024-01-01</cbc:IssueDate>
    </cac:InvoiceDocumentReference>
  </cac:BillingReference>
  <cac:BillingReference>
    <cac:InvoiceDocumentReference>
      <cbc:ID>PREV-002</cbc:ID>
      <cbc:IssueDate>2024-02-01</cbc:IssueDate>
    </cac:InvoiceDocumentReference>
  </cac:BillingReference>
  <cac:ContractDocumentReference>
    <cbc:ID>REF-12345</cbc:ID>
  </cac:ContractDocumentReference>
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
  <cac:Delivery>
    <cbc:ActualDeliveryDate>2025-05-15</cbc:ActualDeliveryDate>
  </cac:Delivery>
  <cac:PaymentMeans>
    <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode>
    <cbc:InstructionNote>Opis plaćanja</cbc:InstructionNote>
    <cbc:PaymentID>HR00 123456</cbc:PaymentID>
    <cac:PayeeFinancialAccount>
      <cbc:ID>HRXXXXXXXXXXXXXXXX</cbc:ID>
      <cbc:Name>Racun 1</cbc:Name>
      <cac:FinancialInstitutionBranch>
        <cbc:ID>BANKHR1X</cbc:ID>
      </cac:FinancialInstitutionBranch>
    </cac:PayeeFinancialAccount>
  </cac:PaymentMeans>
  <cac:PaymentMeans>
    <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode>
    <cac:PayeeFinancialAccount>
      <cbc:ID>HRYYYYYYYYYYYYYY</cbc:ID>
      <cbc:Name>Racun 2</cbc:Name>
      <cac:FinancialInstitutionBranch>
        <cbc:ID>BANKHR2Y</cbc:ID>
      </cac:FinancialInstitutionBranch>
    </cac:PayeeFinancialAccount>
  </cac:PaymentMeans>
  <cac:AllowanceCharge>
    <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
    <cbc:AllowanceChargeReason>Document level discount</cbc:AllowanceChargeReason>
    <cbc:Amount currencyID="EUR">40.00</cbc:Amount>
    <cac:TaxCategory>
      <cbc:ID>S</cbc:ID>
      <cbc:Percent>25</cbc:Percent>
      <cac:TaxScheme>
        <cbc:ID>VAT</cbc:ID>
      </cac:TaxScheme>
    </cac:TaxCategory>
  </cac:AllowanceCharge>
  <cac:TaxTotal>
    <cbc:TaxAmount currencyID="EUR">50.00</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="EUR">200.00</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="EUR">50.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cbc:ID>S</cbc:ID>
        <cbc:Percent>25</cbc:Percent>
        <cac:TaxScheme>
          <cbc:ID>VAT</cbc:ID>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="EUR">100.00</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="EUR">0.00</cbc:TaxAmount>
      <cac:TaxCategory>
        <cbc:ID>Z</cbc:ID>
        <cbc:Percent>0</cbc:Percent>
        <cac:TaxScheme>
          <cbc:ID>VAT</cbc:ID>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="EUR">340.00</cbc:LineExtensionAmount>
    <cbc:TaxExclusiveAmount currencyID="EUR">300.00</cbc:TaxExclusiveAmount>
    <cbc:TaxInclusiveAmount currencyID="EUR">350.00</cbc:TaxInclusiveAmount>
    <cbc:AllowanceTotalAmount currencyID="EUR">40.00</cbc:AllowanceTotalAmount>
    <cbc:PrepaidAmount currencyID="EUR">30.00</cbc:PrepaidAmount>
    <cbc:PayableAmount currencyID="EUR">320.00</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
  <cac:InvoiceLine>
    <cbc:ID>1</cbc:ID>
    <cbc:InvoicedQuantity unitCode="H87">2.000</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="EUR">240.00</cbc:LineExtensionAmount>
    <cac:Item>
      <cbc:Name>Proizvod</cbc:Name>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode listID="CG" listVersionID="1">62.90.90</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode listID="CG">62.90.91</cbc:ItemClassificationCode>
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
      <cbc:PriceAmount currencyID="EUR">120.000000</cbc:PriceAmount>
      <cbc:BaseQuantity unitCode="H87">1.000</cbc:BaseQuantity>
    </cac:Price>
  </cac:InvoiceLine>
  <cac:InvoiceLine>
    <cbc:ID>2</cbc:ID>
    <cbc:InvoicedQuantity unitCode="H87">1.000</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="EUR">100.00</cbc:LineExtensionAmount>
    <cac:Item>
      <cbc:Name>Proizvod PDV0</cbc:Name>
      <cac:CommodityClassification>
        <cbc:ItemClassificationCode listID="CG">62.90.90</cbc:ItemClassificationCode>
      </cac:CommodityClassification>
      <cac:ClassifiedTaxCategory>
        <cbc:ID>Z</cbc:ID>
        <cbc:Name>HR:PDV0</cbc:Name>
        <cbc:Percent>0</cbc:Percent>
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

    static validateFullUblInvoice(er: IERacun) {
        expect(er.brojDokumenta).toBe('5-P1-1');
        expect(er.datumIzdavanja).toBe('2025-05-01');
        expect(er.vrstaDokumenta).toBe('380');
        expect(er.valutaERacuna).toBe('EUR');
        expect(er.datumDospijecaPlacanja).toBe('2025-05-31');
        expect(er.datumIsporuke).toBe('2025-05-15');
        expect(er.vrstaPoslovnogProcesa).toBe('P1');
        expect(er.referencaNaUgovor).toBe('REF-12345');
        expect(er.indikatorKopije).toBe(true);
        expect(er.PrethodniERacun).toBeDefined();
        expect(er.PrethodniERacun.length).toBe(2);
        expect(er.PrethodniERacun[0].brojDokumenta).toBe('PREV-001');
        expect(er.PrethodniERacun[0].datumIzdavanja).toBe('2024-01-01');
        expect(er.PrethodniERacun[1].brojDokumenta).toBe('PREV-002');
        expect(er.PrethodniERacun[1].datumIzdavanja).toBe('2024-02-01');
        expect(er.Izdavatelj.ime).toBe('FINANCIJSKA AGENCIJA');
        expect(er.Izdavatelj.oibPorezniBroj).toBe('HR12345678901');
        expect(er.Primatelj.ime).toBe('Tvrtka B d.o.o.');
        expect(er.Primatelj.oibPorezniBroj).toBe('HR11111111119');
        expect(er.PrijenosSredstava).toBeDefined();
        expect(er.PrijenosSredstava.length).toBe(2);
        expect(er.PrijenosSredstava[0].identifikatorRacunaZaPlacanje).toBe('HRXXXXXXXXXXXXXXXX');
        expect(er.PrijenosSredstava[0].nazivRacunaZaPlacanje).toBe('Racun 1');
        expect(er.PrijenosSredstava[0].identifikatorPruzateljaPlatnihUsluga).toBe('BANKHR1X');
        expect(er.PrijenosSredstava[1].identifikatorRacunaZaPlacanje).toBe('HRYYYYYYYYYYYYYY');
        expect(er.PrijenosSredstava[1].nazivRacunaZaPlacanje).toBe('Racun 2');
        expect(er.PrijenosSredstava[1].identifikatorPruzateljaPlatnihUsluga).toBe('BANKHR2Y');
        expect(er.DokumentUkupanIznos.neto).toBe(340.00);
        expect(er.DokumentUkupanIznos.popust).toBe(40.00);
        expect(er.DokumentUkupanIznos.iznosBezPdv).toBe(300.00);
        expect(er.DokumentUkupanIznos.pdv).toBe(50.00);
        expect(er.DokumentUkupanIznos.iznosSPdv).toBe(350.00);
        expect(er.DokumentUkupanIznos.placeniIznos).toBe(30.00);
        expect(er.DokumentUkupanIznos.iznosKojiDospijevaZaPlacanje).toBe(320.00);
        expect(er.RaspodjelaPdv).toBeDefined();
        expect(er.RaspodjelaPdv.length).toBe(2);
        expect(er.RaspodjelaPdv[0].kategorijaPdv).toBe('S');
        expect(er.RaspodjelaPdv[0].oporeziviIznos).toBe(200.00);
        expect(er.RaspodjelaPdv[0].iznosPoreza).toBe(50.00);
        expect(er.RaspodjelaPdv[0].stopa).toBe(25);
        expect(er.RaspodjelaPdv[1].kategorijaPdv).toBe('Z');
        expect(er.RaspodjelaPdv[1].oporeziviIznos).toBe(100.00);
        expect(er.RaspodjelaPdv[1].iznosPoreza).toBe(0);
        expect(er.RaspodjelaPdv[1].stopa).toBe(0);
        expect(er.StavkaERacuna).toBeDefined();
        expect(er.StavkaERacuna.length).toBe(2);
        expect(er.StavkaERacuna[0].kolicina).toBe(2.000);
        expect(er.StavkaERacuna[0].jedinicaMjere).toBe('H87');
        expect(er.StavkaERacuna[0].artiklNetoCijena).toBe(120);
        expect(er.StavkaERacuna[1].artiklOsnovnaKolicina).toBe(1)
        expect(er.StavkaERacuna[1].artiklJedinicaMjereZaOsnovnuKolicinu).toBe("H87")
        expect(er.StavkaERacuna[0].artiklKategorijaPdv).toBe('S');
        expect(er.StavkaERacuna[0].artiklStopaPdv).toBe(25);
        expect(er.StavkaERacuna[0].artiklNaziv).toBe('Proizvod');
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija).toBeDefined();
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija!.length).toBe(2);
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![0].identifikatorKlasifikacije).toBe('62.90.90');
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![0].identifikatorSheme).toBe('CG');
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![0].verzijaSheme).toBe("1")
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![1].identifikatorKlasifikacije).toBe('62.90.91');
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![1].identifikatorSheme).toBe('CG');
        expect(er.StavkaERacuna[1].kolicina).toBe(1)
        expect(er.StavkaERacuna[1].jedinicaMjere).toBe("H87")
        expect(er.StavkaERacuna[1].artiklNetoCijena).toBe(100)
        expect(er.StavkaERacuna[1].artiklOsnovnaKolicina).toBe(1)
        expect(er.StavkaERacuna[1].artiklJedinicaMjereZaOsnovnuKolicinu).toBe("H87")
        expect(er.StavkaERacuna[1].artiklKategorijaPdv).toBe("Z")
        expect(er.StavkaERacuna[1].artiklStopaPdv).toBe(0)
        expect(er.StavkaERacuna[1].artiklNaziv).toBe("Proizvod PDV0")
        expect(er.StavkaERacuna[1].ArtiklIdentifikatorKlasifikacija).toBeDefined;
        expect(er.StavkaERacuna[1].ArtiklIdentifikatorKlasifikacija!.length).toBe(1);
        expect(er.StavkaERacuna[1].ArtiklIdentifikatorKlasifikacija[0].identifikatorKlasifikacije).toBe("62.90.90")
        expect(er.StavkaERacuna[1].ArtiklIdentifikatorKlasifikacija[0].identifikatorSheme).toBe("CG")
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

    static validateMinimalUblInvoice(er: IERacun) {
        expect(er.brojDokumenta).toBe('MINIMAL-001');
        expect(er.datumIzdavanja).toBe('2024-01-15');
        expect(er.vrstaDokumenta).toBe('380');
        expect(er.valutaERacuna).toBe('EUR');
        expect(er.datumDospijecaPlacanja).toBeUndefined();
        expect(er.datumIsporuke).toBeUndefined();
        expect(er.vrstaPoslovnogProcesa).toBe('P1');
        expect(er.referencaNaUgovor).toBeUndefined();
        expect(er.indikatorKopije).toBe(false);
        expect(er.PrethodniERacun).toBeUndefined();
        expect(er.Izdavatelj.ime).toBe('Minimal Supplier');
        expect(er.Izdavatelj.oibPorezniBroj).toBe('11111111111');
        expect(er.Primatelj.ime).toBe('Minimal Customer');
        expect(er.Primatelj.oibPorezniBroj).toBe('22222222222');
        expect(er.PrijenosSredstava).toBeUndefined();
        expect(er.DokumentUkupanIznos.neto).toBe(50.00);
        expect(er.DokumentUkupanIznos.popust).toBeUndefined();
        expect(er.DokumentUkupanIznos.iznosBezPdv).toBe(50.00);
        expect(er.DokumentUkupanIznos.pdv).toBe(0.00);
        expect(er.DokumentUkupanIznos.iznosSPdv).toBe(50.00);
        expect(er.DokumentUkupanIznos.placeniIznos).toBeUndefined();
        expect(er.DokumentUkupanIznos.iznosKojiDospijevaZaPlacanje).toBe(50.00);
        expect(er.RaspodjelaPdv.length).toBe(1);
        expect(er.RaspodjelaPdv[0].kategorijaPdv).toBe('Z');
        expect(er.RaspodjelaPdv[0].oporeziviIznos).toBe(50.00);
        expect(er.RaspodjelaPdv[0].iznosPoreza).toBe(0.00);
        expect(er.RaspodjelaPdv[0].stopa).toBeUndefined();
        expect(er.RaspodjelaPdv[0].razlogOslobodenja).toBeUndefined();
        expect(er.RaspodjelaPdv[0].tekstRazlogaOslobodenja).toBeUndefined();
        expect(er.StavkaERacuna.length).toBe(1);
        expect(er.StavkaERacuna[0].kolicina).toBe(2);
        expect(er.StavkaERacuna[0].jedinicaMjere).toBe('HUR');
        expect(er.StavkaERacuna[0].artiklNetoCijena).toBe(25.00);
        expect(er.StavkaERacuna[0].artiklOsnovnaKolicina).toBeUndefined();
        expect(er.StavkaERacuna[0].artiklJedinicaMjereZaOsnovnuKolicinu).toBeUndefined();
        expect(er.StavkaERacuna[0].artiklKategorijaPdv).toBe('Z');
        expect(er.StavkaERacuna[0].artiklStopaPdv).toBe(0.0);
        expect(er.StavkaERacuna[0].artiklNaziv).toBe('Consulting Service');
        expect(er.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija).toBeUndefined();
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
