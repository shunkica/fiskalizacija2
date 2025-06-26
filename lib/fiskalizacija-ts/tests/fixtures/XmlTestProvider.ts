import {IEvidentirajERacunZahtjev, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, IEvidentirajNaplatuZahtjev, IEvidentirajOdbijanjeZahtjev} from "../../src";
import {XmlSigner} from "../../src/util/signing";
import * as fs from "node:fs";
import * as path from "node:path";
import {Naplata} from "../../src/models/xml/izvjestavanje";

export class XmlTestProvider {
    static mockPrivateKey = fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8')

    static mockPublicCert = fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8')

    static ublInvoiceFull = fs.readFileSync(path.join(__dirname, 'ubl-invoice-full.xml'), 'utf8')

    static ublInvoiceMinimal = fs.readFileSync(path.join(__dirname, 'ubl-invoice-minimal.xml'), 'utf8');

    static ublInvoiceInvalid = fs.readFileSync(path.join(__dirname, 'ubl-invoice-invalid.xml'), 'utf8');

    static EvidentirajERacunZahtjev = fs.readFileSync(path.join(__dirname, 'EvidentirajERacunZahtjev.xml'), 'utf8');

    static EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev = fs.readFileSync(path.join(__dirname, 'EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.xml'), 'utf8');

    static EvidentirajNaplatuZahtjev = fs.readFileSync(path.join(__dirname, 'EvidentirajNaplatuZahtjev.xml'), 'utf8');

    static EvidentirajOdbijanjeZahtjev = fs.readFileSync(path.join(__dirname, 'EvidentirajOdbijanjeZahtjev.xml'), 'utf8');

    static mockEvidentirajERacunZahtjev: IEvidentirajERacunZahtjev = {
        _id: XmlSigner.generateId("ID"),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
            vrstaERacuna: "I"
        },
        ERacun: [{
            brojDokumenta: "1234-P1-1",
            datumIzdavanja: "2025-06-23",
            vrstaDokumenta: "380",
            valutaERacuna: "EUR",
            datumDospijecaPlacanja: "2026-01-01",
            vrstaPoslovnogProcesa: "P1",
            Izdavatelj: {
                ime: "IZDAVATELJ",
                oibPorezniBroj: "00000000001"
            },
            Primatelj: {
                ime: "PRIMATELJ",
                oibPorezniBroj: "11111111119"
            },
            PrijenosSredstava: [{
                identifikatorRacunaZaPlacanje: "HRXXXXXXXXXXXXXXXX"
            }],
            DokumentUkupanIznos: {
                neto: 100,
                iznosBezPdv: 100,
                pdv: 25,
                iznosSPdv: 125,
                iznosKojiDospijevaZaPlacanje: 125
            },
            RaspodjelaPdv: [
                {
                    kategorijaPdv: "S",
                    oporeziviIznos: 100,
                    iznosPoreza: 25,
                    stopa: 25
                }
            ],
            StavkaERacuna: [{
                kolicina: 1,
                jedinicaMjere: "H87",
                artiklNetoCijena: 100,
                artiklOsnovnaKolicina: 1,
                artiklJedinicaMjereZaOsnovnuKolicinu: "H87",
                artiklKategorijaPdv: "S",
                artiklStopaPdv: 25,
                artiklNaziv: "Proizvod",
                ArtiklIdentifikatorKlasifikacija: [
                    {
                        identifikatorKlasifikacije: "62.90.90",
                        identifikatorSheme: "CG"
                    }
                ]
            }],
            indikatorKopije: false
        }]
    };

    static mockEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev: IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev = {
        _id: XmlSigner.generateId("ID"),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
            vrstaRacuna: "I"
        },
        Racun: [{
            brojDokumenta: "1234-P1-1",
            datumIzdavanja: "2025-06-23",
            vrstaDokumenta: "380",
            valutaRacuna: "EUR",
            datumDospijecaPlacanja: "2026-01-01",
            vrstaPoslovnogProcesa: "P1",
            Izdavatelj: {
                ime: "IZDAVATELJ",
                oibPorezniBroj: "00000000001"
            },
            Primatelj: {
                ime: "PRIMATELJ",
                oibPorezniBroj: "11111111119"
            },
            PrijenosSredstava: [{
                identifikatorRacunaZaPlacanje: "HRXXXXXXXXXXXXXXXX"
            }],
            DokumentUkupanIznos: {
                neto: 100,
                iznosBezPdv: 100,
                pdv: 25,
                iznosSPdv: 125,
                iznosKojiDospijevaZaPlacanje: 125
            },
            RaspodjelaPdv: [
                {
                    kategorijaPdv: "S",
                    oporeziviIznos: 100,
                    iznosPoreza: 25,
                    stopa: 25
                }
            ],
            StavkaRacuna: [{
                kolicina: 1,
                jedinicaMjere: "H87",
                artiklNetoCijena: 100,
                artiklOsnovnaKolicina: 1,
                artiklJedinicaMjereZaOsnovnuKolicinu: "H87",
                artiklKategorijaPdv: "S",
                artiklStopaPdv: 25,
                artiklNaziv: "Proizvod",
                ArtiklIdentifikatorKlasifikacija: [
                    {
                        identifikatorKlasifikacije: "62.90.90",
                        identifikatorSheme: "CG"
                    }
                ]
            }],
            indikatorKopije: false
        }]
    }

    static mockEvidentirajNaplatuZahtjev: IEvidentirajNaplatuZahtjev = {
        _id: XmlSigner.generateId("ID"),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
        },
        Naplata: [{
            brojDokumenta: "1234-P1-1",
            datumIzdavanja: "2025-06-23",
            oibPorezniBrojIzdavatelja: "00000000001",
            oibPorezniBrojPrimatelja: "11111111119",
            datumNaplate: "2025-06-23",
            naplaceniIznos: 100,
            nacinPlacanja: "T"
        }]
    }

    static mockEvidentirajOdbijanjeZahtjev: IEvidentirajOdbijanjeZahtjev = {
        _id: XmlSigner.generateId("ID"),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
        },
        Odbijanje: [{
            brojDokumenta: "1234-P1-1",
            datumIzdavanja: "2025-06-23",
            oibPorezniBrojIzdavatelja: "00000000001",
            oibPorezniBrojPrimatelja: "11111111119",
            datumOdbijanja: "2025-06-23",
            vrstaRazlogaOdbijanja: "O",
            razlogOdbijanja: "Neispravni podaci",
        }]
    }
}
