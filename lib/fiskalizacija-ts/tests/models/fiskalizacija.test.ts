import {describe, it, expect} from 'vitest';
import {XmlDocument} from 'libxml2-wasm';
import {XmlTestProvider} from "../fixtures/XmlTestProvider";
import {ERacun} from "../../src";
import {XmlTestValidator} from "../fixtures/XmlTestValidator";

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
