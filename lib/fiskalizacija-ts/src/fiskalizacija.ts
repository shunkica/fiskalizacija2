import {XmlSigner} from './util/signing';
import {EvidentirajERacunOdgovor, EvidentirajERacunZahtjev} from './models/xml/fiskalizacija';
import {FiskalizacijaOptions, FiskalizacijaResult, IEvidentirajERacunZahtjev, ValidationError} from './types';
import {XmlDocument, XmlElement} from "libxml2-wasm";
import {FISK_NS} from "./models/xml/const";
import {using} from "./util/xml";
import {postRequest} from "./util/http";
import {parseError} from "./util/error";


export class FiskalizacijaClient {
    private signer: XmlSigner;
    private options: FiskalizacijaOptions;

    constructor(options: FiskalizacijaOptions) {
        this.options = {
            timeout: 30000,
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'SOAPAction': ''
            },
            ...options
        };

        this.signer = new XmlSigner(options);
    }

    /**
     * Submit an ERacun fiscalization request
     * @param zahtjev - The fiscalization request data
     * @returns Promise resolving to the fiscalization response
     */
    async evidentirajERacun(zahtjev: IEvidentirajERacunZahtjev): Promise<FiskalizacijaResult>;
    async evidentirajERacun(zahtjev: EvidentirajERacunZahtjev): Promise<FiskalizacijaResult>;
    async evidentirajERacun(zahtjev: IEvidentirajERacunZahtjev | EvidentirajERacunZahtjev): Promise<FiskalizacijaResult> {
        const result: FiskalizacijaResult = {success: false};

        try {

            const zahtjevModel = zahtjev instanceof EvidentirajERacunZahtjev
                ? zahtjev
                : new EvidentirajERacunZahtjev(zahtjev);

            result.reqObject = zahtjevModel;

            const signedXml = this.signer.signFiscalizationRequest(zahtjevModel.toXmlString());
            const soap = this.generateSoapEnvelope(signedXml);

            result.soapReqRaw = soap;

            const {statusCode, data} = await postRequest(soap, this.options);

            result.httpStatusCode = statusCode;
            result.soapResRaw = data;

            using(XmlDocument.fromString(data), (doc: XmlDocument) => {
                const odgovorElement = doc.get('/soapenv:Envelope/soapenv:Body/efis:EvidentirajERacunOdgovor', FISK_NS) as XmlElement;
                if (!odgovorElement) {
                    throw new ValidationError(`HTTP ${statusCode} | /soapenv:Envelope/soapenv:Body/efis:EvidentirajERacunOdgovor`, data);
                }
                result.resObject = EvidentirajERacunOdgovor.fromXmlElement(odgovorElement);
                result.success = result.resObject.Odgovor.prihvacenZahtjev && !result.resObject.Odgovor.greska;
            });
        } catch (error) {
            result.error = parseError(error);
        }

        return result;
    }

    private generateSoapEnvelope(body: string): string {
        let parts: string[] = [];
        parts.push('<?xml version="1.0" encoding="UTF-8"?>');
        parts.push('<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">');
        parts.push('<soap:Body>');
        parts.push(body);
        parts.push('</soap:Body>');
        parts.push('</soap:Envelope>');
        return parts.join('');
    }



}
