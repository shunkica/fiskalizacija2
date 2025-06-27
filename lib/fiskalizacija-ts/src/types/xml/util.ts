import {XmlElement} from "libxml2-wasm";

export interface IXmlSerializable {
    toXmlString(): string;
}

export type XmlSerializable<T> = T & IXmlSerializable;

export class ValidationError {
    message: string;
    value: any;

    constructor(message: string, value: any) {
        this.message = message;
        this.value = value;
    }

    toString(): string {
        if (this.value === undefined || this.value === null) {
            return `ValidationError: ${this.message}`;
        } else if (typeof this.value === 'string') {
            return `ValidationError: ${this.message} (value: "${this.value}")`;
        } else {
            return `ValidationError: ${this.message} (value: ${JSON.stringify(this.value)})`;
        }
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
