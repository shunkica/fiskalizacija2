import {pemToDer, SignedXml} from 'xml-crypto';
import {Sha256} from "xml-crypto/lib/hash-algorithms";
import {SigningOptions} from "../types";
import {randomUUID} from "node:crypto";

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

    static generateId(prefix?: string): string {
        return prefix ? `${prefix}-${randomUUID()}` : randomUUID();
    }

    private getXAdESContent(signatureId: string, signedPropertiesId: string, signingTime: string): string {
        let publicCertPem = this.options.publicCert;
        if (Buffer.isBuffer(publicCertPem)) {
            publicCertPem = publicCertPem.toString('utf8');
        }
        const publicCertDer = pemToDer(publicCertPem)
        const publicCertDigest = new Sha256().getHash(publicCertDer)
        let res = '';
        res += `<xades:QualifyingProperties xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" Target="#${signatureId}">`
        res += `<xades:SignedProperties Id="${signedPropertiesId}">`
        res += `<xades:SignedSignatureProperties>`
        res += `<xades:SigningTime>${signingTime}</xades:SigningTime>`
        res += `<xades:SigningCertificateV2><xades:Cert><xades:CertDigest>`
        res += `<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>`
        res += `<ds:DigestValue>${publicCertDigest}</ds:DigestValue>`
        res += `</xades:CertDigest></xades:Cert></xades:SigningCertificateV2>`
        res += `</xades:SignedSignatureProperties>`
        res += `</xades:SignedProperties>`
        res += `</xades:QualifyingProperties>`
        return res;
    }

    /**
     * Sign a fiscalization request XML document
     * @param xml - The XML string to sign
     * @returns The signed XML string
     */
    signFiscalizationRequest(xml: string): string {
        const signatureId = XmlSigner.generateId("Sig");
        const signedPropertiesId = XmlSigner.generateId("xades");
        const signingTime = new Date().toISOString(); // TODO: provjeriti da li treba biti lokalno vrijeme ili može biti UTC

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
