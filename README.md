# fiskalizacija2

Ovaj repozitorij sadrži materijale vezane uz `Projekt Fiskalizacija 2.0` - fiskalizaciju eRačuna i eIzvještavanje u Republici Hrvatskoj.

Cilj je pružiti strukturirane tehničke resurse, validacijska pravila i testnu okolinu koji olakšavaju razvoj i integraciju korisničkih sustava.

## Struktura

| Direktorij              | Opis                                                                                                             |
|-------------------------|------------------------------------------------------------------------------------------------------------------|
| `/docs`                 | Dokumentacija i primjeri preuzeti sa službenih izvora                                                            |
| `/primjeri/domibus`     | Primjer AS4 okruženja za razmjenu eRačuna sa dinamičnim otkrivanjem sudionika (docker, domibus)                  |
| `/lib/fiskalizacija-js` | [Node.js library za fiskalizaciju eRačuna i eIzvještavanje (WIP)](https://github.com/shunkica/fiskalizacija2-js) |
| `/schematron`           | Neslužbena verzija schematron pravila za validaciju dokumenata prema HR poslovnim pravilima iz specifikacije.    |
| `/specifikacija `       | Neslužbena verzija poslovnih pravila i pojmova u Markdown i JSON formatu                                         |

## Izvori

- _porezna.gov.hr_
- _web.dzs.hr_
- _ec.europa.eu_
