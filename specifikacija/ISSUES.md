# Specifikacija upotrebe eRačuna s proširenjima - verzija 1.3 (2025-07-03)

## Greške u specifikaciji

### Pojmovi

#### Pogrešna putanja

- BG-3
 - treba biti `/cac:BillingReference`, a ne `/cac:BillingReference/cac:InvoiceDocumentReference`
- HR-BG-1, HR-BG-2, HR-BG-3, HR-BT-15 do HR-BT-25
 - specifikacija - `ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data`
 - schema i validator - `ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data` 
- HR-BT-17
  - u CreditNote putanji nedostaje dio `hrextac:HRTaxTotal`
- HR-BT-23 
 - specifikacija - `hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount`
 - schema i validator - `hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount`
- HR-BT-24 
 - specifikacija - u putanji je `hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount` a u primjeru `hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount` 
 - schema i validator - `hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount`

#### Pogrešan opis

- BT-56 - opis ne odgovara namjeni

### Opisi pravila

#### Nerazumljiv opis pravila

- HR-BR-27 - `U HR raspodjeli PDV-a (HR-BG-2) HR oporezivi iznos (HR-BT-16) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24).`
    - HR-BT-16 je element koji se ponavlja za svaku vrstu poreza, a ne ukupni oporezivi iznos. Prema tome pretpostavljam da bi tu trebalo pisati "...suma HR oporezivih iznosa (HR-BT-16)..." ??
    - u validatoru je opis ovog pravila izmijenjen i glasi
      - `HR iznos osnovice za PDV (HR-BT-23) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24)`

- HR-BR-28 - `Za cac:TaxScheme = „VAT“ i kod porezne kategorije „E“ ili „O“ HR iznos porezne kategorije mora biti 0`
  - Nije definirano kako jednoznačno povezati TaxSubtotal sa pripadajućim HRTaxSubtotal elementom, jer element `hrextac:HRTaxCategory/cbc:Name` nije obvezan
  - druga opcija je da se ovdje misli na `hrextac:HRTaxScheme/cbc:ID` ??

- HR-BR-29 - `Stavke računa, troškovi ili popusti koji ne ulaze u poreznu osnovicu HR kod kategorije PDV-a (HR-BT-18) mora biti „O", a HR iznos kategorije poreza (HR-BT-17) mora biti 0`
  - Zašto se ovdje spominju stavke, troškovi i popusti ako se pravilo odnosi na HRTaxSubtotal?
  - Što se tiče validacijske sheme, ovo pravilo vjerojatno samo znači da HR-BT-17 mora biti `0` ako je HR-BT-18 `O` (Out of scope), te da HR-BT-18 mora odgovarati vrijednosti iz HR-TB-2

#### BT nije naveden eksplicitno u opisu pravila

- HR-BR-1 - nije naveden BT: BT-1
- HR-BR-5 - nije naveden BT: BT-24, razmak u URN-u između 'urn:' i 'mfin'
- HR-BR-20 - nije naveden BT: BT-149
- HR-BR-21 - nije naveden BT: BT-150 (Jedinica mjere jedinične količine cijene artikla)
- HR-BR-25 - nije naveden BT: BT-158 (Identifikator klasifikacije artikla)
- HR-BR-28 - nije naveden BT: HR-BT-18 (kod porezne kategorije), HR-BT-17 (HR iznos porezne kategorije)
- HR-BR-34 - nije naveden BT: BT-23

#### Naveden je pogrešan BT

- HR-BR-10 - pogrešan BT: umjesto BT-49 napisano je BT-37
- HR-BR-13 - pogrešan BT: umjesto HR-BT-7 napisano je HR-BT-6, umjesto HR-BT-8 napisano je HR-BT-7
- HR-BR-27 - pogrešan BT: umjesto HR-BT-23 napisano je HR-BT-17, umjesto HR-BT-24 napisano je HR-BT-20
- HR-BR-31 - pogrešan BT: umjesto HR-BT-23 napisano je HR-BT-19
- HR-BR-32 - pogrešan BT: umjesto HR-BT-24 napisano je HR-BT-20

# Validator

## Nema validaciju za pravila
 - HR-BR-28
 - HR-BR-30
 - HR-BR-31
 - HR-BR-35

# Primjeri eRačuna 

## Odobrenje.xml

- Ne zadovoljava pravilo [HR-BR-4] U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9) mora biti naveden.
  - ima pozitivan iznos koji dospijeva na plaćanje (BT-115)
  - nema BT-9 (Datum dospijeća plaćanja) (/cac:PaymentMeans/cbc:PaymentDueDate)

## eRacun_PDV_NEOP_POVRATNA_NAKNADA_stavka.xml

- Ne zadovoljava pravilo [HR-BR-36] - Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)
  - ima stavku PDV-a koja ne podliježe PDV-u ili je oslobođena od PDV-a ("Povratna naknada")
  - nema HR-BT-13 (Razlog oslobođenja PDV-a /cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason)
  - nema HR-BT-14 (Kod razloga oslobođenja PDV-a) (/cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode)

## eRacun_PDV_NEOP_PP_trosak.xml

- Ne zadovoljava pravilo [HR-BR-11] Svaki trošak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen PDV-a mora imati oznaku kategorije PDV-a troška na razini dokumenta (HR-BT-6) iz tablice HR-TB-2 HR oznaka kategorija PDV-a
    - ima trošak na razini dokumenta koji ne podliježe PDV-u ili je oslobođen PDV-a ("#HR:PP#")
    - nema HR-BT-6 (Oznaka kategorije PDV-a troška na razini dokumenta) (/cac:AllowanceCharge/cac:TaxCategory/cbc:Name)
- Ne zadovoljava pravilo [HR-BR-13] Svaki trošak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen mora imati razlog oslobođenja PDV-a troška na razini dokumenta (HR-BT-7) ili kod razloga oslobođenja PDV-a a troška na razini dokumenta (HR-BT-8)
  - ima trošak na razini dokumenta koji ne podliježe PDV-u ili je oslobođen PDV-a ("#HR:PP#")
  - nema HR-BT-7 (Razlog oslobođenja PDV-a troška na razini dokumenta) (/cac:AllowanceCharge/cac:TaxCategory/cbc:TaxExemptionReason)

## Ostalo

- U primjerima PP i POVNAK u `cac:TaxCategory/cac:TaxScheme/cbc:ID` odnosno `cac:ClassifiedTaxCategory/cac:TaxScheme/cbc:ID` navedeno je `VAT` što se ne podudara sa vrijednostima iz tablice 2. (greška ili namjera?)
