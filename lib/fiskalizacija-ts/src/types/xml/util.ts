import {XmlElement} from "libxml2-wasm";

export interface IXmlSerializable {
    toXmlString(): string;
}

export interface IXmlSerializableConstructor<T> {
    fromXmlElement(el: XmlElement): T;
}

export type XmlSerializable<T> = T & IXmlSerializable;

export class ValidationError {
    message: string;
    value: string | undefined;

    constructor(message: string, value: string | undefined) {
        this.message = message;
        this.value = value;
    }

    toString(): string {
        return `ValidationError: ${this.message}${this.value ? ` (value: ${this.value})` : ''}`;
    }
}

export interface IBusinessTermXpath {
    id: string;
    name: string;
    xpath: {
        Invoice: string[];
        CreditNote: string[];
    };
}
