import {XmlSigner} from './util/signing';
import {EvidentirajERacunOdgovor, EvidentirajERacunZahtjev} from './models/xml/fiskalizacija';
import {FiskalizacijaOptions, FiskalizacijaResult, IEvidentirajERacunOdgovor, IEvidentirajERacunZahtjev, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, IEvidentirajNaplatuOdgovor, IEvidentirajNaplatuZahtjev, IEvidentirajOdbijanjeZahtjev, ValidationError} from './types';
import {XmlDocument, XmlElement} from "libxml2-wasm";
import {FISK_NS} from "./models/xml/const";
import {usingXmlDocument} from "./util/xml";
import {postRequest} from "./util/http";
import {parseError} from "./util/error";
import {EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor, EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, EvidentirajNaplatuOdgovor, EvidentirajNaplatuZahtjev, EvidentirajOdbijanjeOdgovor, EvidentirajOdbijanjeZahtjev} from "./models/xml/izvjestavanje";


export class FiskalizacijaClient {
    private readonly signer: XmlSigner;
    private readonly options: FiskalizacijaOptions;

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

    private async execute<TReq, TReqClass extends { new(arg: TReq): TReqInstance }, TReqInstance extends TReq, TRes>(
        zahtjev: TReq | TReqInstance,
        ReqClass: TReqClass,
        OdgovorClass: { fromXmlElement(elem: XmlElement): TRes },
        responseXpath: string
    ): Promise<FiskalizacijaResult<TReq, TRes>> {
        const result: FiskalizacijaResult<TReq, TRes> = {success: false};

        try {
            if (!(zahtjev instanceof ReqClass)) {
                zahtjev = new ReqClass(zahtjev) as TReqInstance;
            }

            result.reqObject = zahtjev;

            const signedXml = this.signer.signFiscalizationRequest((zahtjev as any).toXmlString());
            const soap = this.generateSoapEnvelope(signedXml);

            result.soapReqRaw = soap;

            const {statusCode, data} = await postRequest(soap, this.options);

            result.httpStatusCode = statusCode;
            result.soapResRaw = data;

            // Neka korisnik odluči što se događa ako potpis odgovora nije valjan
            try {
                result.soapResSignatureValid = XmlSigner.isValidSignature(result.soapResRaw);
            } catch (error) {
                result.soapResSignatureValid = false;
                result.error = parseError(error);
            }

            usingXmlDocument(XmlDocument.fromString(data), (doc: XmlDocument) => {
                const odgovorElement = doc.get(responseXpath, FISK_NS) as XmlElement;
                if (!odgovorElement) {
                    throw new ValidationError(`HTTP ${statusCode} | ${responseXpath}`, data);
                }
                result.resObject = OdgovorClass.fromXmlElement(odgovorElement);
                result.success = (result.resObject as any).Odgovor.prihvacenZahtjev && !(result.resObject as any).Odgovor.greska;
            });
        } catch (error) {
            result.error = parseError(error);
        }

        return result;
    }

    async evidentirajERacun(zahtjev: IEvidentirajERacunZahtjev | EvidentirajERacunZahtjev) {
        return this.execute(
            zahtjev,
            EvidentirajERacunZahtjev,
            EvidentirajERacunOdgovor,
            '/soapenv:Envelope/soapenv:Body/efis:EvidentirajERacunOdgovor'
        );
    }

    async evidentirajNaplatu(zahtjev: IEvidentirajNaplatuZahtjev | EvidentirajNaplatuZahtjev) {
        return this.execute(
            zahtjev,
            EvidentirajNaplatuZahtjev,
            EvidentirajNaplatuOdgovor,
            '/soapenv:Envelope/soapenv:Body/eizv:EvidentirajNaplatuOdgovor'
        );
    }

    async evidentirajOdbijanje(zahtjev: IEvidentirajOdbijanjeZahtjev | EvidentirajOdbijanjeZahtjev) {
        return this.execute(
            zahtjev,
            EvidentirajOdbijanjeZahtjev,
            EvidentirajOdbijanjeOdgovor,
            '/soapenv:Envelope/soapenv:Body/eizv:EvidentirajOdbijanjeOdgovor'
        );
    }

    async evidentirajIsporukuZaKojuNijeIzdanERacun(zahtjev: IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev | EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev) {
        return this.execute(
            zahtjev,
            EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev,
            EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor,
            '/soapenv:Envelope/soapenv:Body/eizv:EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor'
        );
    }

    private generateSoapEnvelope(body: string): string {
        let res = '';
        res += '<?xml version="1.0" encoding="UTF-8"?>';
        res += '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
        res += '<soap:Body>';
        res += body;
        res += '</soap:Body>';
        res += '</soap:Envelope>';
        return res;
    }


}
