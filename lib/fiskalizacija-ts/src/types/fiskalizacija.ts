import {IEvidentirajERacunOdgovor, IEvidentirajERacunZahtjev} from "./xml/fiskalizacija";

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

export type FiskalizacijaResult = {
    success: boolean;
    error?: IErrorWithMessage;
    httpStatusCode?: number;
    soapReqRaw?: string;
    reqObject?: IEvidentirajERacunZahtjev;
    soapResRaw?: string;
    resObject?: IEvidentirajERacunOdgovor;
}
