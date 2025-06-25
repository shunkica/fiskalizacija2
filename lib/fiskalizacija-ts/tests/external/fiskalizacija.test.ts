import {describe, it, expect, vi, beforeEach} from 'vitest';
import * as fs from "node:fs";
import {FiskalizacijaClient, FiskalizacijaService, IEvidentirajERacunZahtjev} from "../../src";
import {XmlTestProvider} from "../fixtures/xmlProvider";
import {EvidentirajERacunZahtjev} from "../../src";

describe('FiscalizationClient Test Environment', () => {
    const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_FILE || "tests/fixtures/key.pem", 'utf-8');
    const publicCert = fs.readFileSync(process.env.PUBLIC_KEY_FILE || "tests/fixtures/cert.pem", 'utf-8');

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
        const data: IEvidentirajERacunZahtjev = XmlTestProvider.getMockEvidentirajERacunZahtjev();
        const zahtjev = new EvidentirajERacunZahtjev(data);
        const xml = zahtjev.toXmlString()
        const zahtjevXml = EvidentirajERacunZahtjev.fromXmlString(xml);

        it('should submit fiscalization request and return response', async () => {
            const response = await client.evidentirajERacun(zahtjev);
            expect(response).toBeDefined();
        });

    });
});
