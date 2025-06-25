<?xml version="1.0" encoding="UTF-8"?>
<!-- Specifikacije osnovne upotrebe eRačuna s proširenjima v1.2 (2025-06-23) -->
<schema xmlns="http://purl.oclc.org/dsdl/schematron"
        xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
        xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
        xmlns:cn="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"
        xmlns:ubl="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
        xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
        xmlns:hrextac="urn:mfin.gov.hr:schemas:UBL-2:1"
        queryBinding="xslt2">

  <title>Fiskalizacija 2.0 - Hrvatska poslovna pravila za UBL</title>

  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="cn" uri="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"/>
  <ns prefix="ubl" uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
  <ns prefix="ext" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
  <ns prefix="hrextac" uri="urn:mfin.gov.hr:schemas:UBL-2:1"/>

  <phase id="HR-BR_phase">
    <active pattern="HR-Model"/>
  </phase>

  <pattern id="HR-Model">

    <rule context="/ubl:Invoice | /cn:CreditNote">

      <assert id="HR-BR-1" flag="fatal"
              test="not(matches(cbc:ID, '\s'))">
        [HR-BR-1] Broj računa (BT-1) ne smije sadržavati bjeline (whitespace znakove).
      </assert>

      <assert id="HR-BR-2" flag="fatal"
              test="cbc:IssueTime and normalize-space(cbc:IssueTime) != ''">
        [HR-BR-2] Račun mora imati vrijeme izdavanja računa (HR-BT-2).
      </assert>

      <assert id="HR-BR-4" flag="fatal"
              test="not(cac:LegalMonetaryTotal/cbc:PayableAmount > 0) or (cbc:DueDate and normalize-space(cbc:DueDate) != '')">
        [HR-BR-4] U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9) mora biti naveden.
      </assert>

      <assert id="HR-BR-5" flag="fatal"
              test="cbc:CustomizationID and contains(cbc:CustomizationID, 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0')">
        [HR-BR-5] Identifikator specifikacije (BT-24) mora imati vrijednost 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'
      </assert>

      <assert id="HR-BR-6" flag="fatal"
              test="every $ref in cac:BillingReference satisfies ($ref/cac:InvoiceDocumentReference/cbc:IssueDate and normalize-space($ref/cac:InvoiceDocumentReference/cbc:IssueDate) != '')">
        [HR-BR-6] Svaka referenca prethodnog računa (BG-3) mora imati datum izdavanja prethodnog računa (BT-26)
      </assert>

      <assert id="HR-BR-7" flag="fatal"
              test="cac:AccountingSupplierParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingSupplierParty/cac:Party/cbc:EndpointID) != ''">
        [HR-BR-7] Elektronička adresa Prodavatelja (BT-34) mora biti navedena
      </assert>

      <assert id="HR-BR-9" flag="fatal"
              test="cac:AccountingSupplierParty/cac:SellerContact/cbc:ID and normalize-space(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID) != '' and matches(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID, '^\d{11}$')">
        [HR-BR-9] Račun mora sadržavati OIB operatera (HR-BT-5) koji mora biti točno 11 znamenki
      </assert>

      <assert id="HR-BR-10" flag="fatal"
              test="cac:AccountingCustomerParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingCustomerParty/cac:Party/cbc:EndpointID) != ''">
        [HR-BR-10] Elektronička adresa Kupca (BT-49) mora biti navedena.
      </assert>

      <assert id="HR-BR-11" flag="fatal"
              test="every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (
                not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or
                ($charge/cac:TaxCategory/cbc:Name and normalize-space($charge/cac:TaxCategory/cbc:Name) != '' and
                 $charge/cac:TaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O', 'HR:N'))
              )">
        [HR-BR-11] Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen PDV-a mora imati oznaku kategorije PDV-a troška na razini dokumenta (HR-BT-6) iz tablice HR-TB-2 HR oznaka kategorija PDV-a
      </assert>

      <assert id="HR-BR-13" flag="fatal"
              test="every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (
                not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or
                ($charge/cac:TaxCategory/cbc:TaxExemptionReason and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReason) != '') or
                ($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode) != '')
              )">
        [HR-BR-13] Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen mora imati razlog oslobođenja PDV-a troška na razini dokumenta (HR-BT-7) ili kod razloga oslobođenja PDV-a a troška na razini dokumenta (HR-BT-8)
      </assert>

      <assert id="HR-BR-17" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:OrderLineReference/cac:OrderReference/cbc:ID) or not(cac:OrderReference/cbc:ID)">
        [HR-BR-17] Ako se koristi referenca narudžbenice na stavci računa (HR-BT-9), zabranjeno je koristiti BT-13 Referencu narudžbenice na razini računa
      </assert>

      <assert id="HR-BR-18" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:DespatchLineReference/cac:DocumentReference/cbc:ID) or not(cac:DespatchDocumentReference/cbc:ID)">
        [HR-BR-18] Ako se koristi referenca otpremnice na stavci računa (HR-BT-10), zabranjeno je koristiti BT-16 Referencu otpremnice na razini računa
      </assert>

      <assert id="HR-BR-19" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:ReceiptLineReference/cac:DocumentReference/cbc:ID) or not(cac:ReceiptDocumentReference/cbc:ID)">
        [HR-BR-19] Ako se koristi referenca primke na stavci računa (HR-BT-11), zabranjeno je koristiti BT-15 Referencu primke na razini računa
      </assert>

      <assert id="HR-BR-26" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' or
                       cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'E') or
                   ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal">
        [HR-BR-26] Račun koji sadržava stavku računa (BG-25), popust na razini dokumenta (BG-20) ili trošak na razini dokumenta (BG-21), gdje je kod kategorije PDV-a (BT-151, BT-95 ili BT-102) „oslobođeno od PDV-a" mora u za svaki razlog oslobođenja od PDV-a ili kod razloga oslobođenja od PDV-a sadržavati HR raspodjelu oslobođenja od PDV (HR-BG-2)
      </assert>

      <assert id="HR-BR-27" flag="fatal"
              test="every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (
                $hrSubtotal/cbc:TaxableAmount =
                (sum((cac:InvoiceLine | cac:CreditNoteLine)/cbc:LineExtensionAmount) -
                 sum(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cbc:Amount) +
                 sum(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cbc:Amount) -
                 (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1])
              )">
        [HR-BR-27] U HR raspodjeli PDV-a (HR-BG-2) HR oporezivi iznos (HR-BT-16) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24)
      </assert>

      <assert id="HR-BR-28" flag="fatal"
              test="every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (
                not($hrSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:ID = 'VAT' and $hrSubtotal/cac:TaxCategory/cbc:ID = ('E', 'O')) or
                ($hrSubtotal/cbc:TaxAmount = 0)
              )">
        [HR-BR-28] Za cac:TaxScheme = „VAT" i kod porezne kategorije (HR-BT-18) „E" ili „O" HR iznos porezne kategorije (HR-BT-17) mora biti 0
      </assert>

      <assert id="HR-BR-29" flag="fatal"
              test="every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (
                not($hrSubtotal/cbc:TaxableAmount = 0) or
                ($hrSubtotal/cac:TaxCategory/cbc:ID = 'O' and $hrSubtotal/cbc:TaxAmount = 0)
              )">
        [HR-BR-29] Stavke računa, troškovi ili popusti koji ne ulaze u poreznu osnovicu HR kod kategorije PDV-a (HR-BT-18) mora biti „O", a HR iznos kategorije poreza (HR-BT-17) mora biti 0
      </assert>

      <assert id="HR-BR-30" flag="fatal"
              test="not(((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O') or
                       (cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'O')) or
                   ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal">
        [HR-BR-30] HR Ukupni iznosi računa (HR-BG-3) se navodi na računu ako račun sadrži stavke računa (BG-25) ili troškove na razini dokumenta (BG-21) koji ne ulaze u poreznu osnovicu računa
      </assert>

      <assert id="HR-BR-31" flag="fatal"
              test="not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount) or
                   (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount =
                    (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID != 'O']/cbc:LineExtensionAmount) -
                     sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) +
                     sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) -
                     (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1]))">
        [HR-BR-31] HR porezna osnovica (HR-BT-23) je ukupan neto iznos stavki računa (BT-131) koje ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje ulaze u poreznu osnovicu umanjen za HR neoporezivi iznos (HR-BT-24)
      </assert>

      <assert id="HR-BR-32" flag="fatal"
              test="not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount) or
                   (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount =
                    (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O']/cbc:LineExtensionAmount) -
                     sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount) +
                     sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount)))">
        [HR-BR-32] HR neoporezivi iznos (HR-BT-24) jednak je zbroju neto iznosa stavki računa (BT-131) koje NE ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje NE ulaze u poreznu osnovicu
      </assert>

      <assert id="HR-BR-33" flag="fatal"
              test="not(//*[not(*) and not(@*) and normalize-space() = '' and local-name() != 'SignatureInformation'])">
        [HR-BR-33] Račun ne smije sadržavati prazne xml elemente osim elementa s elektroničkim potpisom računa
      </assert>
      
      <assert id="HR-BR-34" flag="fatal"
              test="cbc:ProfileID and (matches(cbc:ProfileID, '^P([1-9]|1[0-2])$') or matches(cbc:ProfileID, '^P99:.+$'))">
        [HR-BR-34] Oznaka procesa (BT-23) MORA biti navedena. Koriste se vrijednosti P1-P12 ili P99:Oznaka kupca iz Tablice 4 Tipovi poslovnog procesa
      </assert>

      <assert id="HR-BR-37" flag="fatal"
              test="cac:AccountingSupplierParty/cac:SellerContact/cbc:Name and normalize-space(cac:AccountingSupplierParty/cac:SellerContact/cbc:Name) != ''">
        [HR-BR-37] Račun mora sadržavati oznaku operatera (HR-BT-4)
      </assert>

      <assert id="HR-BR-S-1" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'S') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-S-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-S-2" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'S') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-S-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-S-3" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'S') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-S-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-Z-1" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'Z') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-Z-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-Z-2" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'Z') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-Z-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-Z-3" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'Z') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-Z-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-E-1" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-E-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-E-2" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'E') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-E-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-E-3" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'E') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-E-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-AE-1" flag="fatal"
              test="not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'AE') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-AE-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-AE-2" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'AE') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-AE-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

      <assert id="HR-BR-AE-3" flag="fatal"
              test="not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'AE') or
                    (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')">
        [HR-BR-AE-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </assert>

    </rule>

    <rule context="/ubl:Invoice/cac:InvoiceLine | /cn:CreditNote/cac:CreditNoteLine">

      <assert id="HR-BR-16" flag="fatal"
              test="not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or
                    (cac:Item/cac:ClassifiedTaxCategory/cbc:Name and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:Name) != '' and
                     cac:Item/cac:ClassifiedTaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O', 'HR:N'))">
        [HR-BR-16] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati oznaku kategorije PDV-a obračunate stavke HR-BT-12 iz šifarnika oznaka kategorija PDV-a HR-TB-2
      </assert>

      <assert id="HR-BR-20" flag="fatal"
              test="not(cac:Price/cbc:BaseQuantity) or (cac:Price/cbc:BaseQuantity > 0)">
        [HR-BR-20] Jedinična količina za cijenu artikla (BT-149), ako je iskazana, MORA biti pozitivan broj veći od nule
      </assert>

      <assert id="HR-BR-21" flag="fatal"
              test="not(cac:Price/cbc:BaseQuantity/@unitCode) or
                    not((cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode) or
                    (cac:Price/cbc:BaseQuantity/@unitCode = (cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode)">
        [HR-BR-21] Jedinica mjere jedinične količine cijene artikla (BT-150), ako je iskazan, MORA biti jednaka jedinici mjere obračunate količine (BT-130)
      </assert>
      
      <assert id="HR-BR-25" flag="fatal"
              test="(ancestor::*[self::ubl:Invoice or self::cn:CreditNote]/cbc:InvoiceTypeCode = '458') or
                    (cac:Item/cac:CommodityClassification/cbc:ItemClassificationCode and
                     cac:Item/cac:CommodityClassification/cbc:ItemClassificationCode/@listID = 'CG')">
        [HR-BR-25] Svaki artikl MORA imati identifikator klasifikacije artikla (BT-158) iz sheme Klasifikacija proizvoda po djelatnostima: KPD (CPA) – listID „CG", osim u slučaju računa za predujam.
      </assert>
      
      <assert id="HR-BR-35" flag="fatal"
              test="not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or
                    (cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' and cac:Item/cac:ClassifiedTaxCategory/cbc:Percent = 0)">
        [HR-BR-35] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati kod kategorije PDV-a „E" (BT-151) i stopu PDV-a (BT-152) jednaku 0
      </assert>

      <assert id="HR-BR-36" flag="fatal"
              test="not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or
                    (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) != '') or
                    (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode) != '')">
        [HR-BR-36] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)
      </assert>
      
    </rule>

  </pattern>

</schema>
