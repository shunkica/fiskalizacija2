import {ERacunSerializable, EvidentirajERacunOdgovorSerializable, EvidentirajERacunZahtjevSerializable, IERacun, IEvidentirajERacunOdgovor, IEvidentirajERacunZahtjev, IEvidentirajNaplatuZahtjev, IGreska, IOdgovor, IPrethodniERacun, IStavkaERacuna, IZaglavljeFiskalizacija, OdgovorSerializable, PrethodniERacunSerializable, StavkaERacunaSerializable, ValidationError, ZaglavljeFiskalizacijaSerializable} from "../../types";
import {FISK_NS, UBL_NS} from "./const";
import {extractElement, extractElements, extractOptionalElements, getAttributeValue, getBusinessGroupXpath, getBusinessTermXpath, getElementContent, getElementContentNumber, getOptionalElementContent, getOptionalElementContentNumber, usingXmlDocument, xmlEscape} from "../../util/xml";
import {XmlAttribute, XmlDocument, XmlElement} from "libxml2-wasm";
import {ArtiklIdentifikatorKlasifikacija, DokumentUkupanIznos, Izdavatelj, PrijenosSredstava, Primatelj, RaspodjelaPdv, Odgovor} from "./common";

export class EvidentirajERacunZahtjev implements EvidentirajERacunZahtjevSerializable {
    _id: string;
    Zaglavlje: ZaglavljeFiskalizacija;
    ERacun: ERacun[];

    constructor(args: IEvidentirajERacunZahtjev) {
        this._id = args._id;
        this.Zaglavlje = new ZaglavljeFiskalizacija(args.Zaglavlje);
        this.ERacun = args.ERacun.map((eracun) => new ERacun(eracun));
    }

    public static fromXml(xml: string | Uint8Array | XmlDocument | XmlElement): IEvidentirajERacunZahtjev {
        if (typeof xml === 'string') {
            return usingXmlDocument(XmlDocument.fromString(xml), doc => {
                return EvidentirajERacunZahtjev.fromXml(doc);
            });
        } else if (Buffer.isBuffer(xml)) {
            return usingXmlDocument(XmlDocument.fromBuffer(xml), doc => {
                return EvidentirajERacunZahtjev.fromXml(doc);
            });
        } else if (xml instanceof XmlDocument) {
            return EvidentirajERacunZahtjev.fromXml(xml.root)
        } else {
            let el = xml as XmlElement;
            if (el.name === 'Envelope' && el.namespaceUri === FISK_NS.soapenv) {
                let el2 = el.get('/soapenv:Envelope/soapenv:Body/efis:EvidentirajERacunZahtjev', FISK_NS) as XmlElement | null;
                if (!el2) {
                    throw new ValidationError(`Expected 'EvidentirajERacunZahtjev' element in SOAP body`, xml);
                }
                el = el2;
            }
            if (el.name !== 'EvidentirajERacunZahtjev' || el.namespaceUri != FISK_NS.efis) {
                throw new ValidationError(`Expected 'EvidentirajERacunZahtjev' element with namespace '${FISK_NS.efis}'`, xml);
            }
            return EvidentirajERacunZahtjev.fromXmlElement(el);
        }
    }

    static fromXmlElement(el: XmlElement): IEvidentirajERacunZahtjev {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            Zaglavlje: extractElement(el, "efis:Zaglavlje", FISK_NS, ZaglavljeFiskalizacija.fromXmlElement),
            ERacun: extractElements(el, "efis:ERacun", FISK_NS, ERacun.fromXmlElement)
        }
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
        this.Izdavatelj = new Izdavatelj(args.Izdavatelj, "efis");
        this.Primatelj = new Primatelj(args.Primatelj, "efis");
        this.PrijenosSredstava = args.PrijenosSredstava?.map(i => new PrijenosSredstava(i, "efis"));
        this.DokumentUkupanIznos = new DokumentUkupanIznos(args.DokumentUkupanIznos, "efis")
        this.RaspodjelaPdv = args.RaspodjelaPdv.map(i => new RaspodjelaPdv(i, "efis"));
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
        this.ArtiklIdentifikatorKlasifikacija = args.ArtiklIdentifikatorKlasifikacija?.map(i => new ArtiklIdentifikatorKlasifikacija(i, "efis"));
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

export class EvidentirajERacunOdgovor implements EvidentirajERacunOdgovorSerializable {
    _id: string;
    datumVrijemeSlanja: string;
    Odgovor: Odgovor;

    constructor(args: IEvidentirajERacunOdgovor) {
        this._id = args._id;
        this.datumVrijemeSlanja = args.datumVrijemeSlanja;
        this.Odgovor = new Odgovor(args.Odgovor, "efis");
    }

    public static fromXmlElement(el: XmlElement): IEvidentirajERacunOdgovor {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            datumVrijemeSlanja: getElementContent(el, "efis:datumVrijemeSlanja", FISK_NS, "datumVrijemeDeci"),
            Odgovor: extractElement(el, "efis:Odgovor", FISK_NS, Odgovor.fromXmlElement),
        }
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}
