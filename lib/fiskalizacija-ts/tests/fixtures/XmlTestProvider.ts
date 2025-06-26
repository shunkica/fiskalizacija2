import {IEvidentirajERacunZahtjev} from "../../src";
import {XmlSigner} from "../../src/util/signing";
import * as fs from "node:fs";
import * as path from "node:path";

export class XmlTestProvider {
    static mockPrivateKey = fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8')

    static mockPublicCert = fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8')

    static ublInvoiceFull = fs.readFileSync(path.join(__dirname, 'ubl-invoice-full.xml'), 'utf8')

    static ublInvoiceMinimal = fs.readFileSync(path.join(__dirname, 'ubl-invoice-minimal.xml'), 'utf8');

    static ublInvoiceInvalid = fs.readFileSync(path.join(__dirname, 'ubl-invoice-invalid.xml'), 'utf8');

    static evidentirajERacunZahtjev = fs.readFileSync(path.join(__dirname, 'evidentiraj-eracun-zahtjev.xml'), 'utf8');

    static mockEvidentirajERacunZahtjev: IEvidentirajERacunZahtjev = {
        _id: XmlSigner.generateId("ID"),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
            vrstaERacuna: "U"
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
}
