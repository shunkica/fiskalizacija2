import {describe, it, expect} from 'vitest';
import {XmlDocument} from 'libxml2-wasm';
import {XmlTestProvider} from "../fixtures/xmlProvider";
import {ERacun} from "../../src";

describe('ERacun', () => {
    describe('fromUbl', () => {
        it('should convert basic UBL invoice to ERacun', () => {
            const ublXml = XmlTestProvider.getBasicUblInvoice();
            const doc = XmlDocument.fromString(ublXml);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                // Test basic document fields
                expect(eracun.brojDokumenta).toBe('5-P1-1');
                expect(eracun.datumIzdavanja).toBe('2025-05-01');
                expect(eracun.vrstaDokumenta).toBe('380');
                expect(eracun.valutaERacuna).toBe('EUR');
                expect(eracun.datumDospijecaPlacanja).toBe('2025-05-31');
                expect(eracun.vrstaPoslovnogProcesa).toBe('P1');
                expect(eracun.indikatorKopije).toBe(false);

                // Test supplier (Izdavatelj)
                expect(eracun.Izdavatelj.ime).toBe('FINANCIJSKA AGENCIJA');
                expect(eracun.Izdavatelj.oibPorezniBroj).toBe('HR12345678901');

                // Test customer (Primatelj)
                expect(eracun.Primatelj.ime).toBe('Tvrtka B d.o.o.');
                expect(eracun.Primatelj.oibPorezniBroj).toBe('HR11111111119');

                // Test payment means (PrijenosSredstava)
                expect(eracun.PrijenosSredstava).toBeDefined();
                expect(eracun.PrijenosSredstava!.length).toBe(1);
                expect(eracun.PrijenosSredstava![0].identifikatorRacunaZaPlacanje).toBe('HRXXXXXXXXXXXXXXXX');

                // Test document totals (DokumentUkupanIznos)
                expect(eracun.DokumentUkupanIznos.neto).toBe(100.00);
                expect(eracun.DokumentUkupanIznos.iznosBezPdv).toBe(100.00);
                expect(eracun.DokumentUkupanIznos.pdv).toBe(25.00);
                expect(eracun.DokumentUkupanIznos.iznosSPdv).toBe(125.00);
                expect(eracun.DokumentUkupanIznos.iznosKojiDospijevaZaPlacanje).toBe(125.00);

                // Test VAT breakdown (RaspodjelaPdv)
                expect(eracun.RaspodjelaPdv).toBeDefined();
                expect(eracun.RaspodjelaPdv.length).toBe(1);
                expect(eracun.RaspodjelaPdv[0].kategorijaPdv).toBe('S');
                expect(eracun.RaspodjelaPdv[0].oporeziviIznos).toBe(100.00);
                expect(eracun.RaspodjelaPdv[0].iznosPoreza).toBe(25.00);
                expect(eracun.RaspodjelaPdv[0].stopa).toBe(25);

                // Test invoice lines (StavkaERacuna)
                expect(eracun.StavkaERacuna).toBeDefined();
                expect(eracun.StavkaERacuna.length).toBe(1);
                expect(eracun.StavkaERacuna[0].kolicina).toBe(1.000);
                expect(eracun.StavkaERacuna[0].jedinicaMjere).toBe('H87');
                expect(eracun.StavkaERacuna[0].artiklNetoCijena).toBe(100.000000);
                expect(eracun.StavkaERacuna[0].artiklKategorijaPdv).toBe('S');
                expect(eracun.StavkaERacuna[0].artiklStopaPdv).toBe(25);
                expect(eracun.StavkaERacuna[0].artiklNaziv).toBe('Proizvod');

                // Test item classification
                expect(eracun.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija).toBeDefined();
                expect(eracun.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija!.length).toBe(1);
                expect(eracun.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![0].identifikatorKlasifikacije).toBe('62.90.90');
                expect(eracun.StavkaERacuna[0].ArtiklIdentifikatorKlasifikacija![0].identifikatorSheme).toBe('CG');

            } finally {
                doc.dispose();
            }
        });

        it('should convert minimal UBL invoice to ERacun', () => {
            const ublXml = XmlTestProvider.getMinimalUblInvoice();
            const doc = XmlDocument.fromString(ublXml);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                // Test basic document fields
                expect(eracun.brojDokumenta).toBe('MINIMAL-001');
                expect(eracun.datumIzdavanja).toBe('2024-01-15');

                // Test supplier
                expect(eracun.Izdavatelj.ime).toBe('Minimal Supplier');
                expect(eracun.Izdavatelj.oibPorezniBroj).toBe('11111111111');

                // Test customer
                expect(eracun.Primatelj.ime).toBe('Minimal Customer');
                expect(eracun.Primatelj.oibPorezniBroj).toBe('22222222222');

                // Test document totals
                expect(eracun.DokumentUkupanIznos.neto).toBe(50.00);
                expect(eracun.DokumentUkupanIznos.iznosBezPdv).toBe(50.00);
                expect(eracun.DokumentUkupanIznos.iznosSPdv).toBe(50.00);
                expect(eracun.DokumentUkupanIznos.iznosKojiDospijevaZaPlacanje).toBe(50.00);

                // Test VAT breakdown
                expect(eracun.RaspodjelaPdv.length).toBe(1);
                expect(eracun.RaspodjelaPdv[0].kategorijaPdv).toBe('Z');
                expect(eracun.RaspodjelaPdv[0].oporeziviIznos).toBe(50.00);
                expect(eracun.RaspodjelaPdv[0].iznosPoreza).toBe(0.00);
                expect(eracun.RaspodjelaPdv[0].stopa).toBe(0.0);

                // Test invoice lines
                expect(eracun.StavkaERacuna.length).toBe(1);
                expect(eracun.StavkaERacuna[0].kolicina).toBe(2);
                expect(eracun.StavkaERacuna[0].jedinicaMjere).toBe('HUR');
                expect(eracun.StavkaERacuna[0].artiklNetoCijena).toBe(25.00);
                expect(eracun.StavkaERacuna[0].artiklKategorijaPdv).toBe('Z');
                expect(eracun.StavkaERacuna[0].artiklStopaPdv).toBe(0.0);
                expect(eracun.StavkaERacuna[0].artiklNaziv).toBe('Consulting Service');

            } finally {
                doc.dispose();
            }
        });

        it('should handle optional fields correctly', () => {
            const ublXml = XmlTestProvider.getMinimalUblInvoice();
            const doc = XmlDocument.fromString(ublXml);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                // Test that optional fields are undefined when not present
                expect(eracun.datumDospijecaPlacanja).toBeUndefined();
                expect(eracun.datumIsporuke).toBeUndefined();
                expect(eracun.referencaNaUgovor).toBeUndefined();
                expect(eracun.PrethodniERacun).toBeUndefined();
                expect(eracun.PrijenosSredstava).toBeUndefined();
                expect(eracun.DokumentUkupanIznos.popust).toBeUndefined();
                expect(eracun.DokumentUkupanIznos.placeniIznos).toBeUndefined();

            } finally {
                doc.dispose();
            }
        });

        it('should throw validation error for invalid UBL', () => {
            const invalidXml = XmlTestProvider.getInvalidInvoice();
            const doc = XmlDocument.fromString(invalidXml);

            try {
                const root = doc.root;

                expect(() => {
                    ERacun.fromUbl(root, 'Invoice');
                }).toThrow();

            } finally {
                doc.dispose();
            }
        });
    });
});
