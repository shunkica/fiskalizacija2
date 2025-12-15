# Specifikacija upotrebe eRačuna s proširenjima - verzija 1.5 (2025-12-14)

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
- u xpath putanjama `hrextac:HRTaxCategory` je zamijenjen sa `cac:TaxCategory` za neke BT elemente, pretpostavljam da greškom i da i dalje treba ostati `hrextac:HRTaxCategory`

#### Pogrešan opis

- BT-56 - opis ne odgovara namjeni

### Opisi pravila

#### Nerazumljiv opis pravila

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
- HR-BR-32 - pogrešan BT: umjesto HR-BT-24 napisano je HR-BT-20

# Validator

## Nema validaciju za pravila
 - HR-BR-28
 - HR-BR-30
 - HR-BR-31
 - HR-BR-35

# Primjeri eRačuna 

## Racun_za_leasing_PDV_PPMV_aktivacija.xml
 - [HR-BR-25] - Svaki artikl MORA imati identifikator klasifikacije artikla iz sheme Klasifikacija proizvoda po djelatnostima: KPD (CPA) – listID „CG“, osim u slučaju računa za predujam i odobrenja.

