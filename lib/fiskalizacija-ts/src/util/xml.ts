import {XmlDocument, XmlElement} from "libxml2-wasm";
import {ValidationError} from "../types";
import {REGEX} from "../models/xml/regex";
import {BUSINESS_TERMS} from "../models/xml/businessTerms";
import {BUSINESS_GROUPS} from "../models/xml/businessGroups";

function removePrefix(str: string, prefix: string) {
    return str.startsWith(prefix) ? str.slice(prefix.length + 1) : str;
}

export function getBusinessTermXpath(
    id: keyof typeof BUSINESS_TERMS,
    type: 'Invoice' | 'CreditNote',
    group: keyof typeof BUSINESS_GROUPS | null = null
): string {
    const term = BUSINESS_TERMS[id];
    if (group) {
        return removePrefix(term.xpath[type].join('/'), getBusinessGroupXpath(group, type))
    }
    return term.xpath[type].join('/');
}

export function getBusinessGroupXpath(
    id: keyof typeof BUSINESS_GROUPS,
    type: 'Invoice' | 'CreditNote',
): string {
    const term = BUSINESS_GROUPS[id];
    return term.xpath[type].join('/');
}

export function getElementContentNumber(parentEl: XmlElement,
                                        tag: string,
                                        ns: Record<string, string>,
                                        regexKey?: keyof typeof REGEX): number {
    const content = getElementContent(parentEl, tag, ns, regexKey);
    const num = Number(content);
    if (isNaN(num)) {
        throw new ValidationError(`Element '${tag}' ne sadrži valjani broj: ${content}`, content);
    }
    return num;
}

export function getOptionalElementContentNumber(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    regexKey?: keyof typeof REGEX
): number | undefined {
    const content = getOptionalElementContent(parentEl, tag, ns, regexKey);
    if (content === undefined) {
        return undefined;
    }
    const num = Number(content);
    if (isNaN(num)) {
        throw new ValidationError(`Element '${tag}' ne sadrži valjani broj: ${content}`, content);
    }
    return num;
}

export function extractElement<T>(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    fn: (el: XmlElement) => T
): T {
    const el = parentEl.get(tag, ns) as XmlElement | null;
    if (!el) {
        throw new ValidationError(`Element '${tag}' nije pronađen u elementu '${parentEl.prefix}:${parentEl.name}'`, undefined);
    }
    return fn(el);
}

export function extractOptionalElement<T>(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    fn: (el: XmlElement) => T
): T | undefined {
    const el = parentEl.get(tag, ns) as XmlElement | null;
    if (!el) {
        return undefined;
    }
    return fn(el);
}

export function extractElements<T>(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    fn: (el: XmlElement) => T
): T[] {
    const elements = parentEl.find(tag, ns);
    if (!elements || elements.length === 0) {
        throw new ValidationError(`Element '${tag}' nije pronađen u elementu '${parentEl.prefix}:${parentEl.name}'`, undefined);
    }
    return elements.map(el => fn(el as XmlElement));
}

export function extractOptionalElements<T>(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    fn: (el: XmlElement) => T
): T[] | undefined {
    const elements = parentEl.find(tag, ns);
    if (!elements || elements.length === 0) {
        return undefined;
    }
    return elements.map(el => fn(el as XmlElement));
}

export function getElementContent(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    regexKey?: keyof typeof REGEX
): string {
    const el = parentEl.get(tag, ns) as XmlElement | null;
    if (!el) {
        throw new ValidationError(`Element '${tag}' nije pronađen u elementu '${parentEl.prefix}:${parentEl.name}'`, undefined);
    }
    if (regexKey && !REGEX[regexKey].test(el.content)) {
        throw new ValidationError(`Element '${tag}' ne zadovoljava regex ${REGEX[regexKey]}`, el.content);
    }
    return el.content;
}

export function getOptionalElementContent(
    parentEl: XmlElement,
    tag: string,
    ns: Record<string, string>,
    regexKey?: keyof typeof REGEX
): string | undefined {
    const el = parentEl.get(tag, ns) as XmlElement | null;
    if (!el) {
        return undefined;
    }
    if (regexKey && !REGEX[regexKey].test(el.content)) {
        throw new ValidationError(`Element '${tag}' ne zadovoljava regex ${REGEX[regexKey]}`, el.content);
    }
    return el.content;
}

export function getOptionalAttributeValue(
    el: XmlElement,
    name: string,
    prefix: string,
    regexKey?: keyof typeof REGEX
): string | undefined {
    const attr = el.attr(name, prefix);
    if (!attr) {
        return undefined;
    }
    if (regexKey && !REGEX[regexKey].test(attr.value)) {
        throw new ValidationError(`Atribut '${name}' ne zadovoljava regex ${REGEX[regexKey]}`, attr.value);
    }
    return attr.value;
}

export function getAttributeValue(
    el: XmlElement,
    name: string,
    prefix: string,
    regexKey?: keyof typeof REGEX
): string {
    const attr = el.attr(name, prefix);
    if (!attr) {
        throw new ValidationError(`Atribut '${name}' nije pronađen u elementu '${el.prefix}:${el.name}'`, undefined);
    }
    if (regexKey && !REGEX[regexKey].test(attr.value)) {
        throw new ValidationError(`Atribut '${name}' ne zadovoljava regex ${REGEX[regexKey]}`, attr.value);
    }
    return attr.value;
}


export function xmlEscape(val: string): string {
    return val.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}


export function usingXmlDocument<T>(doc: XmlDocument, fn: (r: XmlDocument) => T): T {
    if (!doc) {
        throw new Error("Failed to parse XML document");
    }
    try {
        return fn(doc);
    } finally {
        doc.dispose();
    }
}
