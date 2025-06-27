export const FISK_NS = {
    soapenv: "http://schemas.xmlsoap.org/soap/envelope/",
    ds: "http://www.w3.org/2000/09/xmldsig#",
    efis: "http://www.porezna-uprava.gov.hr/fin/2024/types/eFiskalizacija",
    eizv: "http://www.porezna-uprava.gov.hr/fin/2024/types/eIzvjestavanje",
}

export const getFiskNsPrefix = (namespaceUri: string): string => {
    switch (namespaceUri) {
        case FISK_NS.soapenv:
            return "soapenv";
        case FISK_NS.ds:
            return "ds";
        case FISK_NS.efis:
            return "efis";
        case FISK_NS.eizv:
            return "eizv";
        default:
            throw new Error(`FISK_NS.getPrefix: Unknown namespace URI: ${namespaceUri}`);
    }
}

export const UBL_NS = {
    invoice: "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2",
    creditnote: "urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2",
    cac: "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2",
    cbc: "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2",
    ext: "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2",
}

export const getUblNsPrefix = (namespaceUri: string): string => {
    switch (namespaceUri) {
        case UBL_NS.invoice:
            return "invoice";
        case UBL_NS.creditnote:
            return "creditnote";
        case UBL_NS.cac:
            return "cac";
        case UBL_NS.cbc:
            return "cbc";
        case UBL_NS.ext:
            return "ext";
        default:
            throw new Error(`UBL_NS.getPrefix: Unknown namespace URI: ${namespaceUri}`);
    }
}
