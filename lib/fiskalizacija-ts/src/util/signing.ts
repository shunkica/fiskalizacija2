import {pemToDer, SignedXml} from 'xml-crypto';
import {Sha256} from "xml-crypto/lib/hash-algorithms";
import {SigningOptions} from "../types";

export class XmlSigner {
    private options: SigningOptions;

    private defaultOptions = {
        signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
        canonicalizationAlgorithm: 'http://www.w3.org/2001/10/xml-exc-c14n#',
        digestAlgorithm: 'http://www.w3.org/2001/04/xmlenc#sha256',
    };

    constructor(options: SigningOptions) {
        this.options = {...this.defaultOptions, ...options};
    }

    static generateId(prefix: string): string {
        const randomPart = Math.random().toString(36).substring(2, 15);
        return `${prefix}-${randomPart}`;
    }

    private getXAdESContent(signatureId: string, signedPropertiesId: string, signingTime: string): string {
        let publicCertPem = this.options.publicCert;
        if (Buffer.isBuffer(publicCertPem)) {
            publicCertPem = publicCertPem.toString('utf8');
        }
        const publicCertDer = pemToDer(publicCertPem)
        const publicCertDigest = new Sha256().getHash(publicCertDer)
        const parts: string[] = []
        parts.push(`<xades:QualifyingProperties xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" Target="#${signatureId}">`)
        parts.push(`<xades:SignedProperties Id="${signedPropertiesId}">`)
        parts.push(`<xades:SignedSignatureProperties>`)
        parts.push(`<xades:SigningTime>${signingTime}</xades:SigningTime>`)
        parts.push(`<xades:SigningCertificateV2><xades:Cert><xades:CertDigest>`)
        parts.push(`<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>`)
        parts.push(`<ds:DigestValue>${publicCertDigest}</ds:DigestValue>`)
        parts.push(`</xades:CertDigest></xades:Cert></xades:SigningCertificateV2>`)
        parts.push(`</xades:SignedSignatureProperties>`)
        parts.push(`</xades:SignedProperties>`)
        parts.push(`</xades:QualifyingProperties>`)
        return parts.join('');
    }

    /**
     * Sign a fiscalization request XML document
     * @param xml - The XML string to sign
     * @returns The signed XML string
     */
    signFiscalizationRequest(xml: string): string {
        const signatureId = XmlSigner.generateId("Sig");
        const signedPropertiesId = XmlSigner.generateId("xades");
        const signingTime = new Date().toISOString();

        // Create SignedXml instance
        const sig = new SignedXml({
            publicCert: this.options.publicCert,
            privateKey: this.options.privateKey,
            signatureAlgorithm: this.options.signatureAlgorithm,
            canonicalizationAlgorithm: this.options.canonicalizationAlgorithm,
            getObjectContent: () => [
                {content: this.getXAdESContent(signatureId, signedPropertiesId, signingTime)}
            ]
        });

        // Add reference to the entire document
        sig.addReference({
            xpath: "/*",
            isEmptyUri: true,
            digestAlgorithm: this.options.digestAlgorithm,
            transforms: [
                'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
                "http://www.w3.org/2001/10/xml-exc-c14n#"
            ]
        });

        // Add reference to the SignedProperties
        sig.addReference({
            xpath: `//*[@Id='${signedPropertiesId}']`,
            type: "http://uri.etsi.org/01903#SignedProperties",
            digestAlgorithm: "http://www.w3.org/2001/04/xmlenc#sha256",
            transforms: ["http://www.w3.org/2001/10/xml-exc-c14n#"],
            isSignatureReference: true,
        });

        // Compute signature and insert it into the document
        sig.computeSignature(xml, {
            prefix: 'ds',
            location: {
                reference: "/*",
                action: 'append'
            },
            attrs: {
                Id: signatureId
            }
        });

        return sig.getSignedXml();
    }
}
