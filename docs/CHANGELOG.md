# Evidencija zapažanja promjena u službenoj dokumentaciji

## 2026-03-12
- __Specifikacija_osnovne_uporabe_eRacuna_s_prosirenjima.pdf__
  - verzija 1.8 (12.03.2026.)
    - Nova pravila:
      - HR-BR-48 - Datum nastanka obveze PDV (BT-7) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-49 - Početni datum obračunskog razdoblja (BT-73) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-50 - Završni datum obračunskog razdoblja (BT-74) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-51 - Početni datum obračunskog razdoblja stavke računa (BT-134) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-52 - Završni datum obračunskog razdoblja stavke računa (BT-135) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-53 - HR PDV identifikacijski broj (BT-31, BT-48, BT-63) ili porezni identifikator (BT-32) mora biti ispravan OIB
      - HR-BR-54 - HR Ukupni iznos PDV (HR-BT-25) mora biti jednak zbroju HR iznosa kategorije PDV (HR-BT-17)
      - HR-BR-55 - HR Ukupni iznos PDV (HR-BT-25) mora biti jednak ukupni iznos PDV (BT-110)
      - HR-BR-56 - Cijene artikla (BT-146, BT-147, BT-148), stope PDV (BT-119, BT-96, BT-103, BT-152), količine (BT-129, BT-149) ne smiju imati više od 10 decimala i 30 znamenki
  - __NEDOKUMENTIRANE IZMJENE:__
    - Vraćena pravila (izbrisana u v1.7):
      - HR-BR-40 - Datum izdavanja računa (BT-2) mora biti veći od 01.01.2026 i manji od 01.01.2100.
      - HR-BR-41 - Datum dospijeća plaćanja (BT-9) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-42 - Oznaka procesa (BT-23) ne smije biti veća od 200 znakova
      - HR-BR-43 - Referenca ugovora (BT-12) ne smije imati više od 1024 znakova
      - HR-BR-44 - Stvarni datum isporuke (BT-72) mora biti veći od 01.01.1900. i manji od 01.01.2100.
      - HR-BR-45 - Datum izdavanja prethodnog računa (BT-26) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - Promjene:
      - HR-BR-9 - Promijenjeno u "mora sadržavati ispravan OIB operatera" (dodana validacija ispravnosti OIB-a)
      - HR-BR-41, HR-BR-44, HR-BR-45 - Dodana donja granica datuma (>= 01.01.1900.) u odnosu na v1.6
      - BT-146, BT-147, BT-148 - "Iznos se može upisivati s više decimala" promijenjeno u "Iznos se može upisivati s maksimalno 10 decimala"
      - Ispravak tipfelera: "Spot payment" umjesto "Sport payment" (P5)
      - Primjeri ažurirani s datumima iz 2026. umjesto 2025.
      - Primjer za HR-BR-9 OIB operatera promijenjen iz 11111111111 u 11111111119 (ispravan OIB)
    - Pravila iz v1.6 koja NISU vraćena:
      - HR-BR-46, HR-BR-47, HR-BR-S-10, HR-BR-Z-10, HR-BR-E-10, HR-BR-AE-10
  - __GREŠKE:__
    - HR-BR-56 (validacija decimala/znamenki) u tijelu dokumenta pogrešno označena kao HR-BR-55 na svim mjestima
    - HR-BR-50 u tijelu dokumenta referencira BT-73 umjesto BT-74 (Završni datum obračunskog razdoblja)

## 2026-03-07
- __HRUBLValidator__
  - DODANO:
    - XSLT funkcija `u:ctrlOIB` - validacija kontrolne znamenke OIB-a (MOD 11,10), podržava i prefiks `HR`
    - XSLT funkcija `u:check3010` - validacija da broj nema više od 30 znamenki i 10 decimala
    - HR-BR-48 - Datum nastanka obveze PDV (BT-7) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - HR-BR-49 - Početni datum obračunskog razdoblja (BT-73) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - HR-BR-50 - Završni datum obračunskog razdoblja (BT-74) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - HR-BR-51 - Početni datum obračunskog razdoblja stavke računa (BT-134) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - HR-BR-52 - Završni datum obračunskog razdoblja stavke računa (BT-135) mora biti veći od 01.01.1900. i manji od 01.01.2100.
    - HR-BR-53 - PDV identifikacijski broj (BT-31, BT-48, BT-63) ili porezni identifikator (BT-32) mora biti ispravan OIB - primjenjuje se na Prodavatelja, Kupca i Poreznog zastupnika (samo za HR entitete)
    - HR-BR-54 - HR Ukupni iznos PDV (HR-BT-25) mora biti jednak zbroju HR iznosa kategorije PDV (HR-BT-17)
    - HR-BR-55 - HR Ukupni iznos PDV (HR-BT-25) mora biti jednak ukupni iznos PDV (BT-110)
    - HR-BR-56 - Cijene artikla (BT-146, BT-147, BT-148), stope PDV (BT-119, BT-96, BT-103, BT-152, HR-BT-19), količine (BT-129, BT-149) ne smiju imati više od 10 decimala i 30 znamenki - primjenjuje se na stavke računa, cijene, troškove, popuste i porezne raščlambe
    - Novo pravilo za `cac:AllowanceCharge[cbc:ChargeIndicator = false()]` (popusti na razini dokumenta) - dodana validacija HR-BR-56
    - Novi kontekst `cac:TaxRepresentativeParty` - dodana OIB validacija (HR-BR-53)
  - PROMJENA:
    - HR-BR-9 - Dodana validacija kontrolne znamenke OIB-a operatera (`u:ctrlOIB`), poruka promijenjena u "mora sadržavati ispravan OIB"
    - HR-BR-44 - Dodana donja granica datuma isporuke (>= 01.01.1900.)
    - HR-BR-41 - Dodana donja granica datuma dospijeća plaćanja (>= 01.01.1900.)
    - HR-BR-45 - Dodana donja granica datuma izdavanja prethodnog računa (>= 01.01.1900.)
    - HR-BR-10 - Kontekst pravila promijenjen iz `cac:AccountingCustomerParty/cac:Party` u `cac:AccountingCustomerParty`

## 2026-01-27
- __HRUBLValidator__
  - PROMJENA:
    - HR-BR-42 - Promjena `cac:OrderReference` u `cac:ContractDocumentReference`
    - HR-BR-36 - ispravak testa
    - HR-BR-16 - ispravak lokacije
    - HR-BR-45 - ispravak lokacije
  - DODANO:
    - HR-BR-30 - HR Ukupni iznosi računa (HR-BG-3) se navodi na računu ako račun sadrži stavke računa (BG-25) ili troškove na razini dokumenta (BG-21) koji ne ulaze u poreznu osnovicu računa osim ako je EN porezna kategorija (O) Neoporeziva prodaja I Oznaka porezne kategorije HR:O.
    - HR-BR-20 - Za cac:TaxScheme = „VAT“ i kod porezne kategorije „E“ ili „O“ HR iznos porezne kategorije mora biti 0
- __Specifikacija_osnovne_uporabe_eRacuna_s_prosirenjima.pdf__
  - verzija 1.7 (24.01.2026.)
    - HR-BR-30 izmjena pravila za neoporezive račune u skladu s EN
  - NEDOKUMENTIRANE IZMJENE:
    - Izbrisana su sva nova pravila koja su dodana u prošloj verziji (HR-BR-40 do HR-BR-47 i HR-BR-S-10, HR-BR-Z-10, HR-BR-E-10, HR-BR-AE-10) ali pravila su ostala u validatoru .?!

## 2026-01-22
- __Specifikacija_osnovne_uporabe_eRacuna_s_prosirenjima.pdf__
  - verzija 1.6 (20.01.2026.) (u dokumentu piše 2025)
    - ispravljena greška s validacijom klasifikacija artikla koje nisu KPD
    - ispravljena greška s izračunima za pravilo HR-BR-27
    - dodana kontrola 11 znamenki u pravilo HR-BR-37 OIB operatera 11 znamenki
    - Nova pravila:
      - HR-BR-40 - Datum izdavanja računa (BT-2) mora biti veći od 01.01.2026 i manji od 01.01.2100.
      - HR-BR-41 - Datum dospijeća plaćanja (BT-9) mora biti manji od 01.01.2100.
      - HR-BR-42 - Oznaka procesa (BT-23) ne smije biti veća od 200 znakova
      - HR-BR-43 - Referenca ugovora (BT-12) ne smije imati više od 1024 znakova
      - HR-BR-44 - Stvarni datum isporuke (BT-72) mora biti manji od 01.01.2100.
      - HR-BR-45 - Datum izdavanja prethodnog računa (BT-26) mora biti manji od 01.01.2100.
      - HR-BR-46 - Naziv artikla (BT-153) mora imati manje od 1024 znakova
      - HR-BR-47 - Opis artikla (BT-154) mora imati manje od 4096 znakova
    - Stope:
      - HR-BR-S-10 - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Standard rated" stopa PDV mora biti veća od 0
      - HR-BR-Z-10 - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Zero rated" stopa PDV mora biti 0
      - HR-BR-E-10 - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Oslobođeno PDV" stopa PDV mora biti 0
      - HR-BR-AE-10 - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Prijenos porezne obveze" stopa PDV mora biti 0
    - __Nedokumentirane izmjene:__
      - BT-146 - ograničenje na 10 decimala
      - BT-147 - ograničenje na 10 decimala
      - BT-148 - ograničenje na 10 decimala
  - __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
    - verzija 1.14 (20.01.2026.)
      - Ažurirana duljina znakova (dozvoljena vrijednost) za elemente:
        - ime (izdavatelja i primatelja)
        - referencaNaUgovor
        - razlogOdbijanja
        - nazivRacunaZaPlacanje
        - vrstaPoslovnogProcesa
        - identifikatorPruzateljaPlatnihUsluga
        - identifikatorRacunaZaPlacanje
        - artiklNetoCijena
        - artiklBrutoCijena
        - artiklOsnovnaKolicina
        - artiklStopaPdv
        - artiklNaziv
        - artiklOpis

## 2025-12-31
- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.13 (18.12.2025.)
    - Ažurirano poglavlje Distinguished name (DN) u kontekstu aplikativnog digitalnog certifikata
- __ Specifikacija_osnovne_uporabe_eRacuna_s_prosirenjima.pdf__
  - __objavljene su izmjene u specifikaciji bez promjene verzije dokumenta__
    - HR-BT-4 Oznaka operatera: Vraćeno kao obevezan element!
    - HR-BT-5 OIB operatera: Vraćeno kao obevezan element!
    - HR-BR-9 Račun mora sadržavati OIB operatera HR-BT-5: Vraćeno kao obvezno pravilo!
    - HR-BR-37 Račun mora sadržavati oznaku operatera HR-BT-4: Vraćeno kao obvezno pravilo!
- __eFiskalizacijaSchema.xsd__
  - 15.12.2025.
    - promjena Primatelj.oibPorezniBroj, Izdavatelj.oibPorezniBroj i Izdavatelj.oibOperatera iz tekst20 u tekst200
    - promjena artiklBrutoCijena i artiklNetoCijena iz decimal2 u xsd:decimal
- __ eIzvjestavanjeSchema.xsd__
  - 15.12.2025.
    - promjena Primatelj.oibPorezniBroj, Izdavatelj.oibPorezniBroj i Izdavatelj.oibOperatera iz tekst20 u tekst200

## 2025-12-15

- __ Specifikacija_osnovne_uporabe_eRacuna_s_prosirenjima.pdf__
  - verzija 1.4 (12.12.2025.)
    - Ažuriranje poslovnih pravila
      - HR-BT-4 Oznaka operatera;
      - HR-BT-5 OIB operatera;
      - BT-105 (BG-21 Troškovi na razini dokumenta);
      - BR-E-1(Poslovna pravila - Nulta stopa PDV-a);
      - BR-AE-1(Poslovna pravila - Prijenos porezne obveze);
      - BR-Z-1 (Poslovna pravila - Drugi razlozi oslobađanja PDV-a);
      - HR-BR-25 (BT-158 Identifikator klasifikacije artikla);
      - HR-BT-23 (HR iznos osnovice za PDV;
      - HR-BG-3 HR ukupni iznosi;
      - HR-BT-16 HR iznos osnovice kategorije PDV;
      - HR-BG-2 HR raspodjela PDV
    - Izmijenjeni primjeri 'Primjer računa sa stavkom od 25% PDV i povratnom naknadom prikazanom kao stavka računa', 'Primjer računa sa stavkom od 25% PDV i porezom na potrošnju 3% kao trošak na razini dokumenta', 'Primjer računa sa stavkom od 25% PDV'.
  - verzija 1.5 (14.12.2025.)
    - Obrisano pravilo HR-BT-12. Ažurirano pravilo BR-O-2 ispravljena ref. na pravilo za Kupca; BR-O-2; BR-O-3; BR-O-4
  - __ !!! PROMJENE KOJE NISU NAVEDENE U OPISU PROMJENA !!! __
    - Obrisano pravilo HR-BR-37 ( Račun mora sadržavati oznaku operatera HR-BT-4 )
    - Obrisano pravilo HR-BR-9 ( Račun mora sadržavati OIB operatera HR-BT-5 )
    - Obrisano pravilo HR-BR-35 ( Svaka stavka računa (BG-25) koji ne podliježe PDV-u ili je oslobođena od PDV-a mora imati kod kategorije PDV-a „E“ (BT-151) i stopu PDV-a (BT-152) jednaku 0
    - Promjena šifre pravila HR-BR-31 u HR-BR-27
    - Promjena `hrextac:HRTaxCategory` > `cac:TaxCategory` - u xpath izrazima je izmijenjeno, ali u primjerima je ostalo hrextac:HRTaxCategory. Pretpostavljam da je izmijenjeno greškom te da i dalje mora ostati `hrextac:HRTaxCategory`
    - Promjena `hrextac:HRTaxExclusiveAmount` > `cbc:TaxExclusiveAmount`
    - Promjena `cbc:OutOfScopeOfVATAmount` > `hrextac:OutOfScopeOfVATAmount`
- __ Lipo schema __
  - Promjena ns iz `http://www.apis-it.hr/fin/2024/types/lipo` u `http://www.porezna-uprava.gov.hr/fin/2024/types/lipo`
  - Promjena ns iz `http://www.apis-it.hr/fin/2024/services/lipoService` u `http://www.porezna-uprava.gov.hr/fin/2024/services/lipoService`

## 2025-12-08

- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.12 (04.12.2025.)
    - Ažuriran primjer elementa razlogPopusta (promijenjen regex u /[0-9]{1,3}/)
- __Tehnicka_specifikacija_LIPO.pdf__
  - verzija 1.0 (03.12.2025.)
    - Novi dokument - Web servis - Lista identifikatora poreznih obveznika

## 2025-11-26

- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.11 (24.11.2025.)
    - Ažuriran opis za: artikl klasifikacija artikla – navedeni podatak se ne unosi za vrstuDokumenta Odobrenje (381) i Predujam (386)

## 2025-11-04

- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.9 (30.10.2025.)
    - Ažurirana obveznost podatka artiklStopaPdv
  - verzija 1.10 (03.11.2025.)
    - Ažuriran opis sigurnosnog preduvjeta: 'Certifikati za elektroničko potpisivanje poruka'

## 2025-10-13

- __Tehnicka_specifikacija_eRacun_AMS.pdf__
  - verzija 1.4 (09.10.2025.)
  - Ažurirana produkcijska poveznica za AMS (`https://cis.porezna-uprava.hr:8513/proxy`)
- __Tehnicka_specifikacija_eRacun_MPS.pdf__
  - verzija 1.3 (08.10.2025.)
  - Ažuriran dio upita prema MPS-u – dodan DNS upit prema AMS-u
- __Tehnicka_specifikacija_eRacun_PT_AS4.pdf__
  - verzija 1.4 (07.10.2025.)
  - ažurirana fiksna vrijednost u polju PMode.Initiator.Party
  - ažuriran PMode[].Security.X509.Signature.Algorithm
  - ažuriran Message Correlation
  - ažuriran PMode[].Security.X509.Signature.Algorithm
  - ažuriran PMode[1].BusinessInfo.Service.type

## 2025-10-03

- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.7 (30.09.2025.)
  - Ažurirano mapiranje na EU normu i pojavnost podataka: datum isporuke, prijenos sredstava, dokument popust, dokument trošak, indikator kopije
    - DokumentPopust\stopaPdv - [0,N] -> [0,1]
    - DokumentPopust\tekstRazlogaPopusta - [0,N] -> [0,1]
    - DokumentPopust\razlogPopusta - [0,N] -> [0,1]
    - DokumentTrosak\hrOznakaPorezneKategorije - [0,N] -> [0,1]
    - DokumentTrosak\stopaPdv - [0,N] -> [0,1]
    - DokumentTrosak\tekstRazlogaOslobodenjaPdv - [0,N] -> [0,1]
    - DokumentTrosak\razlogOslobodenjaPdv - [0,N] -> [0,1]
    - RaspodjelaPdv\iznosOs
  - verzija 1.8 (1.10.2025.)
  - Ažuriran preporučeni otvoreni TCP port prema sustavu
    - 8449 -> 8509

## 2025-09-29

- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.6 (26.9.2025.)
  - Ažurirana metoda `EvidentirajEracun`: dodani elementi `DokumentUkupanIznos`, `DokumentPopust`, `DokumentTrosak` nadopunjena `RaspodjelaPdv` i `StavkaERacuna`; ažurirani primjeri
- __Tehnicka_specifikacija_eRacun_PT_AS4.pdf__
  - verzija 1.3 (24.9.2025.)
  - Ažuriran prilog P-mode parametri (PMode[].Security.X509.Signature.Certificate) i primjer P-modea
  - Promijenjen je security u `eDeliveryAS4PolicyBST`

## 2025-09-18

- __Tehnicka_specifikacija_eRacun_PT_AS4.pdf__
  - verzija 1.2 (16.9.2025.)
  - promjena party.type u `urn:oasis:names:tc:ebcore:partyid-type:unregistered`
  - promjena tipova dokumenata, dodan cii tip:
    - `en16931UblInvoiceAction` -> `busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1`
    - `en16931UblCreditNoteAction` -> `busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2::CreditNote##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1`
    - `en16931CiiInvoiceAction` -> `busdox-docid-qns::urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100::CrossIndustryInvoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1::D16B`
  - promjena process id u `urn:fdc:eracun.hr:poacc:en16931:any`
  - promjena agreement type u `T1`
- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.5 (4.9.2025.)
  - Ažurirano poglavlje 10. Elektronički potpis poruke zahtjeva; dodan primjer potpisa korištenjem DSS knjižnice u Javi
  - specificiran baseline `XAdES Baseline B, ETSI EN 319 132-1`

## 2025-08-13

- __eFiskalizacijaSchema.xsd__
  - dodan element `oibOperatera` u element `Izdavatelj`
  - promjena regex patterna:
    - `jedinicaMjere`: `[A-Z0-9]{2,3}` -> `[A-Za-z0-9]{2,3}`
    - `izuzecePdv`: `[A-Z-]{1,20}` -> `[A-Za-z0-9-]{1,20}`
    - `valuta`: `[A-Z]{3}` -> `[A-Za-z]{3}`
    - `nacinPlacanja`: `[A-Z0-9]{1,3}` -> `[A-Za-z0-9]{1,3}`
    - `kategorijaPdv`: `[A-Z]{1,2}` -> `[A-Za-z]{1,2}`
    - `klasifikacijaArtikla`: `[A-Z]{2,3}` -> `[A-Za-z]{2,3}`
- __eIzvjestavanjeSchema.xsd__
  - dodan element `datumVrijemeSlanja` u `EvidentirajNaplatuOdgovor`
  - dodan element `oibOperatera` u element `Izdavatelj`
  - promjena regex patterna:
    - `valuta`: `[A-Z]{3}` -> `[A-Za-z]{3}`
    - `jedinicaMjere`: `[A-Z0-9]{2,3}` -> `[A-Za-z0-9]{2,3}`
    - `izuzecePdv`: `[A-Z-]{1,20}` -> `[A-Za-z0-9-]{1,20}`
    - `nacinPlacanja`: `[A-Z0-9]{1,3}` -> `[A-Za-z0-9]{1,3}`
    - `kategorijaPdv`: `[A-Z]{1,2}` -> `[A-Za-z]{1,2}`
    - `klasifikacijaArtikla`: `[A-Z]{2,3}` -> `[A-Za-z]{2,3}`
  - maknuti tipovi `drzava` i `shemaIdentifikator`
- __Tehnicka_specifikacija_Fiskalizacija_eRacuna_i_eIzvjestavanje.pdf__
  - verzija 1.4 (12.8.2025.)
  - Dodan OIB operatera u dijelu Evidentiraj eRačun za ulazni i izlazni eRačun i u dijelu Evidentiraj podatke za isporuke za koje nije izdan eRačun; ažurirani primjeri zahtjeva za navedene metode
  - Ažurirana dozvoljena vrijednost za OIB
  - Ažurirani tipovi podataka za šifrarnike, tako da je podržano sljedeće: A-Z, a-z
- __Tehnicka_specifikacija_eRacun_AMS.pdf__
  - verzija 1.3 (11.8.2025.)
  - Ažuriran primjer korištenja GLN broja kao jedinstvenog identifikatora u poglavlju 5.2.
- __Tehnicka_specifikacija_eRacun_MPS.pdf__
  - verzija 1.2 (11.8.2025.)
  - Dopunjen primjer formiranja i enkodiranja URL-a u poglavlju 4.2.
  - Ažuriran namespace u prilogu 2. u poglavlju 6.
  - Promijenjana adresa metapodatkovnog servisa: `https://cis.porezna-uprava.hr:8411/EracunMPSCT`
  - Primjer (ne radi) `https://cis.porezna-uprava.hr:8411/EracunMPSCT/iso6523-actorid-upis::0088:385GLN/services/busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1`

## 2025-07-29

- __Tehnicka_specifikacija_eRacun_AMS.pdf__
  - Ažuriranje poglavlja 5.3. dodani primjeri formiranja DNS upita

## 2025-07-28

- __Tehnicka_specifikacija_eRacun_MPS.pdf__
  - Dodan prilog 2 sa primjerom odgovora MPS-a
  - Izmjena poglavlja 3. promjena navoda AMS i MPS su bazirani na standardu eDelivery BDXL 1.61
- __Tehnicka_specifikacija_eRacun_AMS.pdf__
  - Izmjena poglavlja 4. promjena navoda AMS i MPS su bazirani na standardu eDelivery BDXL 1.61
  - Ažurirano poglavlje 5.3. dodani su linkovi za AMS produkcijsku okolinu, linkovi AMS-a unutar Portala za testiranje sukladnosti
    - Demo:
      - dig +short @dns1.hitronet.hr 3IC5RWEJIATNSZ5UY56HVGWEIH4NMQZL5UXVNSYQFJSH5Z6SEJKA.iso6523-actorid-upis.demo.ams.porezna-uprava.hr. NAPTR
      - AMS: https://cis.porezna-uprava.hr:8515/proxy
    - Produkcija:
      - dig +short @dns1.hitronet.hr 3IC5RWEJIATNSZ5UY56HVGWEIH4NMQZL5UXVNSYQFJSH5Z6SEJKA.iso6523-actorid-upis.prod.ams.porezna-uprava.hr. NAPTR
      - AMS: https://cis.porezna-uprava.hr:8512/proxy
