import {describe, it, expect, vi, beforeEach} from 'vitest';
import * as fs from "node:fs";
import {FiskalizacijaClient, FiskalizacijaService, IEvidentirajERacunZahtjev} from "../../src";
import {EvidentirajERacunZahtjev} from "../../src";
import {XmlTestProvider} from "../fixtures/XmlTestProvider";

describe('FiscalizationClient Test Environment', () => {
    const privateKey = process.env.PRIVATE_KEY_FILE ? fs.readFileSync(process.env.PRIVATE_KEY_FILE, 'utf-8') : XmlTestProvider.mockPrivateKey;
    const publicCert = process.env.PUBLIC_KEY_FILE ? fs.readFileSync(process.env.PUBLIC_KEY_FILE, 'utf-8') : XmlTestProvider.mockPublicCert;

    let client: FiskalizacijaClient;

    beforeEach(() => {
        client = new FiskalizacijaClient({
            service: FiskalizacijaService.test,
            allowSelfSigned: true,
            privateKey: privateKey,
            publicCert: publicCert,
            timeout: 5000
        });
    });

    describe('evidentirajERacun', () => {
        const data: IEvidentirajERacunZahtjev = XmlTestProvider.mockEvidentirajERacunZahtjev;
        const zahtjev = new EvidentirajERacunZahtjev(data);

        it('should serialize and deserialize without throwing', () => {
            expect(() => {
                EvidentirajERacunZahtjev.fromXmlString(zahtjev.toXmlString());
            }).not.toThrow();
        });

        it('should submit fiscalization request and return response', async () => {
            const response = await client.evidentirajERacun(zahtjev);
            expect(response).toBeDefined();
            expect(response.success).toBe(true);
        });

    });
});
