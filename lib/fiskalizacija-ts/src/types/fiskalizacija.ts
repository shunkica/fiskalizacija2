import {IEvidentirajERacunOdgovor, IEvidentirajERacunZahtjev} from "./xml/fiskalizacija";
import {IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, IEvidentirajNaplatuOdgovor, IEvidentirajNaplatuZahtjev, IEvidentirajOdbijanjeOdgovor, IEvidentirajOdbijanjeZahtjev} from "./xml/izvjestavanje";

export interface IErrorWithMessage {
    message: string;
    thrown?: unknown;
}

export interface SigningOptions {
    privateKey: string | Buffer;
    publicCert: string | Buffer;
    signatureAlgorithm?: string;
    canonicalizationAlgorithm?: string;
    digestAlgorithm?: string;
}

export interface FiskalizacijaOptions extends SigningOptions {
    service: string;
    allowSelfSigned?: boolean;
    timeout?: number;
    headers?: Record<string, string>;
}

export type FiskalizacijaResult<Z, O> = {
    success: boolean;
    error?: IErrorWithMessage;
    httpStatusCode?: number;
    soapReqRaw?: string;
    reqObject?: Z;
    soapResRaw?: string;
    resObject?: O;
}
