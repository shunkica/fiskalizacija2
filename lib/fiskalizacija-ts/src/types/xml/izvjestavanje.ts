import {IArtiklIdentifikatorKlasifikacija, IDokumentUkupanIznos, IIzdavatelj, IOdgovor, IPrijenosSredstava, IPrimatelj, IRaspodjelaPdv} from "./common";
import {XmlSerializable} from "./util";

/**
 * Zaglavlje sadrži osnovne informacije o zahtjevu, uključujući datum i vrijeme slanja.
 */
export interface IZaglavljeIzvjestavanje {
    /**
     * Datum i vrijeme slanja zahtjeva
     * @regex datumVrijemeDeci
     */
    datumVrijemeSlanja: string;
}

export type ZaglavljeIzvjestavanjeSerializable = XmlSerializable<IZaglavljeIzvjestavanje>;

/**
 * Zaglavlje za zahtjeve evidencije isporuke za koju nije izdan eRačun
 */
export interface IZaglavljeIsporuka {
    /**
     * Datum i vrijeme slanja zahtjeva
     * @regex datumVrijemeDeci
     */
    datumVrijemeSlanja: string;
    /**
     * Vrsta računa, IR
     * @regex vrstaERacuna
     */
    vrstaRacuna: string;
}

export type ZaglavljeIsporukaSerializable = XmlSerializable<IZaglavljeIsporuka>;

/**
 * Podaci o naplati eRačuna
 */
export interface INaplata {
    /**
     * Broj dokumenta eRačuna, dio identifikatora eRačuna (BT-1 iz UBL 2.1)
     * @bt BT-1
     * @regex tekst100
     */
    brojDokumenta: string;

    /**
     * Datum izdavanja eRačuna, dio identifikatora eRačuna (BT-2 iz UBL 2.1)
     * @bt BT-2
     * @regex datum
     */
    datumIzdavanja: string;

    /**
     * OIB ili porezni broj izdavatelja, dio identifikatora eRačuna (BT-31 iz UBL 2.1)
     * @bt BT-31
     * @regex tekst20
     */
    oibPorezniBrojIzdavatelja: string;

    /**
     * OIB ili porezni broj primatelja
     * @regex tekst20
     */
    oibPorezniBrojPrimatelja: string;

    /**
     * Datum naplate eRačuna
     * @regex datum
     */
    datumNaplate: string;

    /**
     * Iznos koji je naplaćen
     * @regex decimal2
     */
    naplaceniIznos: number;

    /**
     * Šifra načina plaćanja po UNCL4461
     * @regex nacinPlacanja
     */
    nacinPlacanja: string;
}

export type NaplataSerializable = XmlSerializable<INaplata>;

/**
 * Podaci o odbijanju eRačuna
 */
export interface IOdbijanje {
    /**
     * Broj dokumenta eRačuna, dio identifikatora eRačuna (BT-1 iz UBL 2.1)
     * @bt BT-1
     * @regex tekst100
     */
    brojDokumenta: string;

    /**
     * Datum izdavanja eRačuna, dio identifikatora eRačuna (BT-2 iz UBL 2.1)
     * @bt BT-2
     * @regex datum
     */
    datumIzdavanja: string;

    /**
     * OIB ili porezni broj izdavatelja, dio identifikatora eRačuna (BT-31 iz UBL 2.1)
     * @bt BT-31
     * @regex tekst20
     */
    oibPorezniBrojIzdavatelja: string;

    /**
     * OIB ili porezni broj primatelja
     * @regex tekst20
     */
    oibPorezniBrojPrimatelja: string;

    /**
     * Datum odbijanja eRačuna
     * @regex datum
     */
    datumOdbijanja: string;

    /**
     * Šifra vrste razloga odbijanja eRačuna
     * N - Neusklađenost podataka koji ne utječu na obračun poreza
     * U - Neusklađenost podataka koji utječu na obračun poreza
     * O - Ostalo
     * @regex razlogOdbijanja
     */
    vrstaRazlogaOdbijanja: string;

    /**
     * Razlog odbijanja eRačuna
     * @regex tekst1024
     */
    razlogOdbijanja: string;
}

export type OdbijanjeSerializable = XmlSerializable<IOdbijanje>;

/**
 * Informacije o jednom ili više prethodnih računa (BG-3 iz UBL 2.1)
 */
export interface IPrethodniRacun {
    /**
     * Broj dokumenta istog izdavatelja na koji se račun referencira (BT-25 iz UBL 2.1)
     * @bt BT-25
     * @regex tekst100
     */
    brojDokumenta: string;

    /**
     * Datum izdavanja prethodnog računa na koji se novi dokument referencira (BT-26 iz UBL 2.1)
     * @bt BT-26
     * @regex datum
     */
    datumIzdavanja: string;
}

export type PrethodniRacunSerializable = XmlSerializable<IPrethodniRacun>;

/**
 * Informacije o pojedinačnim stavkama računa
 */
export interface IStavkaRacuna {
    /**
     * Količina artikala (robe ili usluga) koje se obračunavaju na stavki računa (BT-129 iz UBL 2.1)
     * @bt BT-129
     */
    kolicina: number;

    /**
     * Jedinica mjere koja se primjenjuje na količinu fakturiranu na računu (BT-130 iz UBL 2.1)
     * @bt BT-130
     * @regex jedinicaMjere
     */
    jedinicaMjere: string;

    /**
     * Cijena artikla bez PDV-a, nakon oduzimanja popusta na cijenu artikla (BT-146 iz UBL 2.1)
     * @bt BT-146
     */
    artiklNetoCijena: number;

    /**
     * Broj jedinica artikla na koji se primjenjuje cijena (BT-149 iz UBL 2.1)
     * @bt BT-149
     */
    artiklOsnovnaKolicina?: number;

    /**
     * Šifra jedinica mjere koja se primjenjuje na osnovnu količinu za cijenu artikla. Iste vrijednosti kao i kod Jedinica mjere (BT-150 iz UBL 2.1)
     * @bt BT-150
     * @regex jedinicaMjere
     */
    artiklJedinicaMjereZaOsnovnuKolicinu?: string;

    /**
     * Šifra kategorije PDV-a za fakturirani artikl po UNCL5305 (BT-151 iz UBL 2.1)
     * @bt BT-151
     * @regex kategorijaPdv
     */
    artiklKategorijaPdv: string;

    /**
     * Stopa PDV-a prikazana u obliku postotka koji vrijedi za fakturirani artikl (BT-152 iz UBL 2.1)
     * @bt BT-152
     */
    artiklStopaPdv: number;

    /**
     * Naziv artikla (BT-153 iz UBL 2.1)
     * @bt BT-153
     * @regex tekst100
     */
    artiklNaziv: string;

    /**
     * CPA nomenklatura označava se oznakom 'CG'
     */
    ArtiklIdentifikatorKlasifikacija?: IArtiklIdentifikatorKlasifikacija[];
}

export type StavkaRacunaSerializable = XmlSerializable<IStavkaRacuna>;

/**
 * Podaci o računu
 */
export interface IRacun {
    /**
     * Broj dokumenta računa, dio identifikatora eRačuna (BT-1 iz UBL 2.1)
     * @bt BT-1
     * @regex tekst100
     */
    brojDokumenta: string;

    /**
     * Datum izdavanja računa, dio identifikatora eRačuna (BT-2 iz UBL 2.1)
     * @bt BT-2
     * @regex datum
     */
    datumIzdavanja: string;

    /**
     * Šifra vrste dokumenta računa, dio identifikatora eRačuna (BT-3 iz UBL 2.1)
     * @bt BT-3
     * @regex vrstaDokumenta
     */
    vrstaDokumenta: string;

    /**
     * Šifra valute po ISO4217 u kojoj se iskazuju svi iznosi na računu, osim za ukupni iznos PDV-a u računovodstvenoj valuti (BT-5 iz UBL 2.1)
     * @bt BT-5
     * @regex valuta
     */
    valutaRacuna: string;

    /**
     * Datum kada plaćanje dospijeva na naplatu (BT-9 iz UBL 2.1)
     * @bt BT-9
     * @regex datum
     */
    datumDospijecaPlacanja?: string;

    /**
     * Identifikator poslovnog procesa u kojem se obavlja transakcija, kako bi se kupcu omogućila obrada na odgovarajući način (BT-23 iz UBL 2.1)
     * @bt BT-23
     * @regex tekst100
     */
    vrstaPoslovnogProcesa: string;

    /**
     * Identifikacija ugovora koja mora biti jedinstvena u kontekstu specifičnog trgovinskog odnosa i za određeno razdoblje (BT-12 iz UBL 2.1)
     * @bt BT-12
     * @regex tekst100
     */
    referencaNaUgovor?: string;

    /**
     * Datum na koji se obavlja ili dovršava isporuke robe ili usluga (BT-72 iz UBL 2.1)
     * @bt BT-72
     * @regex datum
     */
    datumIsporuke?: string;

    /**
     * Informacije o jednom ili više prethodnih računa (BG-3 iz UBL 2.1)
     */
    PrethodniRacun?: IPrethodniRacun[];

    /**
     * Informacije o izdavatelju (BG-4 iz UBL 2.1)
     */
    Izdavatelj: IIzdavatelj;

    /**
     * Informacije o primatelju (BG-7 iz UBL 2.1)
     */
    Primatelj: IPrimatelj;

    /**
     * Informacije o virmanskim plaćanjima
     */
    PrijenosSredstava?: IPrijenosSredstava[];

    /**
     * Informacije o ukupnim novčanim iznosima za račun
     */
    DokumentUkupanIznos: IDokumentUkupanIznos;

    /**
     * Informacije o rekapitulaciji PDV-a po različitim kategorijama, stopama i razlozima izuzeća
     */
    RaspodjelaPdv: IRaspodjelaPdv[];

    /**
     * Informacije o pojedinačnim stavkama računa
     */
    StavkaRacuna: IStavkaRacuna[];

    /**
     * Indikator kopije računa koji pokazuje radi li se o kopiji računa (true) ili ne (false)
     * @regex ^(true|false)$
     */
    indikatorKopije: boolean;
}

export type RacunSerializable = XmlSerializable<IRacun>;

// Request and Response interfaces

/**
 * Zahtjev za evidenciju naplate eRačuna
 */
export interface IEvidentirajNaplatuZahtjev {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Zaglavlje zahtjeva
     */
    Zaglavlje: IZaglavljeIzvjestavanje;

    /**
     * Podaci o jednoj ili više naplata (maksimalno 100)
     */
    Naplata: INaplata[];
}

export type EvidentirajNaplatuZahtjevSerializable = XmlSerializable<IEvidentirajNaplatuZahtjev>;

/**
 * Odgovor na zahtjev za evidenciju naplate
 */
export interface IEvidentirajNaplatuOdgovor {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Odgovor na zahtjev
     */
    Odgovor: IOdgovor;
}

export type EvidentirajNaplatuOdgovorSerializable = XmlSerializable<IEvidentirajNaplatuOdgovor>;

/**
 * Zahtjev za evidenciju odbijanja eRačuna
 */
export interface IEvidentirajOdbijanjeZahtjev {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Zaglavlje zahtjeva
     */
    Zaglavlje: IZaglavljeIzvjestavanje;

    /**
     * Podaci o jednom ili više odbijanja (maksimalno 100)
     */
    Odbijanje: IOdbijanje[];
}

export type EvidentirajOdbijanjeZahtjevSerializable = XmlSerializable<IEvidentirajOdbijanjeZahtjev>;

/**
 * Odgovor na zahtjev za evidenciju odbijanja
 */
export interface IEvidentirajOdbijanjeOdgovor {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Datum i vrijeme slanja zahtjeva
     * @regex datumVrijemeDeci
     */
    datumVrijemeSlanja: string;

    /**
     * Odgovor na zahtjev
     */
    Odgovor: IOdgovor;
}

export type EvidentirajOdbijanjeOdgovorSerializable = XmlSerializable<IEvidentirajOdbijanjeOdgovor>;

/**
 * Zahtjev za evidenciju računa za koji nije izdan eRačun
 */
export interface IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Zaglavlje zahtjeva
     */
    Zaglavlje: IZaglavljeIsporuka;

    /**
     * Podaci o jednom ili više računa (maksimalno 100)
     */
    Racun: IRacun[];
}

export type EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjevSerializable = XmlSerializable<IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev>;

/**
 * Odgovor na zahtjev za evidenciju eRačuna
 */
export interface IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor {
    /**
     * Atribut korišten prilikom kreiranja i provjere digitalnog potpisa
     */
    id: string;

    /**
     * Datum i vrijeme slanja odgovora
     * @regex datumVrijemeDeci
     */
    datumVrijemeSlanja: string;

    /**
     * Odgovor na zahtjev
     */
    Odgovor: IOdgovor;
}

export type EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovorSerializable = XmlSerializable<IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor>;
