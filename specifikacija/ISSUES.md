# Specifikacija upotrebe eRačuna s proširenjima - verzija 1.8 (2026-03-12)

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
- HR-BR-50 - pogrešan BT: u tijelu dokumenta piše BT-73 umjesto BT-74 (Završni datum obračunskog razdoblja)

#### Pogrešna oznaka pravila

- HR-BR-56 (Cijene artikla, stope PDV, količine ne smiju imati više od 10 decimala i 30 znamenki) - u tijelu dokumenta pogrešno označena kao HR-BR-55 na svim mjestima gdje se pojavljuje. U opisu promjena verzije 1.8 ispravno navedena kao HR-BR-56.
- Na stranici 120 u sekciji HR-BT-25, pravilo HR-BR-54 („HR Ukupni iznos PDV mora biti jednak zbroju HR iznosa kategorije PDV (HR-BT-17)") pogrešno je označeno kao HR-BR-53, a pravilo HR-BR-55 („HR Ukupni iznos PDV mora biti jednak ukupni iznos PDV (HR-BT-110)") pogrešno je označeno kao HR-BR-54. U validatoru oznaka HR-BR-53 se koristi za validaciju OIB-a.

#### Pogrešan tekst u tablicama

- Tablica 55, P5 - piše „Sport payment" umjesto „Spot payment"

# Validator

## Shadowing pravila (dead code)

Unutar istog `<pattern>` bloka u schematronu, ako više `<rule>` elemenata odgovara istom XML čvoru, samo prvi se izvršava (ISO Schematron specifikacija). Sljedeća pravila su nedostupna:

### HRTaxSubtotal kontekst (redak 191 vs redak 347)

Oba pravila imaju identičan kontekst `ext:UBLExtensions/.../hrextac:HRTaxSubtotal`. Prvo pravilo (redak 191) sadrži samo HR-BR-56 (check3010), pa su pravila iz drugog bloka (redak 347) potpuno nedostupna:
 - HR-BR-28 - Za kategorije „E" ili „O" HR iznos porezne kategorije mora biti 0
 - HR-BR-S-10 - Za kategoriju „S" stopa PDV mora biti veća od 0
 - HR-BR-Z-10 - Za kategoriju „Z" stopa PDV mora biti 0
 - HR-BR-E-10 - Za kategoriju „E" stopa PDV mora biti 0
 - HR-BR-AE-10 - Za kategoriju „AE" stopa PDV mora biti 0

### Invoice kontekst za HR-BR-41 (redak 168 vs redak 63)

Pravilo na retku 168 ima kontekst `/ubl-invoice:Invoice | /ubl-creditnote:CreditNote/cac:PaymentMeans`. Za Invoice dokumente, kontekst `/ubl-invoice:Invoice` je zasjenjen pravilom na retku 63 (`ubl-invoice:Invoice | ubl-creditnote:CreditNote`). Posljedica: HR-BR-41 (validacija raspona datuma dospijeća) se nikada ne izvršava za Invoice dokumente. Za CreditNote dokumente radi ispravno jer je kontekst `CreditNote/cac:PaymentMeans` različit čvor.

## Nekonzistentnosti u validatoru

### HR-BR-40 gornja granica datuma

Koristi `<=` (manje ili jednako) za usporedbu s 2100-01-01, dok sva ostala pravila za validaciju datuma (HR-BR-48, HR-BR-49, HR-BR-50, HR-BR-44, HR-BR-45, HR-BR-51, HR-BR-52) koriste `<` (strogo manje). Tekst poruke kaže „manji od 01.01.2100" što odgovara `<`, ne `<=`.

### HR-BR-56 nedostaje HR-BT-19 u poruci

U kontekstu troškova na razini dokumenta (AllowanceCharge, ChargeIndicator=true, redak 206) i popusta na razini dokumenta (AllowanceCharge, ChargeIndicator=false, redak 212), poruka pravila HR-BR-56 ne sadrži „HR-BT-19" u popisu BT elemenata, dok svi ostali konteksti za HR-BR-56 sadrže „HR-BT-19".

# Primjeri eRačuna

## Racun_za_leasing_PDV_PPMV_aktivacija.xml
 - [HR-BR-25] - Svaki artikl MORA imati identifikator klasifikacije artikla iz sheme Klasifikacija proizvoda po djelatnostima: KPD (CPA) – listID „CG“, osim u slučaju računa za predujam i odobrenja.

