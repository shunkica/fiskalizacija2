# Evidencija zapažanja promjena u službenoj dokumentaciji

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
