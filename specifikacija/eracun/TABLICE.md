# Verzija 1.1 (2025-05-09)

## HR-TB-1 Tipovi poslovnog procesa (Tablica 55)

| Oznaka procesa   | Naziv poslovnog procesa                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------|
| P1               | Izdavanje računa za isporuke robe i usluga prema narudžbenicama, na temelju ugovora                          |
| P2               | Periodično izdavanje računa za isporuke robe i usluga na temelju ugovora                                     |
| P3               | Izdavanje računa za isporuku prema samostalnoj narudžbenici                                                  |
| P4               | Plaćanje unaprijed (avansno plaćanje)                                                                        |
| P5               | Plaćanje na licu mjesta (engl. Sport payment)                                                                |
| P6               | Plaćanje prije isporuke, na temelju narudžbenice                                                             |
| P7               | Izdavanje računa s referencama na otpremnicu                                                                 |
| P8               | Izdavanje računa s referencama na otpremnicu i primku                                                        |
| P9               | Odobrenja ili računi s negativnim iznosima, izdani zbog raznih razloga, uključujući i povrat prazne ambalaže |
| P10              | Izdavanje korektivnog računa (storniranje/ispravak računa)                                                   |
| P11              | Izdavanje djelomičnoga i konačnog računa                                                                     |
| P12              | Samoizdavanje računa                                                                                         |
| P99:Oznaka kupca | Proces definiran od strane kupca                                                                             |

## HR-TB-2 HR oznaka kategorije PDV (Tablica 56)

| HR Oznaka kategorije PDV-a | Kod UNTDID 5305 (BT-118) | HR kod porezne kategorije (HR-BT-18) | Kod porezne sheme UNTDID 5153 | Naziv HR oznake kategorije PDV-a            | Opis HR oznake kategorije PDV-a                                                                                                                      |
|----------------------------|--------------------------|--------------------------------------|-------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| HR:PDV25                   | S                        | S                                    | VAT                           | Standardna stopa PDV-a 25%                  | Standardna ili reducirana stopa PDV-a                                                                                                                |
| HR:PDV13                   | S                        | S                                    | VAT                           | Reducirana stopa PDV-a 13%                  | Standardna ili reducirana stopa PDV-a                                                                                                                |
| HR:PDV5                    | S                        | S                                    | VAT                           | Reducirana stopa PDV-a 5%                   | Standardna ili reducirana stopa PDV-a                                                                                                                |
| HR:Z                       | Z                        | Z                                    | VAT                           | Nulta stopa PDV-a                           | Nulta stopa PDVa                                                                                                                                     |
| HR:K                       | K                        | K                                    | VAT                           | Isporuka unutar EU                          | Oslobođeno PDV-a uslijed isporuke unutar EU                                                                                                          |
| HR:G                       | G                        | G                                    | VAT                           | Izvoz                                       | Oslobođeno PDV-a uslijed izvoza                                                                                                                      |
| HR:AE                      | AE                       | AE                                   | VAT                           | Prijenos porezne obveze                     | Prijenos porezne obveze – porez plaća primatelj računa                                                                                               |
| HR:E                       | E                        | E                                    | VAT                           | Osobođen PDV-a                              | Artikl je oslobođen PDV-a prema odgovarajučem članku navedenom u TaxExemptionReason                                                                  |
| HR:POVNAK                  | E                        | O                                    | OTH                           | Povratna naknada                            | Povratna naknada za jednokratnu ambalažu (trošak POVNAK je prolazna stavka koja ne ulazi u poreznu osnovicu - čl. 33. st. 3)                         |
| HR:PP                      | E                        | O                                    | LOC                           | Posebni porez na potrošnju u ugostiteljstvu | Artikl podliježe i pod posebni porez u ugostiteljstvu (u iznosu definiranom prema lokalnim propisima, trošaak PPUG je prolazna stavka čl. 33. st. 3) |
| HR:PPMV                    | E                        | O                                    | CAR                           | Posebni porez na motorna vozila             | Na artikl se plaća PDV o Posebni porez na motorna vozila (Sam trošak PPMV je prolazna stavka čl. 33. st. 3)                                          |
| HR:O                       | O                        | O                                    | VAT                           | Nije predmet oporezivanja PDVom             | Artikl ne podliježe PDV-u (jer cijeli račun ne podliježe PDV-u temeljem čl. 5 Zakona o PDVu)                                                         |
