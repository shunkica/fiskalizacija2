import {XmlDocument} from "libxml2-wasm";
import {IERacun, IRacun, ValidationError} from "../types";
import {usingXmlDocument} from "../util/xml";
import {ERacun, Racun} from "../models";

export function getERacunFromUbl(doc: string | Buffer | XmlDocument): IERacun {
    if (!(doc instanceof XmlDocument)) {
        return usingXmlDocument(doc, (xmlDoc: XmlDocument) => {
            return getERacunFromUbl(xmlDoc);
        });
    }
    const el = doc.root;
    const type = el.name;
    if (type !== "Invoice" && type !== "CreditNote") {
        throw new ValidationError(`Expected 'Invoice' or 'CreditNote' as root element, got '${type}'`, doc);
    }
    return ERacun.fromUblElement(el, type);
}

export function getRacunFromUbl(doc: string | Buffer | XmlDocument): IRacun {
    if (!(doc instanceof XmlDocument)) {
        return usingXmlDocument(doc, (xmlDoc: XmlDocument) => {
            return getRacunFromUbl(xmlDoc);
        });
    }
    const el = doc.root;
    const type = el.name;
    if (type !== "Invoice" && type !== "CreditNote") {
        throw new ValidationError(`Expected 'Invoice' or 'CreditNote' as root element, got '${type}'`, doc);
    }
    return Racun.fromUblElement(el, type);
}
