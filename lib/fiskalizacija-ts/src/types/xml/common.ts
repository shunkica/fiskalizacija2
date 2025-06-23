import {XmlSerializable} from "./util";

/**
 * Greška prilikom obrade zahtjeva
 */
export interface IGreska {
    /**
     * Šifra greške
     * @regex greska
     */
    sifra: string;
    /**
     * Redni broj zapisa u kojem je došlo do greške
     * @regex redniBroj
     */
    redniBrojZapisa: string;
    /**
     * Opis greške
     * @regex tekst1024
     */
    opis: string;
}

export type GreskaSerializable = XmlSerializable<IGreska>


/**
 * Odgovor Sustava za fiskalizaciju na poslani zahtjev. Odgovor opisuje uspješno zaprimanje (element
 * prihvacenZahtjev ima vrijednost true) ili neuspješno zaprimanje (element prihvacenZahtjev ima vrijednosti false)
 * u kojem slučaju element greska sadrži detalje s razlogom ne prihvaćanja zahtjeva.
 */
export interface IOdgovor {
    /**
     * Jedinstveni identifikator primljenog zahtjeva
     * @regex uuid
     */
    idZahtjeva: string;
    /**
     * Indikator prihvaćanja zahtjeva
     * @regex boolean
     */
    prihvacenZahtjev: boolean;
    /**
     * Detalji o grešci ako zahtjev nije prihvaćen
     */
    greska?: IGreska;

}

export type OdgovorSerializable = XmlSerializable<IOdgovor>

/**
 * Informacije o identifikatoru klasifikacije artikla.
 */
export interface IArtiklIdentifikatorKlasifikacija {
    /**
     * Vrijednost iz klasifikacije artikla po njegovom tipu ili prirodi.
     * @bt BT-158
     * @regex tekst10
     */
    identifikatorKlasifikacije: string;

    /**
     * Kod za klasifikaciju artikla po njegovom tipu ili prirodi po UNTDID 7143.
     * Identifikator sheme, označava klasifikaciju koja se koristi. Koristi se KPD klasifikacija, oznaka koja se unosi je 'CG'.
     * @regex klasifikacijaArtikla
     */
    identifikatorSheme: string;

    /**
     * Verzija sheme.
     * @regex tekst10
     */
    verzijaSheme?: string;
}

export type ArtiklIdentifikatorKlasifikacijaSerializable = XmlSerializable<IArtiklIdentifikatorKlasifikacija>

/**
 * Informacije o ukupnim novčanim iznosima za eRačun.
 */
export interface IDokumentUkupanIznos {
    /**
     * Zbroj svih neto iznosa stavki računa koji su navedene na računu.
     * @bt BT-106
     * @regex decimal2
     */
    neto: number;

    /**
     * Zbroj svih popusta na razini dokumenta na računu.
     * @bt BT-107
     * @regex decimal2
     */
    popust?: number;

    /**
     * Ukupan iznos na računu bez PDV-a.
     * @bt BT-109
     * @regex decimal2
     */
    iznosBezPdv: number;

    /**
     * Ukupni iznos PDVa za račun.
     * @bt BT-110
     * @regex decimal2
     */
    pdv: number;

    /**
     * Ukupni iznos računa s uključenim PDV-om.
     * @bt BT-112
     * @regex decimal2
     */
    iznosSPdv: number;

    /**
     * Zbroj iznosa koji su plaćeni unaprijed.
     * @bt BT-113
     * @regex decimal2
     */
    placeniIznos?: number;

    /**
     * Nepodmireni iznos za koji se zahtijeva plaćanje.
     * @bt BT-115
     * @regex decimal2
     */
    iznosKojiDospijevaZaPlacanje: number;
}

export type DokumentUkupanIznosSerializable = XmlSerializable<IDokumentUkupanIznos>

/**
 * Informacije o izdavatelju eRačuna
 * @bt BG-4
 */
export interface IIzdavatelj {
    /**
     * Puno ime pod kojim je izdavatelj registriran u nacionalnom registru pravnih osoba ili kao porezni obveznik ili na neki drugi način trguje kao osoba ili osobe.
     * @bt BT-27
     * @regex tekst500
     */
    ime: string;

    /**
     * OIB izdavatelja, dio identifikatora eRačuna.
     * @bt BT-31
     * @regex tekst20
     */
    oibPorezniBroj: string;
}

export type IzdavateljSerializable = XmlSerializable<IIzdavatelj>

/**
 * Informacije o plaćanjima
 * @bt BG-17
 */
export interface IPrijenosSredstava {
    /**
     * Jedinstveni identifikator financijskog platnog računa, kod pružatelja platnih usluga, na koji se plaćanje treba izvršiti, IBAN obavezno ako je kod tipa nacinPlacanja jednak 30 ili 58.
     * @bt BT-84
     * @regex tekst34
     */
    identifikatorRacunaZaPlacanje: string;

    /**
     * Naziv računa za plaćanje, kod pružatelja platnih usluga, na koji se plaćanje treba izvršiti.
     * @bt BT-85
     * @regex tekst35
     */
    nazivRacunaZaPlacanje?: string;

    /**
     * Identifikator pružatelja platnih usluga (npr. BIC ili nacionalni klirinški kod).
     * @bt BT-86
     * @regex tekst25
     */
    identifikatorPruzateljaPlatnihUsluga?: string;
}

export type PrijenosSredstavaSerializable = XmlSerializable<IPrijenosSredstava>

/**
 * Informacije o primatelju eRačuna
 * @bt BG-7
 */
export interface IPrimatelj {
    /**
     * Puno ime primatelja
     * @bt BT-44
     * @regex tekst500
     */
    ime: string;

    /**
     * Za porezne obveznike u RH je polje obavezno i izričito OIB
     * @bt BT-48
     * @regex tekst20
     */
    oibPorezniBroj: string;
}

export type PrimateljSerializable = XmlSerializable<IPrimatelj>

/**
 * Informacije o rekapitulaciji PDV-a po različitim kategorijama, stopama i razlozima izuzeća.
 * @bt BG-23
 */
export interface IRaspodjelaPdv {
    /**
     * Šifra kategorije PDV-a po UNCL5305.
     * @bt BT-118
     * @regex kategorijaPdv
     */
    kategorijaPdv: string;

    /**
     * Zbroj svih oporezivih iznosa koji podliježu određenom kodu kategorije PDV-a i stopi kategorije PDV-a.
     * @bt BT-116
     * @regex decimal2
     */
    oporeziviIznos: number;

    /**
     * Ukupni iznos PDV-a za pojedinu kategoriju PDV-a.
     * @bt BT-117
     * @regex decimal2
     */
    iznosPoreza: number;

    /**
     * Stopa PDV-a prikazana kao postotak koji se primjenjuje na relevantnu kategoriju PDV-a.
     * @bt BT-119
     */
    stopa?: number;

    /**
     * Šifra razloga za izuzeće iznosa od PDV-a po VATEX.
     * @bt BT-121
     * @regex izuzecePdv
     */
    razlogOslobodenja?: string;

    /**
     * Tekst razloga za izuzeće od PDV-a.
     * @bt BT-120
     * @regex tekst1024
     */
    tekstRazlogaOslobodenja?: string;
}

export type RaspodjelaPdvSerializable = XmlSerializable<IRaspodjelaPdv>
