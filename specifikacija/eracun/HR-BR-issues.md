# Verzija 1.3 (2025-07-03)

## Greške u specifikaciji

### Pojmovi

#### Pogrešna putanja

- BG-3 - prema Peppol-u BG-3 je /cac:BillingReference, a ne /cac:BillingReference/cac:InvoiceDocumentReference

#### Pogrešan opis

- BT-56 - opis ne odgovara namjeni

### Opisi pravila

#### Nerazumljiv opis pravila

- HR-BR-27 - `U HR raspodjeli PDV-a (HR-BG-2) HR oporezivi iznos (HR-BT-16) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24).`
    - HR-BT-16 je element koji se ponavlja za svaku vrstu poreza, a ne ukupni oporezivi iznos. Prema tome pretpostavljam da bi tu trebalo pisati "...suma HR oporezivih iznosa (HR-BT-16)..." ??

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

## Ispravljena verzija (neslužbeno)

| Pravilo    | Opis                                                                                                                                                                                                                                                                                                                                       |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HR-BR-1    | Broj računa (BT-1) ne smije sadržavati bjeline (whitespace znakove)                                                                                                                                                                                                                                                                        |
| HR-BR-2    | Račun mora imati vrijeme izdavanja računa (HR-BT-2).                                                                                                                                                                                                                                                                                       |
| HR-BR-4    | U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9) mora biti naveden.                                                                                                                                                                                                                        |
| HR-BR-5    | Identifikator specifikacije (BT-24) mora imati vrijednost 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'                                                                                                                                                                        |
| HR-BR-6    | Svaka referenca prethodnog računa (BG-3) mora imati datum izdavanja prethodnog računa (BT-26)                                                                                                                                                                                                                                              |
| HR-BR-7    | Elektronička adresa Prodavatelja (BT-34) mora biti navedena                                                                                                                                                                                                                                                                                |
| HR-BR-9    | Račun mora sadržavati OIB operatera (HR-BT-5)                                                                                                                                                                                                                                                                                              |
| HR-BR-10   | Elektronička adresa Kupca (BT-49) mora biti navedena.                                                                                                                                                                                                                                                                                      |
| HR-BR-11   | Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen PDV-a mora imati oznaku kategorije PDV-a troška na razini dokumenta (HR-BT-6) iz tablice HR-TB-2 HR oznaka kategorija PDV-a                                                                                                                             |
| HR-BR-13   | Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen mora imati razlog oslobođenja PDV-a troška na razini dokumenta (HR-BT-7) ili kod razloga oslobođenja PDV-a a troška na razini dokumenta (HR-BT-8)                                                                                                       |
| HR-BR-16   | Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati oznaku kategorije PDV-a obračunate stavke HR-BT-12 iz šifarnika oznaka kategorija PDV-a HR-TB-2                                                                                                                                                  |
| HR-BR-17   | Ako se koristi referenca narudžbenice na stavci računa (HR-BT-9), zabranjeno je koristiti BT-13 Referencu narudžbenice na razni računa                                                                                                                                                                                                     |
| HR-BR-18   | Ako se koristi referenca otpremnice na stavci računa (HR-BT-10), zabranjeno je koristiti BT-16 Referencu otpremnice na razni računa                                                                                                                                                                                                        |
| HR-BR-19   | Ako se koristi referenca primke na stavci računa (HR-BT-11), zabranjeno je koristiti BT-15 Referencu primke na razni računa                                                                                                                                                                                                                |
| HR-BR-20   | Jedinična količina za cijenu artikla (BT-149), ako je iskazana, MORA biti pozitivan broj veći od nule                                                                                                                                                                                                                                      |
| HR-BR-21   | Jedinica mjere jedinične količine cijene artikla (BT-150), ako je iskazan, MORA biti jednaka jedinici mjere obračunate količine (BT-130)                                                                                                                                                                                                   |
| HR-BR-25   | Svaki artikl MORA imati identifikator klasifikacije artikla (BT-158) iz sheme Klasifikacija proizvoda po djelatnostima: KPD (CPA) – listID „CG“, osim u slučaju računa za predujam.                                                                                                                                                        |
| HR-BR-26   | Račun koji sadržava stavku računa (BG-25), popust na razini dokumenta (BG-20) ili trošak na razini dokumenta (BG-21), gdje je kod kategorije PDV-a (BT-151, BT-95 ili BT-102) „oslobođeno od PDV-a“ mora u za svaki razlog oslobođenja od PDV-a ili kod razloga oslobođenja od PDV-a sadržavati HR raspodjelu oslobođenja od PDV (HR-BG-2) |
| HR-BR-27   | U HR raspodjeli PDV-a (HR-BG-2) HR oporezivi iznos (HR-BT-23) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24).                                             |
| HR-BR-28   | Za cac:TaxScheme = „VAT“ i kod porezne kategorije (HR-BT-18) „E“ ili „O“ HR iznos porezne kategorije (HR-BT-17) mora biti 0                                                                                                                                                                                                                |
| HR-BR-29   | Stavke računa, troškovi ili popusti koji ne ulaze u poreznu osnovicu HR kod kategorije PDV-a (HR-BT-18) mora biti „O“, a HR iznos kategorije poreza (HR-BT-17) mora biti 0                                                                                                                                                                 |
| HR-BR-30   | HR Ukupni iznosi računa (HR-BG-3) se navodi na računu ako račun sadrži stavke računa (BG-25) ili troškove na razini dokumenta (BG-21) koji ne ulaze u poreznu osnovicu računa.                                                                                                                                                             |
| HR-BR-31   | HR porezna osnovica (HR-BT-23) je ukupan neto iznos stavki računa (BT-131) koje ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje ulaze u poreznu osnovicu umanjen za HR neoporezivi iznos (HR-BT-24).                               |
| HR-BR-32   | HR neoporezivi iznos (HR-BT-24) jednak je zbroju neto iznosa stavki računa (BT-131) koje NE ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje NE ulaze u poreznu osnovicu.                                                           |
| HR-BR-33   | Račun ne smije sadržavati prazne xml elemente osim elementa s elektroničkim potpisom računa.                                                                                                                                                                                                                                               |
| HR-BR-34   | Oznaka procesa (BT-23) MORA biti navedena. Koriste se vrijednosti P1-P12 ili P99:Oznaka kupca iz Tablice 4 Tipovi poslovnog procesa                                                                                                                                                                                                        |
| HR-BR-35   | Svaka stavka računa (BG-25) koji ne podliježe PDV-u ili je oslobođena od PDV-a mora imati kod kategorije PDV-a „E“ (BT-102) i stopu PDV-a (BT-103) jednaku 0                                                                                                                                                                               |
| HR-BR-36   | Svaka stavka računa (BG-25) koji ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)                                                                                                                                                                 |
| HR-BR-37   | Račun mora sadržavati oznaku operatera (HR-BT-4)                                                                                                                                                                                                                                                                                           |
| HR-BR-S-1  | Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                                               |
| HR-BR-S-2  | Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                           |
| HR-BR-S-3  | Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                          |
| HR-BR-Z-1  | Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                                                   |
| HR-BR-Z-2  | Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                               |
| HR-BR-Z-3  | Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                              |
| HR-BR-E-1  | Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                                              |
| HR-BR-E-2  | Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                          |
| HR-BR-E-3  | Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                         |
| HR-BR-AE-1 | Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                                               |
| HR-BR-AE-2 | Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                           |
| HR-BR-AE-3 | Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48).                                                                                                                                          |
