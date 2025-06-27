import {describe, it, expect, beforeEach} from 'vitest';
import {XmlDocument} from 'libxml2-wasm';
import {XmlSigner} from "../../src/util/signing";
import {XmlTestProvider} from "../fixtures/XmlTestProvider";

describe('XmlSigner', () => {
    const mockPrivateKey = XmlTestProvider.mockPrivateKey
    const mockPublicCert = XmlTestProvider.mockPublicCert

    describe('constructor', () => {
        it('should create XmlSigner with default options', () => {
            const signer = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: mockPublicCert
            });

            expect(signer).toBeDefined();
        });

        it('should create XmlSigner with custom options', () => {
            const signer = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: mockPublicCert,
                signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha1',
                canonicalizationAlgorithm: 'http://www.w3.org/TR/2001/REC-xml-c14n-20010315',
                digestAlgorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'
            });

            expect(signer).toBeDefined();
        });

        it('should accept Buffer keys and certificates', () => {
            const signer = new XmlSigner({
                privateKey: Buffer.from(mockPrivateKey),
                publicCert: Buffer.from(mockPublicCert)
            });

            expect(signer).toBeDefined();
        });
    });

    describe('generateId', () => {
        it('should generate unique IDs with prefix', () => {
            const id1 = XmlSigner.generateId('test');
            const id2 = XmlSigner.generateId('test');

            expect(id1).toMatch(/^test-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
            expect(id2).toMatch(/^test-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
            expect(id1).not.toBe(id2);
        });

        it('should handle different prefixes', () => {
            const sigId = XmlSigner.generateId('Sig');
            const xadesId = XmlSigner.generateId('xades');

            expect(sigId).toMatch(/^Sig-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
            expect(xadesId).toMatch(/^xades-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
        });
    });

    describe('signFiscalizationRequest', () => {
        let signer: XmlSigner;

        beforeEach(() => {
            signer = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: mockPublicCert
            });
        });

        it('should sign a fiscalization request XML', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            expect(signedXml).toBeDefined();
            expect(signedXml).toContain('<ds:Signature');
            expect(signedXml).toContain('xmlns:ds="http://www.w3.org/2000/09/xmldsig#"');
        });

        it('should include XAdES elements in signature', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Check for XAdES namespace and elements
            expect(signedXml).toContain('xmlns:xades="http://uri.etsi.org/01903/v1.3.2#"');
            expect(signedXml).toContain('<xades:QualifyingProperties');
            expect(signedXml).toContain('<xades:SignedProperties');
            expect(signedXml).toContain('<xades:SigningTime>');
            expect(signedXml).toContain('<xades:SigningCertificateV2>');
        });

        it('should include proper signature references', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Check for document reference
            expect(signedXml).toContain('<ds:Reference URI="">');

            // Check for SignedProperties reference
            expect(signedXml).toContain('Type="http://uri.etsi.org/01903#SignedProperties"');
        });

        it('should include proper transforms', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Check for enveloped signature transform
            expect(signedXml).toContain('http://www.w3.org/2000/09/xmldsig#enveloped-signature');

            // Check for canonicalization transform
            expect(signedXml).toContain('http://www.w3.org/2001/10/xml-exc-c14n#');
        });

        it('should produce valid XML structure', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Parse the signed XML to ensure it's valid
            const doc = XmlDocument.fromString(signedXml);
            try {
                expect(doc.root).toBeDefined();

                // Check that signature is appended to the root element
                const signatures = doc.root.find('//ds:Signature', {ds: 'http://www.w3.org/2000/09/xmldsig#'});
                expect(signatures.length).toBe(1);

            } finally {
                doc.dispose();
            }
        });

        it('should include certificate digest in XAdES', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Check for certificate digest elements
            expect(signedXml).toContain('<xades:CertDigest>');
            expect(signedXml).toContain('<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>');
            expect(signedXml).toContain('<ds:DigestValue>');
        });

        it('should include signing time in ISO format', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Extract signing time and verify format
            const signingTimeMatch = signedXml.match(/<xades:SigningTime>([^<]+)<\/xades:SigningTime>/);
            expect(signingTimeMatch).toBeTruthy();

            if (signingTimeMatch) {
                const signingTime = signingTimeMatch[1];
                // Should be valid ISO 8601 format
                expect(new Date(signingTime).toISOString()).toBe(signingTime);
            }
        });

        it('should handle custom signature algorithms', () => {
            const customSigner = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: mockPublicCert,
                signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512'
            });

            const signedXml = customSigner.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            expect(signedXml).toContain('http://www.w3.org/2001/04/xmldsig-more#rsa-sha512');
        });

        it('should throw error for invalid certificate format', () => {
            const invalidSigner = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: 'invalid-certificate'
            });

            expect(() => {
                invalidSigner.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);
            }).toThrow('Invalid PEM format.');
        });

        it('should preserve original XML content', () => {
            const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Original content should still be present
            expect(signedXml).toContain('EvidentirajERacunZahtjev');
            expect(signedXml).toContain('<efis:Zaglavlje>');
            expect(signedXml).toContain('<efis:datumVrijemeSlanja>2025-06-26T12:00:00.0000</efis:datumVrijemeSlanja>');
            expect(signedXml).toContain('<efis:vrstaERacuna>I</efis:vrstaERacuna>');
        });

        it('should generate unique signature IDs for multiple signings', () => {
            const signedXml1 = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);
            const signedXml2 = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

            // Extract signature IDs
            const sigId1Match = signedXml1.match(/Id="(Sig-[^"]+)"/);
            const sigId2Match = signedXml2.match(/Id="(Sig-[^"]+)"/);

            expect(sigId1Match).toBeTruthy();
            expect(sigId2Match).toBeTruthy();

            if (sigId1Match && sigId2Match) {
                expect(sigId1Match[1]).not.toBe(sigId2Match[1]);
            }
        });
    });

    describe('error handling', () => {
        it('should handle empty XML input', () => {
            const signer = new XmlSigner({
                privateKey: mockPrivateKey,
                publicCert: mockPublicCert
            });

            expect(() => {
                signer.signFiscalizationRequest('');
            }).toThrow();
        });
    });

    describe('valid signature generation', () => {
        const signer = new XmlSigner({
            privateKey: mockPrivateKey,
            publicCert: mockPublicCert
        });
        const signedXml = signer.signFiscalizationRequest(XmlTestProvider.EvidentirajERacunZahtjev);

        it('should validate the signature using the X509Certificate element', () => {
            expect(XmlSigner.isValidSignature(signedXml)).toBe(true);
        });

        it('should validate signature with provided public certificate', () => {
            expect(XmlSigner.isValidSignature(signedXml, mockPublicCert)).toBe(true);
        });

        it('should fail validation with an invalid public certificate', () => {
            const invalidCert = Buffer.from("invalid-certificate").toString('base64');
            const invalidCertPem = `-----BEGIN CERTIFICATE-----\n${invalidCert}\n-----END CERTIFICATE-----`;
            expect(() => {
                XmlSigner.isValidSignature(signedXml, invalidCertPem);
            }).toThrow(/^error/);
        });

        it('should fail validation with wrong public certificate', () => {
           expect(() => {
               XmlSigner.isValidSignature(signedXml, XmlTestProvider.mockPublicCert2);
           }).toThrow(/^invalid signature/);
        });

        it('should fail validation with an invalid signature', () => {
            const invalidSignatureValue = Buffer.from('invalid-signature').toString('base64');
            const invalidSignedXml = signedXml.replace(/<ds:SignatureValue>.*?<\/ds:SignatureValue>/, `<ds:SignatureValue>${invalidSignatureValue}</ds:SignatureValue>`);
            expect(() => {
                XmlSigner.isValidSignature(invalidSignedXml, mockPublicCert);
            }).toThrow(/^invalid signature/);
        });
    });
});
