import {
    EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovorSerializable,
    EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjevSerializable,
    EvidentirajNaplatuOdgovorSerializable,
    EvidentirajNaplatuZahtjevSerializable,
    EvidentirajOdbijanjeOdgovorSerializable,
    EvidentirajOdbijanjeZahtjevSerializable, IERacun, IEvidentirajERacunZahtjev,
    IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor,
    IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev,
    IEvidentirajNaplatuOdgovor,
    IEvidentirajNaplatuZahtjev,
    IEvidentirajOdbijanjeOdgovor,
    IEvidentirajOdbijanjeZahtjev,
    INaplata,
    IOdbijanje,
    IPrethodniRacun,
    IRacun,
    IStavkaRacuna,
    IZaglavljeIsporuka,
    IZaglavljeIzvjestavanje,
    NaplataSerializable,
    OdbijanjeSerializable,
    PrethodniRacunSerializable,
    RacunSerializable,
    StavkaRacunaSerializable,
    ValidationError,
    ZaglavljeIsporukaSerializable,
    ZaglavljeIzvjestavanjeSerializable
} from "../../types";
import {extractElement, extractElements, extractOptionalElements, getAttributeValue, getBusinessGroupXpath, getBusinessTermXpath, getElementContent, getElementContentNumber, getOptionalElementContent, getOptionalElementContentNumber, usingXmlDocument, xmlEscape} from "../../util/xml";
import {FISK_NS, UBL_NS} from "./const";
import {XmlAttribute, XmlDocument, XmlElement} from "libxml2-wasm";
import {ArtiklIdentifikatorKlasifikacija, DokumentUkupanIznos, Izdavatelj, Odgovor, PrijenosSredstava, Primatelj, RaspodjelaPdv} from "./common";
import {ZaglavljeFiskalizacija} from "./fiskalizacija";

export class EvidentirajNaplatuZahtjev implements EvidentirajNaplatuZahtjevSerializable {
    _id: string;
    Zaglavlje: ZaglavljeIzvjestavanje;
    Naplata: Naplata[];

    constructor(props: IEvidentirajNaplatuZahtjev) {
        this._id = props._id;
        this.Zaglavlje = new ZaglavljeIzvjestavanje(props.Zaglavlje);
        this.Naplata = props.Naplata.map(i => new Naplata(i));
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajNaplatuZahtjev xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += this.Zaglavlje.toXmlString();
        this.Naplata.forEach(i => res += i.toXmlString());
        res += '</eizv:EvidentirajNaplatuZahtjev>';
        return res;
    }

    public static fromXml(xml: string | Uint8Array | XmlDocument | XmlElement): IEvidentirajNaplatuZahtjev {
        if (typeof xml === 'string') {
            return usingXmlDocument(XmlDocument.fromString(xml), doc => {
                return EvidentirajNaplatuZahtjev.fromXml(doc);
            });
        } else if (Buffer.isBuffer(xml)) {
            return usingXmlDocument(XmlDocument.fromBuffer(xml), doc => {
                return EvidentirajNaplatuZahtjev.fromXml(doc);
            });
        } else if (xml instanceof XmlDocument) {
            return EvidentirajNaplatuZahtjev.fromXml(xml.root)
        } else {
            let el = xml as XmlElement;
            if (el.name === 'Envelope' && el.namespaceUri === FISK_NS.soapenv) {
                let el2 = el.get('/soapenv:Envelope/soapenv:Body/eizv:EvidentirajNaplatuZahtjev', FISK_NS) as XmlElement | null;
                if (!el2) {
                    throw new ValidationError(`Expected 'EvidentirajNaplatuZahtjev' element in SOAP body`, xml);
                }
                el = el2;
            }
            if (el.name !== 'EvidentirajNaplatuZahtjev' || el.namespaceUri != FISK_NS.eizv) {
                throw new ValidationError(`Expected 'EvidentirajNaplatuZahtjev' element with namespace '${FISK_NS.eizv}'`, xml);
            }
            return EvidentirajNaplatuZahtjev.fromXmlElement(el);
        }
    }

    static fromXmlElement(el: XmlElement): IEvidentirajNaplatuZahtjev {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            Zaglavlje: extractElement(el, "eizv:Zaglavlje", FISK_NS, ZaglavljeIzvjestavanje.fromXmlElement),
            Naplata: extractElements(el, "eizv:Naplata", FISK_NS, Naplata.fromXmlElement)
        }
    }
}

export class EvidentirajOdbijanjeZahtjev implements EvidentirajOdbijanjeZahtjevSerializable {
    _id: string;
    Zaglavlje: ZaglavljeIzvjestavanje;
    Odbijanje: Odbijanje[];

    constructor(props: IEvidentirajOdbijanjeZahtjev) {
        this.Odbijanje = props.Odbijanje.map(i => new Odbijanje(i));
        this.Zaglavlje = new ZaglavljeIzvjestavanje(props.Zaglavlje);
        this._id = props._id;
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajOdbijanjeZahtjev xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += this.Zaglavlje.toXmlString();
        this.Odbijanje.forEach(i => res += i.toXmlString());
        res += '</eizv:EvidentirajOdbijanjeZahtjev>';
        return res;
    }

    public static fromXml(xml: string | Uint8Array | XmlDocument | XmlElement): IEvidentirajOdbijanjeZahtjev {
        if (typeof xml === 'string') {
            return usingXmlDocument(XmlDocument.fromString(xml), doc => {
                return EvidentirajOdbijanjeZahtjev.fromXml(doc);
            });
        } else if (Buffer.isBuffer(xml)) {
            return usingXmlDocument(XmlDocument.fromBuffer(xml), doc => {
                return EvidentirajOdbijanjeZahtjev.fromXml(doc);
            });
        } else if (xml instanceof XmlDocument) {
            return EvidentirajOdbijanjeZahtjev.fromXml(xml.root)
        } else {
            let el = xml as XmlElement;
            if (el.name === 'Envelope' && el.namespaceUri === FISK_NS.soapenv) {
                let el2 = el.get('/soapenv:Envelope/soapenv:Body/eizv:EvidentirajOdbijanjeZahtjev', FISK_NS) as XmlElement | null;
                if (!el2) {
                    throw new ValidationError(`Expected 'EvidentirajOdbijanjeZahtjev' element in SOAP body`, xml);
                }
                el = el2;
            }
            if (el.name !== 'EvidentirajOdbijanjeZahtjev' || el.namespaceUri != FISK_NS.eizv) {
                throw new ValidationError(`Expected 'EvidentirajOdbijanjeZahtjev' element with namespace '${FISK_NS.eizv}'`, xml);
            }
            return EvidentirajOdbijanjeZahtjev.fromXmlElement(el);
        }
    }

    static fromXmlElement(el: XmlElement): IEvidentirajOdbijanjeZahtjev {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            Zaglavlje: extractElement(el, "eizv:Zaglavlje", FISK_NS, ZaglavljeIzvjestavanje.fromXmlElement),
            Odbijanje: extractElements(el, "eizv:Odbijanje", FISK_NS, Odbijanje.fromXmlElement)
        }
    }
}

export class EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev implements EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjevSerializable {
    _id: string;
    Zaglavlje: ZaglavljeIsporuka;
    Racun: Racun[];

    constructor(props: IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev) {
        this._id = props._id;
        this.Zaglavlje = new ZaglavljeIsporuka(props.Zaglavlje);
        this.Racun = props.Racun.map(i => new Racun(i));
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += this.Zaglavlje.toXmlString();
        this.Racun.forEach(i => res += i.toXmlString());
        res += '</eizv:EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev>';
        return res;
    }

    public static fromXml(xml: string | Uint8Array | XmlDocument | XmlElement): IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev {
        if (typeof xml === 'string') {
            return usingXmlDocument(XmlDocument.fromString(xml), doc => {
                return EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXml(doc);
            });
        } else if (Buffer.isBuffer(xml)) {
            return usingXmlDocument(XmlDocument.fromBuffer(xml), doc => {
                return EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXml(doc);
            });
        } else if (xml instanceof XmlDocument) {
            return EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXml(xml.root)
        } else {
            const el = xml as XmlElement;
            if (el.name !== 'EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev' || el.namespaceUri != FISK_NS.eizv) {
                throw new ValidationError(`Expected 'EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev' element with namespace '${FISK_NS.eizv}'`, JSON.stringify({name: el.name, namespaceUri: el.namespaceUri}));
            }
            return EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev.fromXmlElement(el);
        }
    }

    static fromXmlElement(el: XmlElement): IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev {
        return {
            _id: getAttributeValue(el, "id", el.prefix),
            Zaglavlje: extractElement(el, "eizv:Zaglavlje", FISK_NS, ZaglavljeIsporuka.fromXmlElement),
            Racun: extractElements(el, "eizv:Racun", FISK_NS, Racun.fromXmlElement)
        }
    }
}

export class ZaglavljeIzvjestavanje implements ZaglavljeIzvjestavanjeSerializable {
    datumVrijemeSlanja: string;

    constructor(props: IZaglavljeIzvjestavanje) {
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:Zaglavlje>`;
        res += `<eizv:datumVrijemeSlanja>${xmlEscape(this.datumVrijemeSlanja)}</eizv:datumVrijemeSlanja>`;
        res += '</eizv:Zaglavlje>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IZaglavljeIzvjestavanje {
        return {
            datumVrijemeSlanja: getElementContent(el, "eizv:datumVrijemeSlanja", FISK_NS, "datumVrijemeDeci")
        }
    }
}

export class ZaglavljeIsporuka implements ZaglavljeIsporukaSerializable {
    datumVrijemeSlanja: string;
    vrstaRacuna: string;

    constructor(props: IZaglavljeIsporuka) {
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
        this.vrstaRacuna = props.vrstaRacuna;
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:Zaglavlje>`;
        res += `<eizv:datumVrijemeSlanja>${xmlEscape(this.datumVrijemeSlanja)}</eizv:datumVrijemeSlanja>`;
        res += `<eizv:vrstaRacuna>${xmlEscape(this.vrstaRacuna)}</eizv:vrstaRacuna>`;
        res += '</eizv:Zaglavlje>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IZaglavljeIsporuka {
        return {
            datumVrijemeSlanja: getElementContent(el, "eizv:datumVrijemeSlanja", FISK_NS, "datumVrijemeDeci"),
            // TODO: ovo bi trebalo uvijek biti `IR`
            vrstaRacuna: getElementContent(el, "eizv:vrstaRacuna", FISK_NS, "vrstaERacuna")
        }
    }
}

export class Naplata implements NaplataSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    oibPorezniBrojIzdavatelja: string;
    oibPorezniBrojPrimatelja: string;
    datumNaplate: string;
    naplaceniIznos: number;
    nacinPlacanja: string;

    constructor(props: INaplata) {
        this.brojDokumenta = props.brojDokumenta;
        this.datumIzdavanja = props.datumIzdavanja;
        this.oibPorezniBrojIzdavatelja = props.oibPorezniBrojIzdavatelja;
        this.oibPorezniBrojPrimatelja = props.oibPorezniBrojPrimatelja;
        this.datumNaplate = props.datumNaplate;
        this.naplaceniIznos = props.naplaceniIznos;
        this.nacinPlacanja = props.nacinPlacanja;
    }

    toXmlString(): string {
        let res = '';
        res += '<eizv:Naplata>';
        res += `<eizv:brojDokumenta>${xmlEscape(this.brojDokumenta)}</eizv:brojDokumenta>`;
        res += `<eizv:datumIzdavanja>${xmlEscape(this.datumIzdavanja)}</eizv:datumIzdavanja>`;
        res += `<eizv:oibPorezniBrojIzdavatelja>${xmlEscape(this.oibPorezniBrojIzdavatelja)}</eizv:oibPorezniBrojIzdavatelja>`;
        res += `<eizv:oibPorezniBrojPrimatelja>${xmlEscape(this.oibPorezniBrojPrimatelja)}</eizv:oibPorezniBrojPrimatelja>`;
        res += `<eizv:datumNaplate>${xmlEscape(this.datumNaplate)}</eizv:datumNaplate>`;
        res += `<eizv:naplaceniIznos>${this.naplaceniIznos.toFixed(2)}</eizv:naplaceniIznos>`;
        res += `<eizv:nacinPlacanja>${xmlEscape(this.nacinPlacanja)}</eizv:nacinPlacanja>`;
        res += '</eizv:Naplata>';
        return res;
    }

    static fromXmlElement(el: XmlElement): INaplata {
        return {
            brojDokumenta: getElementContent(el, "eizv:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "eizv:datumIzdavanja", FISK_NS, "datum"),
            oibPorezniBrojIzdavatelja: getElementContent(el, "eizv:oibPorezniBrojIzdavatelja", FISK_NS, "tekst20"),
            oibPorezniBrojPrimatelja: getElementContent(el, "eizv:oibPorezniBrojPrimatelja", FISK_NS, "tekst20"),
            datumNaplate: getElementContent(el, "eizv:datumNaplate", FISK_NS, "datum"),
            naplaceniIznos: getElementContentNumber(el, "eizv:naplaceniIznos", FISK_NS, "decimal2"),
            nacinPlacanja: getElementContent(el, "eizv:nacinPlacanja", FISK_NS, "nacinPlacanja")
        }
    }
}

export class Odbijanje implements OdbijanjeSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    oibPorezniBrojIzdavatelja: string;
    oibPorezniBrojPrimatelja: string;
    datumOdbijanja: string;
    vrstaRazlogaOdbijanja: string;
    razlogOdbijanja: string;

    constructor(props: IOdbijanje) {
        this.brojDokumenta = props.brojDokumenta;
        this.datumIzdavanja = props.datumIzdavanja;
        this.oibPorezniBrojIzdavatelja = props.oibPorezniBrojIzdavatelja;
        this.oibPorezniBrojPrimatelja = props.oibPorezniBrojPrimatelja;
        this.datumOdbijanja = props.datumOdbijanja;
        this.vrstaRazlogaOdbijanja = props.vrstaRazlogaOdbijanja;
        this.razlogOdbijanja = props.razlogOdbijanja;
    }

    toXmlString(): string {
        let res = '';
        res += '<eizv:Odbijanje>';
        res += `<eizv:brojDokumenta>${xmlEscape(this.brojDokumenta)}</eizv:brojDokumenta>`;
        res += `<eizv:datumIzdavanja>${xmlEscape(this.datumIzdavanja)}</eizv:datumIzdavanja>`;
        res += `<eizv:oibPorezniBrojIzdavatelja>${xmlEscape(this.oibPorezniBrojIzdavatelja)}</eizv:oibPorezniBrojIzdavatelja>`;
        res += `<eizv:oibPorezniBrojPrimatelja>${xmlEscape(this.oibPorezniBrojPrimatelja)}</eizv:oibPorezniBrojPrimatelja>`;
        res += `<eizv:datumOdbijanja>${xmlEscape(this.datumOdbijanja)}</eizv:datumOdbijanja>`;
        res += `<eizv:vrstaRazlogaOdbijanja>${xmlEscape(this.vrstaRazlogaOdbijanja)}</eizv:vrstaRazlogaOdbijanja>`;
        res += `<eizv:razlogOdbijanja>${xmlEscape(this.razlogOdbijanja)}</eizv:razlogOdbijanja>`;
        res += '</eizv:Odbijanje>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IOdbijanje {
        return {
            brojDokumenta: getElementContent(el, "eizv:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "eizv:datumIzdavanja", FISK_NS, "datum"),
            oibPorezniBrojIzdavatelja: getElementContent(el, "eizv:oibPorezniBrojIzdavatelja", FISK_NS, "tekst20"),
            oibPorezniBrojPrimatelja: getElementContent(el, "eizv:oibPorezniBrojPrimatelja", FISK_NS, "tekst20"),
            datumOdbijanja: getElementContent(el, "eizv:datumOdbijanja", FISK_NS, "datum"),
            vrstaRazlogaOdbijanja: getElementContent(el, "eizv:vrstaRazlogaOdbijanja", FISK_NS, "razlogOdbijanja"),
            razlogOdbijanja: getElementContent(el, "eizv:razlogOdbijanja", FISK_NS, "tekst1024")
        }

    }
}

export class PrethodniRacun implements PrethodniRacunSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;

    constructor(args: IPrethodniRacun) {
        this.brojDokumenta = args.brojDokumenta;
        this.datumIzdavanja = args.datumIzdavanja;
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:PrethodniRacun>`;
        res += `<eizv:brojDokumenta>${xmlEscape(this.brojDokumenta)}</eizv:brojDokumenta>`;
        res += `<eizv:datumIzdavanja>${xmlEscape(this.datumIzdavanja)}</eizv:datumIzdavanja>`;
        res += `</eizv:PrethodniRacun>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IPrethodniRacun {
        return {
            brojDokumenta: getElementContent(el, "eizv:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "eizv:datumIzdavanja", FISK_NS, "datum")
        };
    }

    static fromUblElement(el: XmlElement, type: "Invoice" | "CreditNote"): IPrethodniRacun[] | undefined {
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

export class StavkaRacuna implements StavkaRacunaSerializable {
    kolicina: number;
    jedinicaMjere: string;
    artiklNetoCijena: number;
    artiklOsnovnaKolicina?: number | undefined;
    artiklJedinicaMjereZaOsnovnuKolicinu?: string | undefined;
    artiklKategorijaPdv: string;
    artiklStopaPdv: number;
    artiklNaziv: string;
    ArtiklIdentifikatorKlasifikacija?: ArtiklIdentifikatorKlasifikacija[] | undefined;

    constructor(args: IStavkaRacuna) {
        this.kolicina = args.kolicina;
        this.jedinicaMjere = args.jedinicaMjere;
        this.artiklNetoCijena = args.artiklNetoCijena;
        this.artiklOsnovnaKolicina = args.artiklOsnovnaKolicina;
        this.artiklJedinicaMjereZaOsnovnuKolicinu = args.artiklJedinicaMjereZaOsnovnuKolicinu;
        this.artiklKategorijaPdv = args.artiklKategorijaPdv;
        this.artiklStopaPdv = args.artiklStopaPdv;
        this.artiklNaziv = args.artiklNaziv;
        this.ArtiklIdentifikatorKlasifikacija = args.ArtiklIdentifikatorKlasifikacija?.map(i => new ArtiklIdentifikatorKlasifikacija(i, "eizv"));
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:StavkaRacuna>`;
        res += `<eizv:kolicina>${this.kolicina.toFixed(2)}</eizv:kolicina>`;
        res += `<eizv:jedinicaMjere>${xmlEscape(this.jedinicaMjere)}</eizv:jedinicaMjere>`;
        res += `<eizv:artiklNetoCijena>${this.artiklNetoCijena.toFixed(2)}</eizv:artiklNetoCijena>`;
        if (this.artiklOsnovnaKolicina !== undefined) {
            res += `<eizv:artiklOsnovnaKolicina>${this.artiklOsnovnaKolicina.toFixed(2)}</eizv:artiklOsnovnaKolicina>`;
        }
        if (this.artiklJedinicaMjereZaOsnovnuKolicinu !== undefined) {
            res += `<eizv:artiklJedinicaMjereZaOsnovnuKolicinu>${xmlEscape(this.artiklJedinicaMjereZaOsnovnuKolicinu)}</eizv:artiklJedinicaMjereZaOsnovnuKolicinu>`;
        }
        res += `<eizv:artiklKategorijaPdv>${xmlEscape(this.artiklKategorijaPdv)}</eizv:artiklKategorijaPdv>`;
        res += `<eizv:artiklStopaPdv>${this.artiklStopaPdv.toFixed(2)}</eizv:artiklStopaPdv>`;
        res += `<eizv:artiklNaziv>${xmlEscape(this.artiklNaziv)}</eizv:artiklNaziv>`;
        if (this.ArtiklIdentifikatorKlasifikacija) {
            this.ArtiklIdentifikatorKlasifikacija.forEach(a => res += a.toXmlString());
        }
        res += `</eizv:StavkaRacuna>`;
        return res;
    }

    static fromXmlElement(el: XmlElement): IStavkaRacuna {
        return {
            kolicina: getElementContentNumber(el, "eizv:kolicina", FISK_NS, "decimal"),
            jedinicaMjere: getElementContent(el, "eizv:jedinicaMjere", FISK_NS, "jedinicaMjere"),
            artiklNetoCijena: getElementContentNumber(el, "eizv:artiklNetoCijena", FISK_NS, "decimal"),
            artiklOsnovnaKolicina: getOptionalElementContentNumber(el, "eizv:artiklOsnovnaKolicina", FISK_NS, "decimal"),
            artiklJedinicaMjereZaOsnovnuKolicinu: getOptionalElementContent(el, "eizv:artiklJedinicaMjereZaOsnovnuKolicinu", FISK_NS, "jedinicaMjere"),
            artiklKategorijaPdv: getElementContent(el, "eizv:artiklKategorijaPdv", FISK_NS, "kategorijaPdv"),
            artiklStopaPdv: getElementContentNumber(el, "eizv:artiklStopaPdv", FISK_NS, "decimal"),
            artiklNaziv: getElementContent(el, "eizv:artiklNaziv", FISK_NS, "tekst100"),
            ArtiklIdentifikatorKlasifikacija: extractOptionalElements(el, "eizv:ArtiklIdentifikatorKlasifikacija", FISK_NS, ArtiklIdentifikatorKlasifikacija.fromXmlElement)
        }

    }

    static fromUblElement(el: XmlElement, type: "Invoice" | "CreditNote") {
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
                ArtiklIdentifikatorKlasifikacija: extractOptionalElements(groupEl, getBusinessTermXpath("BT-158", type, "BG-25"), UBL_NS, (el) => ArtiklIdentifikatorKlasifikacija.fromUblElement(el, type))
            };
        });
    }
}

export class Racun implements RacunSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    vrstaDokumenta: string;
    valutaRacuna: string;
    datumDospijecaPlacanja?: string;
    datumIsporuke?: string;
    vrstaPoslovnogProcesa: string;
    referencaNaUgovor?: string;
    PrethodniRacun?: PrethodniRacun[];
    Izdavatelj: Izdavatelj;
    Primatelj: Primatelj;
    PrijenosSredstava?: PrijenosSredstava[];
    DokumentUkupanIznos: DokumentUkupanIznos;
    RaspodjelaPdv: RaspodjelaPdv[];
    StavkaRacuna: StavkaRacuna[];
    indikatorKopije: boolean;

    constructor(props: IRacun) {
        this.DokumentUkupanIznos = new DokumentUkupanIznos(props.DokumentUkupanIznos, "eizv");
        this.Izdavatelj = new Izdavatelj(props.Izdavatelj, "eizv");
        if (props.PrethodniRacun)
            this.PrethodniRacun = props.PrethodniRacun.map(i => new PrethodniRacun(i));
        if (props.PrijenosSredstava)
            this.PrijenosSredstava = props.PrijenosSredstava.map(i => new PrijenosSredstava(i, "eizv"));
        this.Primatelj = new Primatelj(props.Primatelj, "eizv");
        this.RaspodjelaPdv = props.RaspodjelaPdv.map(i => new RaspodjelaPdv(i, "eizv"));
        this.StavkaRacuna = props.StavkaRacuna.map(i => new StavkaRacuna(i));
        this.brojDokumenta = props.brojDokumenta;
        this.datumDospijecaPlacanja = props.datumDospijecaPlacanja;
        this.datumIsporuke = props.datumIsporuke;
        this.datumIzdavanja = props.datumIzdavanja;
        this.indikatorKopije = props.indikatorKopije;
        this.referencaNaUgovor = props.referencaNaUgovor;
        this.valutaRacuna = props.valutaRacuna;
        this.vrstaDokumenta = props.vrstaDokumenta;
        this.vrstaPoslovnogProcesa = props.vrstaPoslovnogProcesa;
    }

    toXmlString(): string {
        let res = '';
        res += '<eizv:Racun>';
        res += `<eizv:brojDokumenta>${xmlEscape(this.brojDokumenta)}</eizv:brojDokumenta>`;
        res += `<eizv:datumIzdavanja>${xmlEscape(this.datumIzdavanja)}</eizv:datumIzdavanja>`;
        res += `<eizv:vrstaDokumenta>${xmlEscape(this.vrstaDokumenta)}</eizv:vrstaDokumenta>`;
        res += `<eizv:valutaRacuna>${xmlEscape(this.valutaRacuna)}</eizv:valutaRacuna>`;
        if (this.datumDospijecaPlacanja) {
            res += `<eizv:datumDospijecaPlacanja>${xmlEscape(this.datumDospijecaPlacanja)}</eizv:datumDospijecaPlacanja>`;
        }
        if (this.datumIsporuke) {
            res += `<eizv:datumIsporuke>${xmlEscape(this.datumIsporuke)}</eizv:datumIsporuke>`;
        }
        res += `<eizv:vrstaPoslovnogProcesa>${xmlEscape(this.vrstaPoslovnogProcesa)}</eizv:vrstaPoslovnogProcesa>`;
        if (this.referencaNaUgovor) {
            res += `<eizv:referencaNaUgovor>${xmlEscape(this.referencaNaUgovor)}</eizv:referencaNaUgovor>`;
        }
        if (this.PrethodniRacun) {
            res += '<eizv:PrethodniRacun>';
            this.PrethodniRacun.forEach(i => {
                res += i.toXmlString();
            });
            res += '</eizv:PrethodniRacun>';
        }
        res += this.Izdavatelj.toXmlString();
        res += this.Primatelj.toXmlString();
        if (this.PrijenosSredstava) {
            this.PrijenosSredstava.forEach(i => res += i.toXmlString());
        }
        res += this.DokumentUkupanIznos.toXmlString();
        this.RaspodjelaPdv.forEach(i => res += i.toXmlString());
        this.StavkaRacuna.forEach(i => res += i.toXmlString());
        res += `<eizv:indikatorKopije>${this.indikatorKopije}</eizv:indikatorKopije>`;
        res += '</eizv:Racun>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IRacun {
        return {
            brojDokumenta: getElementContent(el, "eizv:brojDokumenta", FISK_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, "eizv:datumIzdavanja", FISK_NS, "datum"),
            vrstaDokumenta: getElementContent(el, "eizv:vrstaDokumenta", FISK_NS, "vrstaDokumenta"),
            valutaRacuna: getElementContent(el, "eizv:valutaRacuna", FISK_NS, "valuta"),
            datumDospijecaPlacanja: getOptionalElementContent(el, "eizv:datumDospijecaPlacanja", FISK_NS, "datum"),
            datumIsporuke: getOptionalElementContent(el, "eizv:datumIsporuke", FISK_NS, "datum"),
            vrstaPoslovnogProcesa: getElementContent(el, "eizv:vrstaPoslovnogProcesa", FISK_NS, "tekst100"),
            referencaNaUgovor: getOptionalElementContent(el, "eizv:referencaNaUgovor", FISK_NS, "tekst100"),
            PrethodniRacun: extractOptionalElements(el, "eizv:PrethodniRacun", FISK_NS, PrethodniRacun.fromXmlElement),
            Izdavatelj: extractElement(el, "eizv:Izdavatelj", FISK_NS, Izdavatelj.fromXmlElement),
            Primatelj: extractElement(el, "eizv:Primatelj", FISK_NS, Primatelj.fromXmlElement),
            PrijenosSredstava: extractOptionalElements(el, "eizv:PrijenosSredstava", FISK_NS, PrijenosSredstava.fromXmlElement),
            DokumentUkupanIznos: extractElement(el, "eizv:DokumentUkupanIznos", FISK_NS, DokumentUkupanIznos.fromXmlElement),
            RaspodjelaPdv: extractElements(el, "eizv:RaspodjelaPdv", FISK_NS, RaspodjelaPdv.fromXmlElement),
            StavkaRacuna: extractElements(el, "eizv:StavkaRacuna", FISK_NS, StavkaRacuna.fromXmlElement),
            indikatorKopije: getElementContent(el, "eizv:indikatorKopije", FISK_NS, "boolean") === "true"
        }
    }

    static fromUblElement(el: XmlElement, type: "Invoice" | "CreditNote"): IRacun {
        return {
            brojDokumenta: getElementContent(el, getBusinessTermXpath("BT-1", type), UBL_NS, "tekst100"),
            datumIzdavanja: getElementContent(el, getBusinessTermXpath("BT-2", type), UBL_NS, "datum"),
            vrstaDokumenta: getElementContent(el, getBusinessTermXpath("BT-3", type), UBL_NS, "vrstaDokumenta"),
            valutaRacuna: getElementContent(el, getBusinessTermXpath("BT-5", type), UBL_NS, "valuta"),
            datumDospijecaPlacanja: getOptionalElementContent(el, getBusinessTermXpath("BT-9", type), UBL_NS, "datum"),
            datumIsporuke: getOptionalElementContent(el, getBusinessTermXpath("BT-72", type), UBL_NS, "datum"),
            vrstaPoslovnogProcesa: getElementContent(el, getBusinessTermXpath("BT-23", type), UBL_NS, "tekst100"),
            referencaNaUgovor: getOptionalElementContent(el, getBusinessTermXpath("BT-12", type), UBL_NS, "tekst100"),
            PrethodniRacun: PrethodniRacun.fromUblElement(el, type),
            Izdavatelj: Izdavatelj.fromUblElement(el, type),
            Primatelj: Primatelj.fromUblElement(el, type),
            PrijenosSredstava: PrijenosSredstava.fromUblElement(el, type),
            DokumentUkupanIznos: DokumentUkupanIznos.fromUblElement(el, type),
            RaspodjelaPdv: RaspodjelaPdv.fromUblElement(el, type),
            StavkaRacuna: StavkaRacuna.fromUblElement(el, type),
            indikatorKopije: getOptionalElementContent(el, getBusinessTermXpath("HR-BT-1", type), UBL_NS, "boolean") === "true"
        }
    }
}

export class EvidentirajNaplatuOdgovor implements EvidentirajNaplatuOdgovorSerializable {
    _id: string;
    Odgovor: Odgovor;

    constructor(props: IEvidentirajNaplatuOdgovor) {
        this._id = props._id;
        this.Odgovor = new Odgovor(props.Odgovor, "eizv");
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajNaplatuOdgovor xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += this.Odgovor.toXmlString();
        res += '</eizv:EvidentirajNaplatuOdgovor>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IEvidentirajNaplatuOdgovor {
        return {
            _id: getAttributeValue(el, "id", "eizv"),
            Odgovor: Odgovor.fromXmlElement(el)
        }
    }
}

export class EvidentirajOdbijanjeOdgovor implements EvidentirajOdbijanjeOdgovorSerializable {
    _id: string;
    datumVrijemeSlanja: string;
    Odgovor: Odgovor;

    constructor(props: IEvidentirajOdbijanjeOdgovor) {
        this._id = props._id;
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
        this.Odgovor = new Odgovor(props.Odgovor, "eizv");
    }

    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajOdbijanjeOdgovor xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += `<eizv:datumVrijemeSlanja>${xmlEscape(this.datumVrijemeSlanja)}</eizv:datumVrijemeSlanja>`;
        res += this.Odgovor.toXmlString();
        res += '</eizv:EvidentirajOdbijanjeOdgovor>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IEvidentirajOdbijanjeOdgovor {
        return {
            _id: getAttributeValue(el, "id", "eizv"),
            datumVrijemeSlanja: getElementContent(el, "eizv:datumVrijemeSlanja", FISK_NS, "datumVrijeme"),
            Odgovor: Odgovor.fromXmlElement(el)
        }
    }
}

export class EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor implements EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovorSerializable {
    _id: string;
    datumVrijemeSlanja: string;
    Odgovor: Odgovor;

    constructor(props: IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor) {
        this._id = props._id;
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
        this.Odgovor = new Odgovor(props.Odgovor, "eizv");
    }


    toXmlString(): string {
        let res = '';
        res += `<eizv:EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor xmlns:eizv="${FISK_NS.eizv}" eizv:id="${xmlEscape(this._id)}">`;
        res += `<eizv:datumVrijemeSlanja>${xmlEscape(this.datumVrijemeSlanja)}</eizv:datumVrijemeSlanja>`;
        res += this.Odgovor.toXmlString();
        res += '</eizv:EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor>';
        return res;
    }

    static fromXmlElement(el: XmlElement): IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor {
        return {
            _id: getAttributeValue(el, "id", "eizv"),
            datumVrijemeSlanja: getElementContent(el, "eizv:datumVrijemeSlanja", FISK_NS, "datumVrijeme"),
            Odgovor: Odgovor.fromXmlElement(el)
        }
    }
}

