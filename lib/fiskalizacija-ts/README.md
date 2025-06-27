# Fiskalizacija TypeScript Library

TypeScript library za fiskalizaciju 2.0 omogućava jednostavno slanje zahtjeva za evidenciju eRačuna i eIzvještavanje.

## Korištenje

Library pruža klasu `FiskalizacijaClient` koja prima objekt konfiguracije:

```text
{
    service: string, // URL servisa za fiskalizaciju
    privateKey: string | Buffer, // Privatni ključ za potpis poruke u PEM formatu
    publicCert: string | Buffer, // Javni certifikat u PEM formatu
}
```

Metode za slanje zahtjeva su:

- `evidentirajERacun(IEvidentirajERacunZahtjev)`
- `evidentirajNaplatu(IEvidentirajNaplatu)`
- `evidentirajOdbijanje(IEvidentirajOdbijanje)`
- `evidentirajIsporukuZaKojuNijeIzdanERacun(IEvidentirajIsporukuZaKojuNijeIzdanERacun)`

Sve metode vraćaju `FiskalizacijaResult` objekt koji sadrži:

```typescript
interface FiskalizacijaResult<Z, O> {
    success: boolean;                   // Uspjeh operacije
    error?: IErrorWithMessage;          // Greška ako postoji
    httpStatusCode?: number;            // HTTP status kod
    soapReqRaw?: string;                // Sirovi SOAP zahtjev
    reqObject?: Z;                      // Objekt zahtjeva
    soapResRaw?: string;                // Sirovi SOAP odgovor
    soapResSignatureValid?: boolean;    // Valjanost potpisa odgovora
    resObject?: O;                      // Objekt odgovora, npr. IEvidentirajERacunOdgovor
}
```

## Kreiranje zahtjeva

Sučelja za zahtjeve su:

- `IEvidentirajERacunZahtjev`
- `IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev`
- `IEvidentirajNaplatuZahtjev`
- `IEvidentirajOdbijanjeZahtjev`

Moguće generiranje zahtjeva koristeći pomoćne metode:

- `getEvidentirajERacunZahtjev(vrsta: "I" | "U", eracun: IERacun | IERacun[])`
- `getEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev(racun: IRacun | IRacun[])`
- `getEvidentirajNaplatuZahtjev(naplata: INaplata | INaplata[])`
- `getEvidentirajOdbijanjeZahtjev(odbijanje: IOdbijanje | IOdbijanje[])`

Objekti koji zadovoljavaju sučelja `IERacun` odnosno `IRacun` mogu se generirati iz UBL dokumenata `Invoice` ili `CreditNote`:

- `getERacunFromUbl(xml: string | Buffer): IERacun`
- `getRacunFromUbl(xml: string | Buffer): IRacun`

## Primjeri

### FiskalizacijaClient

```typescript
const client = new FiskalizacijaClient({
    service: FiskalizacijaService.test, // ili FiskalizacijaService.prod
    privateKey: fs.readFileSync('path/to/privateKey.pem'),
    publicCert: fs.readFileSync('path/to/publicCert.pem'),
})
````

### EvidentirajERacun

```typescript
const ublDocument = '<Invoice xmlns="...">....</Invoice>'; // UBL XML string ili Buffer
const eRacun = getERacunFromUbl(ublDocument);
const zahtjev = getEvidentirajERacunZahtjev('I', eRacun);
const result = await client.evidentirajERacun(zahtjev);
if (result.success) {
    console.log("eRačun uspješno evidentiran:", result.resObject);
} else {
    console.error("Greška pri evidentiranju eRačuna:", result.error);
}
```

### EvidentirajIsporukuZaKojuNijeIzdanERacun

```typescript
const ublDocument = '<Invoice xmlns="...">....</Invoice>'; // UBL XML string ili Buffer
const racun = getRacunFromUbl(ublDocument);
const zahtjev = getEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev(racun);
const result = await client.evidentirajIsporukuZaKojuNijeIzdanERacun(zahtjev);
if (result.success) {
    console.log("Isporuka uspješno evidentirana:", result.resObject);
} else {
    console.error("Greška pri evidentiranju isporuke:", result.error);
}
```

### EvidentirajNaplatu

```typescript
const naplata: INaplata = {
    // Broj dokumenta eRačuna, dio identifikatora eRačuna (BT-1 iz UBL 2.1)
    brojDokumenta: "RAC-2025-0001",
    // Datum izdavanja eRačuna, dio identifikatora eRačuna (BT-2 iz UBL 2.1)
    datumIzdavanja: "2025-01-01",
    // OIB ili porezni broj izdavatelja, dio identifikatora eRačuna (BT-31 iz UBL 2.1)
    oibPorezniBrojIzdavatelja: "00000000001",
    // OIB ili porezni broj primatelja
    oibPorezniBrojPrimatelja: "11111111119",
    // Datum naplate eRačuna
    datumNaplate: "2025-01-15",
    // Iznos koji je naplaćen
    naplaceniIznos: 100.00,
    /**
     * Šifra načina plaćanja po UNCL4461
     * T - transakcijski račun
     * O - obračunsko plaćanje
     * Z - ostalo
     */
    nacinPlacanja: "T"
};
const zahtjev = getEvidentirajNaplatuZahtjev(naplata);
const result = await client.evidentirajNaplatu(zahtjev);
if (result.success) {
    console.log("Naplata uspješno evidentirana:", result.resObject);
} else {
    console.error("Greška pri evidentiranju naplate:", result.error);
}
```

### EvidentirajOdbijanje

```typescript
const odbijanje: IOdbijanje = {
    // Broj dokumenta eRačuna, dio identifikatora eRačuna (BT-1 iz UBL 2.1)
    brojDokumenta: "RAC-2025-0001",
    // Datum izdavanja eRačuna, dio identifikatora eRačuna (BT-2 iz UBL 2.1)
    datumIzdavanja: "2025-01-01",
    // OIB ili porezni broj izdavatelja, dio identifikatora eRačuna (BT-31 iz UBL 2.1)
    oibPorezniBrojIzdavatelja: "00000000001",
    // OIB ili porezni broj primatelja
    oibPorezniBrojPrimatelja: "11111111119",
    // Datum odbijanja eRačuna
    datumOdbijanja: "2025-01-20",
    /**
     * Šifra vrste razloga odbijanja eRačuna
     * N - Neusklađenost podataka koji ne utječu na obračun poreza
     * U - Neusklađenost podataka koji utječu na obračun poreza
     * O - Ostalo
     */
    vrstaRazlogaOdbijanja: "N",
    // Razlog odbijanja eRačuna
    razlogOdbijanja: "Podaci o kupcu nisu točni",
}
const zahtjev = getEvidentirajOdbijanjeZahtjev(odbijanje);
const result = await client.evidentirajOdbijanje(zahtjev);
if (result.success) {
    console.log("Odbijanje uspješno evidentirano:", result.resObject);
} else {
    console.error("Greška pri evidentiranju odbijanja:", result.error);
}
```
