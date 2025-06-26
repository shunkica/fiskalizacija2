import {describe, it, expect, vi, beforeEach} from 'vitest';
import * as fs from "node:fs";
import {FiskalizacijaClient, FiskalizacijaService, IEvidentirajERacunZahtjev, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev} from "../../src";
import {EvidentirajERacunZahtjev} from "../../src";
import {XmlTestProvider} from "../fixtures/XmlTestProvider";
import {EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, EvidentirajNaplatuZahtjev, EvidentirajOdbijanjeZahtjev} from "../../src/models/xml/izvjestavanje";

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

    describe('EvidentirajERacunZahtjev', () => {
        const data = XmlTestProvider.mockEvidentirajERacunZahtjev;
        const zahtjev = new EvidentirajERacunZahtjev(data);

        it('should submit the request and get a success response', async () => {
            const response = await client.evidentirajERacun(zahtjev);
            expect(response).toBeDefined();
            expect(response.success).toBe(true);
        });
    });

    describe('EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev', () => {
        const data = XmlTestProvider.mockEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev;
        const zahtjev = new EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev(data);

        it('should submit the request and get a success response', async () => {
            const response = await client.evidentirajIsporukuZaKojuNijeIzdanERacun(zahtjev);
            expect(response).toBeDefined();
            expect(response.success).toBe(true);
        });
    });

    describe('EvidentirajNaplatuZahtjev', () => {
        const data = XmlTestProvider.mockEvidentirajNaplatuZahtjev;
        const zahtjev = new EvidentirajNaplatuZahtjev(data);

        it('should submit the request and get a success response', async () => {
            const response = await client.evidentirajNaplatu(zahtjev);
            expect(response).toBeDefined();
            expect(response.success).toBe(true);
        });
    });

    describe('EvidentirajOdbijanjeZahtjev', () => {
        const data = XmlTestProvider.mockEvidentirajOdbijanjeZahtjev;
        const zahtjev = new EvidentirajOdbijanjeZahtjev(data);

        it('should submit the request and get a success response', async () => {
            const response = await client.evidentirajOdbijanje(zahtjev);
            expect(response).toBeDefined();
            expect(response.success).toBe(true);
        });
    });
});
