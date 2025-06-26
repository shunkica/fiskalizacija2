import {describe, it, expect, beforeEach} from 'vitest';
import {XmlDocument} from 'libxml2-wasm';
import {XmlTestProvider} from "../fixtures/XmlTestProvider";
import {ERacun, EvidentirajERacunZahtjev, FiskalizacijaClient, FiskalizacijaService, IEvidentirajERacunZahtjev, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev} from "../../src";
import {XmlTestValidator} from "../fixtures/XmlTestValidator";
import {EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, EvidentirajNaplatuZahtjev, EvidentirajOdbijanjeZahtjev} from "../../src/models/xml/izvjestavanje";

describe('ERacun', () => {
    describe('fromUbl', () => {
        it('should convert full UBL invoice to ERacun', () => {
            const doc = XmlDocument.fromString(XmlTestProvider.ublInvoiceFull);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                XmlTestValidator.validateFullUblInvoice(eracun)

            } finally {
                doc.dispose();
            }
        });

        it('should convert minimal UBL invoice to ERacun', () => {
            const doc = XmlDocument.fromString(XmlTestProvider.ublInvoiceMinimal);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                XmlTestValidator.validateMinimalUblInvoice(eracun);

            } finally {
                doc.dispose();
            }
        });

        it('should handle optional fields correctly', () => {
            const doc = XmlDocument.fromString(XmlTestProvider.ublInvoiceMinimal);

            try {
                const root = doc.root;
                const eracun = ERacun.fromUbl(root, 'Invoice');

                // Test that optional fields are undefined when not present
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
            const doc = XmlDocument.fromString(XmlTestProvider.ublInvoiceInvalid);
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

describe('Model serialization and deserialization', () => {

    describe('EvidentirajERacun', () => {
        const xml = XmlTestProvider.EvidentirajERacunZahtjev;
        const data = XmlTestProvider.mockEvidentirajERacunZahtjev;
        const zahtjev = new EvidentirajERacunZahtjev(data);

        it('should deserialize XML without throwing', () => {
            expect(() => {
                EvidentirajERacunZahtjev.fromXml(xml);
            }).not.toThrow();
        });

        it('should serialize and deserialize without throwing', () => {
            expect(() => {
                EvidentirajERacunZahtjev.fromXml(zahtjev.toXmlString());
            }).not.toThrow();
        });
    });

    describe('EvidentirajIsporukuZaKojuNijeIzdanERacun', () => {
        const xml = XmlTestProvider.EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev;
        const data: IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev = XmlTestProvider.mockEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev;
        const zahtjev = new EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev(data);

        it('should deserialize XML without throwing', () => {
            expect(() => {
                EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXml(xml);
            }).not.toThrow();
        });

        it('should serialize mock object and deserialize without throwing', () => {
            expect(() => {
                EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXml(zahtjev.toXmlString());
            }).not.toThrow();
        });

    });

    describe('EvidentirajNaplatuZahtjev', () => {
        const xml = XmlTestProvider.EvidentirajNaplatuZahtjev;
        const data = XmlTestProvider.mockEvidentirajNaplatuZahtjev;
        const zahtjev = new EvidentirajNaplatuZahtjev(data);

        it('should deserialize XML without throwing', () => {
            expect(() => {
                EvidentirajNaplatuZahtjev.fromXml(xml);
            }).not.toThrow();
        });

        it('should serialize mock object and deserialize without throwing', () => {
            expect(() => {
                EvidentirajNaplatuZahtjev.fromXml(zahtjev.toXmlString());
            }).not.toThrow();
        });

    });

    describe('EvidentirajOdbijanjeZahtjev', () => {
        const xml = XmlTestProvider.EvidentirajOdbijanjeZahtjev;
        const data = XmlTestProvider.mockEvidentirajOdbijanjeZahtjev;
        const zahtjev = new EvidentirajOdbijanjeZahtjev(data);

        it('should deserialize XML without throwing', () => {
            expect(() => {
                EvidentirajOdbijanjeZahtjev.fromXml(xml);
            }).not.toThrow();
        });

        it('should serialize mock object and deserialize without throwing', () => {
            expect(() => {
                EvidentirajOdbijanjeZahtjev.fromXml(zahtjev.toXmlString());
            }).not.toThrow();
        });

    });
});
