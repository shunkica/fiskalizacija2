<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://purl.oclc.org/dsdl/schematron"
        xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
        xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
        xmlns:cn="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"
        xmlns:ubl="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
        xmlns:hrextac="urn:mfin.gov.hr:schemas:UBL-2:1"
        queryBinding="xslt2">

  <title>Fiskalizacija 2.0 - Hrvatska poslovna pravila za UBL</title>

  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="cn" uri="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"/>
  <ns prefix="ubl" uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
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

      <assert id="HR-BR-4(1)" flag="fatal"
              test="not(cac:LegalMonetaryTotal/cbc:PayableAmount > 0) or (cbc:DueDate and normalize-space(cbc:DueDate) != '')">
        [HR-BR-4] U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9)
        mora biti naveden.
      </assert>

      <assert id="HR-BR-4(2)" flag="fatal"
              test="cbc:ProfileID and (matches(cbc:ProfileID, '^P([1-9]|1[0-2])$') or matches(cbc:ProfileID, '^P99:.+$'))">
        [HR-BR-4] Oznaka procesa (BT-23) MORA biti navedena. Koriste se vrijednosti P1-P12 ili P99:Oznaka kupca iz
        Tablice 4 Tipovi poslovnog procesa
      </assert>

      <assert id="HR-BR-5" flag="fatal"
              test="cbc:CustomizationID and contains(cbc:CustomizationID, 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0')">
        [HR-BR-5] Identifikator specifikacije (BT-24) mora imati vrijednost
        'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'
      </assert>

    </rule>

  </pattern>

</schema>
