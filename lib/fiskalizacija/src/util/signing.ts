import {SignedXml} from 'xml-crypto';
import {XmlDocument} from 'libxml2-wasm';
import {EvidentirajERacunZahtjev} from "../models";
import {FISK_NS} from "../models/xml/const";

export interface SigningOptions {
    privateKey: string | Buffer;
    publicCert?: string | Buffer;
}

export class XmlSigner {
    private defaultOptions = {
        signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
        canonicalizationAlgorithm: 'http://www.w3.org/2001/10/xml-exc-c14n#',
        digestAlgorithm: 'http://www.w3.org/2001/04/xmlenc#sha256',
    };

    /**
     * Sign a fiscalization request XML document
     * @param xml - The XML string to sign
     * @param options - Signing options including private key and certificates
     * @returns The signed XML string
     */
    signFiscalizationRequest(xml: string, options: SigningOptions): string {
        const signingOptions = {...this.defaultOptions, ...options};

        // Create SignedXml instance
        const sig = new SignedXml({
            privateKey: signingOptions.privateKey,
            publicCert: signingOptions.publicCert,
            signatureAlgorithm: signingOptions.signatureAlgorithm,
            canonicalizationAlgorithm: signingOptions.canonicalizationAlgorithm
        });

        // Add reference to the entire document (excluding the signature itself)
        sig.addReference({
            xpath: "//*[local-name(.)='EvidentirajERacunZahtjev']",
            digestAlgorithm: signingOptions.digestAlgorithm,
            transforms: [
                'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
                signingOptions.canonicalizationAlgorithm
            ]
        });

        // Set algorithms
        sig.canonicalizationAlgorithm = signingOptions.canonicalizationAlgorithm;
        sig.signatureAlgorithm = signingOptions.signatureAlgorithm;

        // Include KeyInfo if public certificate is provided
        if (signingOptions.publicCert) {
            sig.getKeyInfoContent = SignedXml.getKeyInfoContent;
        }

        // Compute signature and insert it into the document
        sig.computeSignature(xml, {
            prefix: 'ds',
            location: {
                reference: "//*[local-name(.)='EvidentirajERacunZahtjev']",
                action: 'append'
            }
        });

        return sig.getSignedXml();
    }

    /**
     * Sign a fiscalization request object by first serializing it to XML
     * @param zahtjev - The fiscalization request object
     * @param options - Signing options including private key and certificates
     * @param xmlProcessor - XML processor instance for serialization
     * @returns The signed XML string
     */
    signFiscalizationRequestObject(
        zahtjev: EvidentirajERacunZahtjev,
        options: SigningOptions,
        xmlProcessor: { serializeFiscalizationRequest: (zahtjev: EvidentirajERacunZahtjev) => string }
    ): string {
        // First serialize the request to XML
        const xml = xmlProcessor.serializeFiscalizationRequest(zahtjev);

        // Then sign the XML
        return this.signFiscalizationRequest(xml, options);
    }

    /**
     * Verify a signed fiscalization request XML
     * @param signedXml - The signed XML string
     * @param publicCert - Public certificate for verification
     * @returns True if signature is valid, false otherwise
     */
    verifyFiscalizationRequest(signedXml: string, publicCert: string | Buffer): boolean {
        const doc = XmlDocument.fromString(signedXml);

        try {
            const signature = doc.get("//ds:Signature", FISK_NS);
            if (!signature) {
                throw new Error('No signature found in the document');
            }

            // @ts-ignore
            const signatureXml = signature.toString({format: false});
            const sig = new SignedXml({publicCert});
            sig.loadSignature(signatureXml);

            return sig.checkSignature(signedXml);
        } finally {
            doc.dispose();
        }
    }


    /**
     * Extract the signed content from a signed XML document
     * @param signedXml - The signed XML string
     * @param publicCert - Public certificate for verification
     * @returns The signed content as an array of strings
     */
    getSignedContent(signedXml: string, publicCert: string | Buffer): string[] {
        const doc = XmlDocument.fromString(signedXml);

        try {
            const signature = doc.get("//*[local-name(.)='Signature' and namespace-uri(.)='http://www.w3.org/2000/09/xmldsig#']");

            if (!signature) {
                throw new Error('No signature found in the document');
            }

            // @ts-ignore
            const signatureXml = signature.toString({format: false});
            const sig = new SignedXml({publicCert});
            sig.loadSignature(signatureXml);

            if (!sig.checkSignature(signedXml)) {
                throw new Error('Invalid XML signature');
            }

            return sig.getSignedReferences();
        } finally {
            doc.dispose();
        }
    }
}
