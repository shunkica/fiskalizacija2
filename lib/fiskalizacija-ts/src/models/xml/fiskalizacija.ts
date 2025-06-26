import {
    ArtiklIdentifikatorKlasifikacijaSerializable,
    DokumentUkupanIznosSerializable, ERacunSerializable, EvidentirajERacunOdgovorSerializable, EvidentirajERacunZahtjevSerializable, GreskaSerializable, IArtiklIdentifikatorKlasifikacija,
    IDokumentUkupanIznos,
    IERacun, IEvidentirajERacunOdgovor,
    IEvidentirajERacunZahtjev, IGreska,
    IIzdavatelj, IOdgovor,
    IPrethodniERacun,
    IPrijenosSredstava,
    IPrimatelj,
    IRaspodjelaPdv,
    IStavkaERacuna,
    IZaglavljeFiskalizacija,
    IzdavateljSerializable, OdgovorSerializable,
    PrethodniERacunSerializable,
    PrijenosSredstavaSerializable,
    PrimateljSerializable,
    RaspodjelaPdvSerializable,
    StavkaERacunaSerializable, ValidationError,
    ZaglavljeFiskalizacijaSerializable
} from "../../types";
import {FISK_NS, UBL_NS} from "./const";
import {getElementContent, getOptionalElementContent, extractElement, xmlEscape, extractOptionalElements, extractElements, getElementContentNumber, getOptionalElementContentNumber, getBusinessGroupXpath, getBusinessTermXpath, getAttributeValue, extractOptionalElement, usingXmlDocument, getOptionalAttributeValue} from "../../util/xml";
import {XmlAttribute, XmlDocument, XmlElement} from "libxml2-wasm";

export class EvidentirajERacunZahtjev implements EvidentirajERacunZahtjevSerializable {
    _id: string;
    Zaglavlje: ZaglavljeFiskalizacija;
    ERacun: ERacun[];

    constructor(args: IEvidentirajERacunZahtjev) {
        this._id = args._id;
        this.Zaglavlje = new ZaglavljeFiskalizacija(args.Zaglavlje);
        this.ERacun = args.ERacun.map((eracun) => new ERacun(eracun));
    }

    public static fromXmlString(xml: string): IEvidentirajERacunZahtjev {
        let doc = null;
        try {
            doc = XmlDocument.fromString(xml);
        } catch (e) {
            throw new ValidationError(`Greška pri parsiranju XML-a: ${(e as any).message}`, undefined);
        }
        return EvidentirajERacunZahtjev.fromXmlDocument(doc);
    }

    public static fromXmlBuffer(xmlBuffer: Uint8Array): IEvidentirajERacunZahtjev {
        let doc = null;
        try {
            doc = XmlDocument.fromBuffer(xmlBuffer);
        } catch (e) {
            throw new ValidationError(`Greška pri parsiranju XML-a: ${(e as any).message}`, undefined);
        }
        return EvidentirajERacunZahtjev.fromXmlDocument(doc)
    }

    private static fromXmlDocument(doc: XmlDocument): IEvidentirajERacunZahtjev {
        try {
            const root = doc.root;
            if (root.name !== "EvidentirajERacunZahtjev") {
                throw new ValidationError(`Očekivan element 'EvidentirajERacunZahtjev', pronađen '${root.name}'`, root.name);
            }
            if (root.namespaceUri !== FISK_NS["efis"]) {
                throw new ValidationError(`Očekivan namespace '${FISK_NS["efis"]}', pronađen '${root.namespaceUri}'`, root.namespaceUri);
            }
            return EvidentirajERacunZahtjev.fromXmlElement(root);
        } finally {
            doc.dispose();
        }
    }

    static fromXmlElement(el: XmlElement): IEvidentirajERacunZahtjev {
        const idAttr = el.get("@efis:id", FISK_NS) as XmlAttribute | null;
        if (!idAttr) {
            throw new ValidationError(`Atribut 'id' nije pronađen u elementu 'EvidentirajERacunZahtjev'`, el.name);
        }
        const _id = idAttr.value;
        const zaglavljeEl = el.get("efis:Zaglavlje", FISK_NS) as XmlElement | null;
        if (!zaglavljeEl) {
            throw new ValidationError(`Element 'Zaglavlje' nije pronađen u elementu 'EvidentirajERacunZahtjev'`, el.name);
        }

        const zaglavlje = ZaglavljeFiskalizacija.fromXmlElement(zaglavljeEl);
        const eracunEls = el.find("efis:ERacun", FISK_NS) as XmlElement[];
        if (eracunEls.length === 0) {
            throw new ValidationError(`Nije pronađen niti jedan element 'ERacun' u elementu 'EvidentirajERacunZahtjev'`, el.name);
        }
        if (eracunEls.length > 100) {
            throw new ValidationError(`Pronađeno je više od 100 elemenata 'ERacun' u elementu 'EvidentirajERacunZahtjev'`, el.name);
        }
        const eracuni = eracunEls.map(eracunEl => ERacun.fromXmlElement(eracunEl));

        return {_id, Zaglavlje: zaglavlje, ERacun: eracuni};
    }

    public toXmlString() {
        let res = '';
        res += `<efis:EvidentirajERacunZahtjev xmlns:ds="${FISK_NS["ds"]}" xmlns:efis="${FISK_NS["efis"]}" efis:id="${xmlEscape(this._id)}">`;
        res += this.Zaglavlje.toXmlString();
        this.ERacun.forEach(eracun => res += eracun.toXmlString());
        res += `</efis:EvidentirajERacunZahtjev>`;
        return res;
    }
}

export class ZaglavljeFiskalizacija implements ZaglavljeFiskalizacijaSerializable {
    datumVrijemeSlanja: string;
    vrstaERacuna: string;

    constructor(args: IZaglavljeFiskalizacija) {
        this.datumVrijemeSlanja = args.datumVrijemeSlanja;
        this.vrstaERacuna = args.vrstaERacuna;
    }

    public toXmlString() {
        let res = '';
        res += `<efis:Zaglavlje>`;
        res += `<efis:datumVrijemeSlanja>${xmlEscape(this.datumVrijemeSlanja)}</efis:datumVrijemeSlanja>`;
        res += `<efis:vrstaERacuna>${xmlEscape(this.vrstaERacuna)}</efis:vrstaERacuna>`;
        res += `</efis:Zaglavlje>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IZaglavljeFiskalizacija {
        return {
            datumVrijemeSlanja: getElementContent(el, "efis:datumVrijemeSlanja", FISK_NS, "datumVrijemeDeci"),
            vrstaERacuna: getElementContent(el, "efis:vrstaERacuna", FISK_NS, "vrstaERacuna")
        };
    }
}

export class ERacun implements ERacunSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    vrstaDokumenta: string;
    valutaERacuna: string;
    datumDospijecaPlacanja?: string | undefined;
    datumIsporuke?: string | undefined;
    vrstaPoslovnogProcesa: string;
    referencaNaUgovor?: string | undefined;
    PrethodniERacun?: PrethodniERacun[] | undefined;
    Izdavatelj: Izdavatelj;
    Primatelj: Primatelj;
    PrijenosSredstava?: PrijenosSredstava[] | undefined;
    DokumentUkupanIznos: DokumentUkupanIznos;
    RaspodjelaPdv: RaspodjelaPdv[];
    StavkaERacuna: StavkaERacuna[];
    indikatorKopije: boolean;

    constructor(args: IERacun) {
        this.brojDokumenta = args.brojDokumenta;
        this.datumIzdavanja = args.datumIzdavanja;
        this.vrstaDokumenta = args.vrstaDokumenta;
        this.valutaERacuna = args.valutaERacuna;
        this.datumDospijecaPlacanja = args.datumDospijecaPlacanja;
        this.datumIsporuke = args.datumIsporuke;
        this.vrstaPoslovnogProcesa = args.vrstaPoslovnogProcesa;
        this.referencaNaUgovor = args.referencaNaUgovor;
        this.PrethodniERacun = args.PrethodniERacun?.map(i => new PrethodniERacun(i))
        this.Izdavatelj = new Izdavatelj(args.Izdavatelj);
        this.Primatelj = new Primatelj(args.Primatelj);
        this.PrijenosSredstava = args.PrijenosSredstava?.map(i => new PrijenosSredstava(i));
        this.DokumentUkupanIznos = new DokumentUkupanIznos(args.DokumentUkupanIznos)
        this.RaspodjelaPdv = args.RaspodjelaPdv.map(i => new RaspodjelaPdv(i));
        this.StavkaERacuna = args.StavkaERacuna.map(i => new StavkaERacuna(i));
        this.indikatorKopije = args.indikatorKopije;
    }

    toXmlString(): string {
        let res = '';
        res += '<efis:ERacun>';
        res += '<efis:brojDokumenta>' + xmlEscape(this.brojDokumenta) + '</efis:brojDokumenta>';
        res += '<efis:datumIzdavanja>' + xmlEscape(this.datumIzdavanja) + '</efis:datumIzdavanja>';
        res += '<efis:vrstaDokumenta>' + xmlEscape(this.vrstaDokumenta) + '</efis:vrstaDokumenta>';
        res += '<efis:valutaERacuna>' + xmlEscape(this.valutaERacuna) + '</efis:valutaERacuna>';
        if (this.datumDospijecaPlacanja) {
            res += '<efis:datumDospijecaPlacanja>' + xmlEscape(this.datumDospijecaPlacanja) + '</efis:datumDospijecaPlacanja>';
        }
        if (this.datumIsporuke) {
            res += '<efis:datumIsporuke>' + xmlEscape(this.datumIsporuke) + '</efis:datumIsporuke>';
        }
        res += '<efis:vrstaPoslovnogProcesa>' + xmlEscape(this.vrstaPoslovnogProcesa) + '</efis:vrstaPoslovnogProcesa>';
        if (this.referencaNaUgovor) {
            res += '<efis:referencaNaUgovor>' + xmlEscape(this.referencaNaUgovor) + '</efis:referencaNaUgovor>';
        }
        if (this.PrethodniERacun) {
            this.PrethodniERacun.forEach(i => res += i.toXmlString());
        }
        res += this.Izdavatelj.toXmlString();
        res += this.Primatelj.toXmlString();
        if (this.PrijenosSredstava) {
            this.PrijenosSredstava.forEach(i => res += i.toXmlString());
        }
        res += this.DokumentUkupanIznos.toXmlString();
        this.RaspodjelaPdv.forEach(i => res += i.toXmlString());
        this.StavkaERacuna.forEach(i => res += i.toXmlString());
        res += `<efis:indikatorKopije>${xmlEscape(String(this.indikatorKopije))}</efis:indikatorKopije>`;
        res += '</efis:ERacun>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IERacun {
        return {
            brojDokumenta: getElementContent(el, "efis:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "efis:datumIzdavanja", FISK_NS, "datum"),
            vrstaDokumenta: getElementContent(el, "efis:vrstaDokumenta", FISK_NS, "vrstaDokumenta"),
            valutaERacuna: getElementContent(el, "efis:valutaERacuna", FISK_NS, "valuta"),
            datumDospijecaPlacanja: getOptionalElementContent(el, "efis:datumDospijecaPlacanja", FISK_NS, "datum"),
            datumIsporuke: getOptionalElementContent(el, "efis:datumIsporuke", FISK_NS, "datum"),
            vrstaPoslovnogProcesa: getElementContent(el, "efis:vrstaPoslovnogProcesa", FISK_NS, "tekst100"),
            referencaNaUgovor: getOptionalElementContent(el, "efis:referencaNaUgovor", FISK_NS, "tekst100"),
            PrethodniERacun: extractOptionalElements(el, "efis:PrethodniERacun", FISK_NS, PrethodniERacun.fromXmlElement),
            Izdavatelj: extractElement(el, "efis:Izdavatelj", FISK_NS, Izdavatelj.fromXmlElement),
            Primatelj: extractElement(el, "efis:Primatelj", FISK_NS, Primatelj.fromXmlElement),
            PrijenosSredstava: extractOptionalElements(el, "efis:PrijenosSredstava", FISK_NS, PrijenosSredstava.fromXmlElement),
            DokumentUkupanIznos: extractElement(el, "efis:DokumentUkupanIznos", FISK_NS, DokumentUkupanIznos.fromXmlElement),
            RaspodjelaPdv: extractElements(el, "efis:RaspodjelaPdv", FISK_NS, RaspodjelaPdv.fromXmlElement),
            StavkaERacuna: extractElements(el, "efis:StavkaERacuna", FISK_NS, StavkaERacuna.fromXmlElement),
            indikatorKopije: getElementContent(el, "efis:indikatorKopije", FISK_NS, "boolean") === "true"
        }
    }

    static fromUblString(xml: string, type: "Invoice" | "CreditNote"): IERacun {
        return usingXmlDocument(XmlDocument.fromString(xml), (doc: XmlDocument) => {
            const el = doc.get(`//${type.toLowerCase()}:${type}`, UBL_NS) as XmlElement | null;
            if (!el) {
                throw new ValidationError(`Nije pronađen element '${type}' u XML-u`, xml);
            }
            return ERacun.fromUbl(el, type);
        });
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IERacun {
        return {
            brojDokumenta: getElementContent(el, getBusinessTermXpath("BT-1", type), UBL_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, getBusinessTermXpath("BT-2", type), UBL_NS, "datum"),
            vrstaDokumenta: getElementContent(el, getBusinessTermXpath("BT-3", type), UBL_NS, "vrstaDokumenta"),
            valutaERacuna: getElementContent(el, getBusinessTermXpath("BT-5", type), UBL_NS, "valuta"),
            datumDospijecaPlacanja: getOptionalElementContent(el, getBusinessTermXpath("BT-9", type), UBL_NS, "datum"),
            datumIsporuke: getOptionalElementContent(el, getBusinessTermXpath("BT-72", type), UBL_NS, "datum"),
            vrstaPoslovnogProcesa: getElementContent(el, getBusinessTermXpath("BT-23", type), UBL_NS, "tekst100"),
            referencaNaUgovor: getOptionalElementContent(el, getBusinessTermXpath("BT-12", type), UBL_NS, "tekst100"),
            PrethodniERacun: PrethodniERacun.fromUbl(el, type),
            Izdavatelj: Izdavatelj.fromUbl(el, type),
            Primatelj: Primatelj.fromUbl(el, type),
            PrijenosSredstava: PrijenosSredstava.fromUbl(el, type),
            DokumentUkupanIznos: DokumentUkupanIznos.fromUbl(el, type),
            RaspodjelaPdv: RaspodjelaPdv.fromUbl(el, type),
            StavkaERacuna: StavkaERacuna.fromUbl(el, type),
            indikatorKopije: getOptionalElementContent(el, getBusinessTermXpath("HR-BT-1", type), UBL_NS, "boolean") === "true"

        }
    }
}

export class PrethodniERacun implements PrethodniERacunSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;

    constructor(args: IPrethodniERacun) {
        this.brojDokumenta = args.brojDokumenta;
        this.datumIzdavanja = args.datumIzdavanja;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:PrethodniERacun>`;
        res += `<efis:brojDokumenta>${xmlEscape(this.brojDokumenta)}</efis:brojDokumenta>`;
        res += `<efis:datumIzdavanja>${xmlEscape(this.datumIzdavanja)}</efis:datumIzdavanja>`;
        res += `</efis:PrethodniERacun>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IPrethodniERacun {
        return {
            brojDokumenta: getElementContent(el, "efis:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "efis:datumIzdavanja", FISK_NS, "datum")
        };
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IPrethodniERacun[] | undefined {
        const groups = el.find(getBusinessGroupXpath("BG-3", type), UBL_NS) as XmlElement[];
        if (groups.length === 0) {
            return undefined;
        }
        return groups.map(groupEl => {
            return {
                brojDokumenta: getElementContent(groupEl, getBusinessTermXpath("BT-25", type, "BG-3"), UBL_NS, "tekst100"),
                datumIzdavanja: getElementContent(groupEl, getBusinessTermXpath("BT-26", type, "BG-3"), UBL_NS, "datum")
            };
        });
    }
}

export class Izdavatelj implements IzdavateljSerializable {
    ime: string;
    oibPorezniBroj: string;

    constructor(args: IIzdavatelj) {
        this.ime = args.ime;
        this.oibPorezniBroj = args.oibPorezniBroj;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:Izdavatelj>`;
        res += `<efis:ime>${xmlEscape(this.ime)}</efis:ime>`;
        res += `<efis:oibPorezniBroj>${xmlEscape(this.oibPorezniBroj)}</efis:oibPorezniBroj>`;
        res += `</efis:Izdavatelj>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IIzdavatelj {
        return {
            ime: getElementContent(el, "efis:ime", FISK_NS, "tekst500"),
            oibPorezniBroj: getElementContent(el, "efis:oibPorezniBroj", FISK_NS, "tekst20")
        };
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IIzdavatelj {
        const groupEl = el.get(getBusinessGroupXpath("BG-4", type), UBL_NS) as XmlElement | null;
        if (!groupEl) {
            throw new ValidationError(`Grupa 'BG-4' nije pronađena u dokumentu '${type}'`, undefined);
        }
        return {
            ime: getElementContent(groupEl, getBusinessTermXpath("BT-27", type, "BG-4"), UBL_NS, "tekst500"),
            oibPorezniBroj: getElementContent(groupEl, getBusinessTermXpath("BT-31", type, "BG-4"), UBL_NS, "tekst20")
        };
    }
}

export class Primatelj implements PrimateljSerializable {
    ime: string;
    oibPorezniBroj: string;

    constructor(args: IPrimatelj) {
        this.ime = args.ime;
        this.oibPorezniBroj = args.oibPorezniBroj;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:Primatelj>`;
        res += `<efis:ime>${xmlEscape(this.ime)}</efis:ime>`;
        res += `<efis:oibPorezniBroj>${xmlEscape(this.oibPorezniBroj)}</efis:oibPorezniBroj>`;
        res += `</efis:Primatelj>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IPrimatelj {
        return {
            ime: getElementContent(el, "efis:ime", FISK_NS, "tekst500"),
            oibPorezniBroj: getElementContent(el, "efis:oibPorezniBroj", FISK_NS, "tekst20")
        }
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IPrimatelj {
        const groupEl = el.get(getBusinessGroupXpath("BG-7", type), UBL_NS) as XmlElement | null;
        if (!groupEl) {
            throw new ValidationError(`Grupa 'BG-7' nije pronađena u dokumentu '${type}'`, undefined);
        }
        return {
            ime: getElementContent(groupEl, getBusinessTermXpath("BT-44", type, "BG-7"), UBL_NS, "tekst500"),
            oibPorezniBroj: getElementContent(groupEl, getBusinessTermXpath("BT-48", type, "BG-7"), UBL_NS, "tekst20")
        };
    }
}

export class PrijenosSredstava implements PrijenosSredstavaSerializable {
    identifikatorRacunaZaPlacanje: string;
    nazivRacunaZaPlacanje?: string | undefined;
    identifikatorPruzateljaPlatnihUsluga?: string | undefined;

    constructor(args: IPrijenosSredstava) {
        this.identifikatorRacunaZaPlacanje = args.identifikatorRacunaZaPlacanje;
        this.nazivRacunaZaPlacanje = args.nazivRacunaZaPlacanje;
        this.identifikatorPruzateljaPlatnihUsluga = args.identifikatorPruzateljaPlatnihUsluga;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:PrijenosSredstava>`;
        res += `<efis:identifikatorRacunaZaPlacanje>${xmlEscape(this.identifikatorRacunaZaPlacanje)}</efis:identifikatorRacunaZaPlacanje>`;
        if (this.nazivRacunaZaPlacanje) {
            res += `<efis:nazivRacunaZaPlacanje>${xmlEscape(this.nazivRacunaZaPlacanje)}</efis:nazivRacunaZaPlacanje>`;
        }
        if (this.identifikatorPruzateljaPlatnihUsluga) {
            res += `<efis:identifikatorPruzateljaPlatnihUsluga>${xmlEscape(this.identifikatorPruzateljaPlatnihUsluga)}</efis:identifikatorPruzateljaPlatnihUsluga>`;
        }
        res += `</efis:PrijenosSredstava>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IPrijenosSredstava {
        return {
            identifikatorRacunaZaPlacanje: getElementContent(el, "efis:identifikatorRacunaZaPlacanje", FISK_NS, "tekst34"),
            nazivRacunaZaPlacanje: getOptionalElementContent(el, "efis:nazivRacunaZaPlacanje", FISK_NS, "tekst35"),
            identifikatorPruzateljaPlatnihUsluga: getOptionalElementContent(el, "efis:identifikatorPruzateljaPlatnihUsluga", FISK_NS, "tekst25")
        }
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IPrijenosSredstava[] | undefined {
        const groups = el.find(getBusinessGroupXpath("BG-17", type), UBL_NS) as XmlElement[];
        if (groups.length === 0) {
            return undefined;
        }
        return groups.map(groupEl => {
            return {
                identifikatorRacunaZaPlacanje: getElementContent(groupEl, getBusinessTermXpath("BT-84", type, "BG-17"), UBL_NS, "tekst34"),
                nazivRacunaZaPlacanje: getOptionalElementContent(groupEl, getBusinessTermXpath("BT-85", type, "BG-17"), UBL_NS, "tekst35"),
                identifikatorPruzateljaPlatnihUsluga: getOptionalElementContent(groupEl, getBusinessTermXpath("BT-86", type, "BG-17"), UBL_NS, "tekst25")
            };
        });
    }
}

export class DokumentUkupanIznos implements DokumentUkupanIznosSerializable {
    neto: number;
    popust?: number | undefined;
    iznosBezPdv: number;
    pdv: number;
    iznosSPdv: number;
    placeniIznos?: number | undefined;
    iznosKojiDospijevaZaPlacanje: number;

    constructor(args: IDokumentUkupanIznos) {
        this.neto = args.neto;
        this.popust = args.popust;
        this.iznosBezPdv = args.iznosBezPdv;
        this.pdv = args.pdv;
        this.iznosSPdv = args.iznosSPdv;
        this.placeniIznos = args.placeniIznos;
        this.iznosKojiDospijevaZaPlacanje = args.iznosKojiDospijevaZaPlacanje;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:DokumentUkupanIznos>`;
        res += `<efis:neto>${this.neto.toFixed(2)}</efis:neto>`;
        if (this.popust !== undefined) {
            res += `<efis:popust>${this.popust.toFixed(2)}</efis:popust>`;
        }
        res += `<efis:iznosBezPdv>${this.iznosBezPdv.toFixed(2)}</efis:iznosBezPdv>`;
        res += `<efis:pdv>${this.pdv.toFixed(2)}</efis:pdv>`;
        res += `<efis:iznosSPdv>${this.iznosSPdv.toFixed(2)}</efis:iznosSPdv>`;
        if (this.placeniIznos !== undefined) {
            res += `<efis:placeniIznos>${this.placeniIznos.toFixed(2)}</efis:placeniIznos>`;
        }
        res += `<efis:iznosKojiDospijevaZaPlacanje>${this.iznosKojiDospijevaZaPlacanje.toFixed(2)}</efis:iznosKojiDospijevaZaPlacanje>`;
        res += `</efis:DokumentUkupanIznos>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IDokumentUkupanIznos {
        return {
            neto: getElementContentNumber(el, "efis:neto", FISK_NS, "decimal2"),
            popust: getOptionalElementContentNumber(el, "efis:popust", FISK_NS, "decimal2"),
            iznosBezPdv: getElementContentNumber(el, "efis:iznosBezPdv", FISK_NS, "decimal2"),
            pdv: getElementContentNumber(el, "efis:pdv", FISK_NS, "decimal2"),
            iznosSPdv: getElementContentNumber(el, "efis:iznosSPdv", FISK_NS, "decimal2"),
            placeniIznos: getOptionalElementContentNumber(el, "efis:placeniIznos", FISK_NS, "decimal2"),
            iznosKojiDospijevaZaPlacanje: getElementContentNumber(el, "efis:iznosKojiDospijevaZaPlacanje", FISK_NS, "decimal2")
        }
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IDokumentUkupanIznos {
        return {
            neto: getElementContentNumber(el, getBusinessTermXpath("BT-106", type), UBL_NS, "decimal2"),
            popust: getOptionalElementContentNumber(el, getBusinessTermXpath("BT-107", type), UBL_NS, "decimal2"),
            iznosBezPdv: getElementContentNumber(el, getBusinessTermXpath("BT-109", type), UBL_NS, "decimal2"),
            /** BT-110 nije obvezan u specifikaciji eRacuna, ali je pdv obvezan u specifikaciji fiskalizacije */
            pdv: getOptionalElementContentNumber(el, getBusinessTermXpath("BT-110", type), UBL_NS, "decimal2") || 0,
            iznosSPdv: getElementContentNumber(el, getBusinessTermXpath("BT-112", type), UBL_NS, "decimal2"),
            placeniIznos: getOptionalElementContentNumber(el, getBusinessTermXpath("BT-113", type), UBL_NS, "decimal2"),
            iznosKojiDospijevaZaPlacanje: getElementContentNumber(el, getBusinessTermXpath("BT-115", type), UBL_NS, "decimal2")
        }
    }
}

export class RaspodjelaPdv implements RaspodjelaPdvSerializable {
    kategorijaPdv: string;
    oporeziviIznos: number;
    iznosPoreza: number;
    stopa?: number | undefined;
    razlogOslobodenja?: string | undefined;
    tekstRazlogaOslobodenja?: string | undefined;

    constructor(args: IRaspodjelaPdv) {
        this.kategorijaPdv = args.kategorijaPdv;
        this.oporeziviIznos = args.oporeziviIznos;
        this.iznosPoreza = args.iznosPoreza;
        this.stopa = args.stopa;
        this.razlogOslobodenja = args.razlogOslobodenja;
        this.tekstRazlogaOslobodenja = args.tekstRazlogaOslobodenja;
    }

    toXmlString(): string {
        let res = '';
        res += `<efis:RaspodjelaPdv>`;
        res += `<efis:kategorijaPdv>${xmlEscape(this.kategorijaPdv)}</efis:kategorijaPdv>`;
        res += `<efis:oporeziviIznos>${this.oporeziviIznos.toFixed(2)}</efis:oporeziviIznos>`;
        res += `<efis:iznosPoreza>${this.iznosPoreza.toFixed(2)}</efis:iznosPoreza>`;
        if (this.stopa !== undefined) {
            res += `<efis:stopa>${this.stopa.toFixed(2)}</efis:stopa>`;
        }
        if (this.razlogOslobodenja !== undefined) {
            res += `<efis:razlogOslobodenja>${xmlEscape(this.razlogOslobodenja)}</efis:razlogOslobodenja>`;
        }
        if (this.tekstRazlogaOslobodenja !== undefined) {
            res += `<efis:tekstRazlogaOslobodenja>${xmlEscape(this.tekstRazlogaOslobodenja)}</efis:tekstRazlogaOslobodenja>`;
        }
        res += `</efis:RaspodjelaPdv>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IRaspodjelaPdv {
        return {
            kategorijaPdv: getElementContent(el, "efis:kategorijaPdv", FISK_NS, "kategorijaPdv"),
            oporeziviIznos: getElementContentNumber(el, "efis:oporeziviIznos", FISK_NS, "decimal2"),
            iznosPoreza: getElementContentNumber(el, "efis:iznosPoreza", FISK_NS, "decimal2"),
            stopa: getOptionalElementContentNumber(el, "efis:stopa", FISK_NS, "decimal"),
            razlogOslobodenja: getOptionalElementContent(el, "efis:razlogOslobodenja", FISK_NS, "izuzecePdv"),
            tekstRazlogaOslobodenja: getOptionalElementContent(el, "efis:tekstRazlogaOslobodenja", FISK_NS, "tekst1024")
        }
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote"): IRaspodjelaPdv[] {
        const groups = el.find(getBusinessGroupXpath("BG-23", type), UBL_NS) as XmlElement[];
        if (groups.length === 0) {
            throw new ValidationError(`Nije pronađena ni jedna grupa 'BG-23' u dokumentu '${type}'`, undefined);
        }
        return groups.map(groupEl => {
            return {
                kategorijaPdv: getElementContent(groupEl, getBusinessTermXpath("BT-118", type, "BG-23"), UBL_NS, "kategorijaPdv"),
                oporeziviIznos: getElementContentNumber(groupEl, getBusinessTermXpath("BT-116", type, "BG-23"), UBL_NS, "decimal2"),
                iznosPoreza: getElementContentNumber(groupEl, getBusinessTermXpath("BT-117", type, "BG-23"), UBL_NS, "decimal2"),
                stopa: getOptionalElementContentNumber(groupEl, getBusinessTermXpath("BT-119", type, "BG-23"), UBL_NS, "decimal"),
                razlogOslobodenja: getOptionalElementContent(groupEl, getBusinessTermXpath("BT-121", type, "BG-23"), UBL_NS, "izuzecePdv"),
                tekstRazlogaOslobodenja: getOptionalElementContent(groupEl, getBusinessTermXpath("BT-120", type, "BG-23"), UBL_NS, "tekst1024")
            };
        });
    }
}

export class StavkaERacuna implements StavkaERacunaSerializable {
    kolicina: number;
    jedinicaMjere: string;
    artiklNetoCijena: number;
    artiklOsnovnaKolicina?: number | undefined;
    artiklJedinicaMjereZaOsnovnuKolicinu?: string | undefined;
    artiklKategorijaPdv: string;
    artiklStopaPdv: number;
    artiklNaziv: string;
    ArtiklIdentifikatorKlasifikacija?: ArtiklIdentifikatorKlasifikacija[] | undefined;

    constructor(args: IStavkaERacuna) {
        this.kolicina = args.kolicina;
        this.jedinicaMjere = args.jedinicaMjere;
        this.artiklNetoCijena = args.artiklNetoCijena;
        this.artiklOsnovnaKolicina = args.artiklOsnovnaKolicina;
        this.artiklJedinicaMjereZaOsnovnuKolicinu = args.artiklJedinicaMjereZaOsnovnuKolicinu;
        this.artiklKategorijaPdv = args.artiklKategorijaPdv;
        this.artiklStopaPdv = args.artiklStopaPdv;
        this.artiklNaziv = args.artiklNaziv;
        this.ArtiklIdentifikatorKlasifikacija = args.ArtiklIdentifikatorKlasifikacija?.map(i => new ArtiklIdentifikatorKlasifikacija(i));
    }


    toXmlString(): string {
        let res = '';
        res += `<efis:StavkaERacuna>`;
        res += `<efis:kolicina>${this.kolicina.toFixed(2)}</efis:kolicina>`;
        res += `<efis:jedinicaMjere>${xmlEscape(this.jedinicaMjere)}</efis:jedinicaMjere>`;
        res += `<efis:artiklNetoCijena>${this.artiklNetoCijena.toFixed(2)}</efis:artiklNetoCijena>`;
        if (this.artiklOsnovnaKolicina !== undefined) {
            res += `<efis:artiklOsnovnaKolicina>${this.artiklOsnovnaKolicina.toFixed(2)}</efis:artiklOsnovnaKolicina>`;
        }
        if (this.artiklJedinicaMjereZaOsnovnuKolicinu !== undefined) {
            res += `<efis:artiklJedinicaMjereZaOsnovnuKolicinu>${xmlEscape(this.artiklJedinicaMjereZaOsnovnuKolicinu)}</efis:artiklJedinicaMjereZaOsnovnuKolicinu>`;
        }
        res += `<efis:artiklKategorijaPdv>${xmlEscape(this.artiklKategorijaPdv)}</efis:artiklKategorijaPdv>`;
        res += `<efis:artiklStopaPdv>${this.artiklStopaPdv.toFixed(2)}</efis:artiklStopaPdv>`;
        res += `<efis:artiklNaziv>${xmlEscape(this.artiklNaziv)}</efis:artiklNaziv>`;
        if (this.ArtiklIdentifikatorKlasifikacija) {
            this.ArtiklIdentifikatorKlasifikacija.forEach(a => res += a.toXmlString());
        }
        res += `</efis:StavkaERacuna>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IStavkaERacuna {
        return {
            kolicina: getElementContentNumber(el, "efis:kolicina", FISK_NS, "decimal"),
            jedinicaMjere: getElementContent(el, "efis:jedinicaMjere", FISK_NS, "jedinicaMjere"),
            artiklNetoCijena: getElementContentNumber(el, "efis:artiklNetoCijena", FISK_NS, "decimal"),
            artiklOsnovnaKolicina: getOptionalElementContentNumber(el, "efis:artiklOsnovnaKolicina", FISK_NS, "decimal"),
            artiklJedinicaMjereZaOsnovnuKolicinu: getOptionalElementContent(el, "efis:artiklJedinicaMjereZaOsnovnuKolicinu", FISK_NS, "jedinicaMjere"),
            artiklKategorijaPdv: getElementContent(el, "efis:artiklKategorijaPdv", FISK_NS, "kategorijaPdv"),
            artiklStopaPdv: getElementContentNumber(el, "efis:artiklStopaPdv", FISK_NS, "decimal"),
            artiklNaziv: getElementContent(el, "efis:artiklNaziv", FISK_NS, "tekst100"),
            ArtiklIdentifikatorKlasifikacija: extractOptionalElements(el, "efis:ArtiklIdentifikatorKlasifikacija", FISK_NS, ArtiklIdentifikatorKlasifikacija.fromXmlElement)
        }

    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote") {
        const groups = el.find(getBusinessGroupXpath("BG-25", type), UBL_NS) as XmlElement[];
        if (groups.length === 0) {
            throw new ValidationError(`Nije pronađena ni jedna grupa 'BG-25' u dokumentu '${type}'`, undefined);
        }
        return groups.map(groupEl => {
            return {
                kolicina: getElementContentNumber(groupEl, getBusinessTermXpath("BT-129", type, "BG-25"), UBL_NS, "decimal"),
                jedinicaMjere: getElementContent(groupEl, getBusinessTermXpath("BT-130", type, "BG-25"), UBL_NS, "jedinicaMjere"),
                artiklNetoCijena: getElementContentNumber(groupEl, getBusinessTermXpath("BT-146", type, "BG-25"), UBL_NS, "decimal"),
                artiklOsnovnaKolicina: getOptionalElementContentNumber(groupEl, getBusinessTermXpath("BT-149", type, "BG-25"), UBL_NS, "decimal"),
                artiklJedinicaMjereZaOsnovnuKolicinu: getOptionalElementContent(groupEl, getBusinessTermXpath("BT-150", type, "BG-25"), UBL_NS, "jedinicaMjere"),
                artiklKategorijaPdv: getElementContent(groupEl, getBusinessTermXpath("BT-151", type, "BG-25"), UBL_NS, "kategorijaPdv"),
                artiklStopaPdv: getElementContentNumber(groupEl, getBusinessTermXpath("BT-152", type, "BG-25"), UBL_NS, "decimal"),
                artiklNaziv: getElementContent(groupEl, getBusinessTermXpath("BT-153", type, "BG-25"), UBL_NS, "tekst100"),
                ArtiklIdentifikatorKlasifikacija: extractOptionalElements(groupEl, getBusinessTermXpath("BT-158", type, "BG-25"), UBL_NS, (el) => ArtiklIdentifikatorKlasifikacija.fromUbl(el, type))
            };
        });
    }
}

export class ArtiklIdentifikatorKlasifikacija implements ArtiklIdentifikatorKlasifikacijaSerializable {
    identifikatorKlasifikacije: string;
    identifikatorSheme: string;
    verzijaSheme?: string | undefined;

    constructor(args: IArtiklIdentifikatorKlasifikacija) {
        this.identifikatorKlasifikacije = args.identifikatorKlasifikacije;
        this.identifikatorSheme = args.identifikatorSheme;
        this.verzijaSheme = args.verzijaSheme;
    }


    toXmlString(): string {
        let res = '';
        res += `<efis:ArtiklIdentifikatorKlasifikacija>`;
        res += `<efis:identifikatorKlasifikacije>${xmlEscape(this.identifikatorKlasifikacije)}</efis:identifikatorKlasifikacije>`;
        res += `<efis:identifikatorSheme>${xmlEscape(this.identifikatorSheme)}</efis:identifikatorSheme>`;
        if (this.verzijaSheme !== undefined) {
            res += `<efis:verzijaSheme>${xmlEscape(this.verzijaSheme)}</efis:verzijaSheme>`;
        }
        res += `</efis:ArtiklIdentifikatorKlasifikacija>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IArtiklIdentifikatorKlasifikacija {
        return {
            identifikatorKlasifikacije: getElementContent(el, "efis:identifikatorKlasifikacije", FISK_NS, "tekst10"),
            identifikatorSheme: getElementContent(el, "efis:identifikatorSheme", FISK_NS, "klasifikacijaArtikla"),
            verzijaSheme: getOptionalElementContent(el, "efis:verzijaSheme", FISK_NS, "tekst10")
        }
    }

    static fromUbl(el: XmlElement, type: "Invoice" | "CreditNote") {
        return {
            identifikatorKlasifikacije: getElementContent(el, ".", UBL_NS, "tekst10"),
            identifikatorSheme: getAttributeValue(el, "listID", ""),
            verzijaSheme: getOptionalAttributeValue(el, "listVersionID", "") || undefined,
        };
    }
}

export class EvidentirajERacunOdgovor implements EvidentirajERacunOdgovorSerializable {
    _id: string;
    datumVrijemeSlanja: string;
    Odgovor: FiskalizacijaOdgovor;

    constructor(args: IEvidentirajERacunOdgovor) {
        this._id = args._id;
        this.datumVrijemeSlanja = args.datumVrijemeSlanja;
        this.Odgovor = new FiskalizacijaOdgovor(args.Odgovor);
    }

    public static fromXmlElement(el: XmlElement): IEvidentirajERacunOdgovor {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            datumVrijemeSlanja: getElementContent(el, "efis:datumVrijemeSlanja", FISK_NS, "datumVrijemeDeci"),
            Odgovor: extractElement(el, "efis:Odgovor", FISK_NS, FiskalizacijaOdgovor.fromXmlElement),
        }
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

export class FiskalizacijaOdgovor implements OdgovorSerializable {
    idZahtjeva: string;
    prihvacenZahtjev: boolean;
    greska?: IGreska;

    constructor(args: IOdgovor) {
        this.idZahtjeva = args.idZahtjeva;
        this.prihvacenZahtjev = args.prihvacenZahtjev;
        if (args.greska) {
            this.greska = new FiskalizacijaGreska(args.greska)
        }
    }

    public static fromXmlElement(el: XmlElement): IOdgovor {
        return {
            idZahtjeva: getElementContent(el, `efis:idZahtjeva`, FISK_NS, "uuid"),
            prihvacenZahtjev: getElementContent(el, `efis:prihvacenZahtjev`, FISK_NS, "boolean") === "true",
            greska: extractOptionalElement(el, `efis:greska`, FISK_NS, FiskalizacijaGreska.fromXmlElement)
        }
    }


    toXmlString(): string {
        throw new Error("Method not implemented.");
    }
}

export class FiskalizacijaGreska implements GreskaSerializable {
    sifra: string;
    redniBrojZapisa: string;
    opis: string;

    constructor(args: IGreska) {
        this.sifra = args.sifra;
        this.redniBrojZapisa = args.redniBrojZapisa;
        this.opis = args.opis;
    }

    static fromXmlElement(el: XmlElement): IGreska {
        return {
            sifra: getElementContent(el, "efis:sifra", FISK_NS, "greska"),
            redniBrojZapisa: getElementContent(el, "efis:redniBrojZapisa", FISK_NS, "redniBroj"),
            opis: getElementContent(el, "efis:opis", FISK_NS, "tekst1024")
        }
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}
