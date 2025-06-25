import {
    EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovorSerializable,
    EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjevSerializable,
    EvidentirajNaplatuOdgovorSerializable,
    EvidentirajNaplatuZahtjevSerializable,
    EvidentirajOdbijanjeOdgovorSerializable,
    EvidentirajOdbijanjeZahtjevSerializable, GreskaSerializable,
    IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor,
    IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev,
    IEvidentirajNaplatuOdgovor,
    IEvidentirajNaplatuZahtjev,
    IEvidentirajOdbijanjeOdgovor,
    IEvidentirajOdbijanjeZahtjev,
    IGreska, INaplata, IOdbijanje, IOdgovor, IRacun, IZaglavljeIsporuka, IZaglavljeIzvjestavanje, NaplataSerializable, OdbijanjeSerializable,
    OdgovorSerializable, RacunSerializable, ZaglavljeIsporukaSerializable, ZaglavljeIzvjestavanjeSerializable
} from "../../types";

export class EvidentirajNaplatuZahtjev implements EvidentirajNaplatuZahtjevSerializable {
    Naplata: Naplata[];
    Zaglavlje: ZaglavljeIzvjestavanje;
    id: string;

    constructor(props: IEvidentirajNaplatuZahtjev) {
        this.Naplata = props.Naplata.map(i => new Naplata(i));
        this.Zaglavlje = new ZaglavljeIzvjestavanje(props.Zaglavlje);
        this.id = props.id;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

export class EvidentirajOdbijanjeZahtjev implements EvidentirajOdbijanjeZahtjevSerializable {
    Odbijanje: Odbijanje[];
    Zaglavlje: ZaglavljeIzvjestavanje;
    id: string;

    constructor(props: IEvidentirajOdbijanjeZahtjev) {
        this.Odbijanje = props.Odbijanje.map(i => new Odbijanje(i));
        this.Zaglavlje = new ZaglavljeIzvjestavanje(props.Zaglavlje);
        this.id = props.id;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }
}

export class EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev implements EvidentirajIsporukuZaKojuNijeIzdanERacunZahtjevSerializable {
    Racun: Racun[];
    Zaglavlje: ZaglavljeIsporuka;
    id: string;

    constructor(props: IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev) {
        this.Racun = props.Racun.map(i => new Racun(i));
        this.Zaglavlje = new ZaglavljeIsporuka(props.Zaglavlje);
        this.id = props.id;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

export class ZaglavljeIzvjestavanje implements ZaglavljeIzvjestavanjeSerializable {
    datumVrijemeSlanja: string;

    constructor(props: IZaglavljeIzvjestavanje) {
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }

}

export class Naplata implements NaplataSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    datumNaplate: string;
    nacinPlacanja: string;
    naplaceniIznos: number;
    oibPorezniBrojIzdavatelja: string;
    oibPorezniBrojPrimatelja: string;

    constructor(props: INaplata) {
        this.brojDokumenta = props.brojDokumenta;
        this.datumIzdavanja = props.datumIzdavanja;
        this.datumNaplate = props.datumNaplate;
        this.nacinPlacanja = props.nacinPlacanja;
        this.naplaceniIznos = props.naplaceniIznos;
        this.oibPorezniBrojIzdavatelja = props.oibPorezniBrojIzdavatelja;
        this.oibPorezniBrojPrimatelja = props.oibPorezniBrojPrimatelja;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }
}

export class Odbijanje implements OdbijanjeSerializable {
    brojDokumenta: string;
    datumIzdavanja: string;
    datumOdbijanja: string;
    oibPorezniBrojIzdavatelja: string;
    oibPorezniBrojPrimatelja: string;
    razlogOdbijanja: string;
    vrstaRazlogaOdbijanja: string;

    constructor(props: IOdbijanje) {
        this.datumIzdavanja = props.datumIzdavanja;
        this.brojDokumenta = props.brojDokumenta;
        this.datumOdbijanja = props.datumOdbijanja;
        this.oibPorezniBrojIzdavatelja = props.oibPorezniBrojIzdavatelja;
        this.oibPorezniBrojPrimatelja = props.oibPorezniBrojPrimatelja;
        this.razlogOdbijanja = props.razlogOdbijanja;
        this.vrstaRazlogaOdbijanja = props.vrstaRazlogaOdbijanja;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

import {DokumentUkupanIznos, Izdavatelj, PrijenosSredstava, Primatelj, RaspodjelaPdv, PrethodniERacun, StavkaERacuna} from "./fiskalizacija";

export class PrethodniRacun extends PrethodniERacun {
}

export class StavkaRacuna extends StavkaERacuna {
}

export class Racun implements RacunSerializable {
    DokumentUkupanIznos: DokumentUkupanIznos;
    Izdavatelj: Izdavatelj;
    PrethodniRacun?: PrethodniRacun[];
    PrijenosSredstava?: PrijenosSredstava[];
    Primatelj: Primatelj;
    RaspodjelaPdv: RaspodjelaPdv[];
    StavkaRacuna: StavkaRacuna[];
    brojDokumenta: string;
    datumDospijecaPlacanja?: string;
    datumIsporuke?: string;
    datumIzdavanja: string;
    indikatorKopije: boolean;
    referencaNaUgovor?: string;
    valutaRacuna: string;
    vrstaDokumenta: string;
    vrstaPoslovnogProcesa: string;

    constructor(props: IRacun) {
        this.DokumentUkupanIznos = new DokumentUkupanIznos(props.DokumentUkupanIznos);
        this.Izdavatelj = new Izdavatelj(props.Izdavatelj);
        if (props.PrethodniRacun)
            this.PrethodniRacun = props.PrethodniRacun.map(i => new PrethodniRacun(i));
        if (props.PrijenosSredstava)
            this.PrijenosSredstava = props.PrijenosSredstava.map(i => new PrijenosSredstava(i));
        this.Primatelj = new Primatelj(props.Primatelj);
        this.RaspodjelaPdv = props.RaspodjelaPdv.map(i => new RaspodjelaPdv(i));
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
        throw new Error("Method not implemented.");
    }

}

export class EvidentirajNaplatuOdgovor implements EvidentirajNaplatuOdgovorSerializable {
    Odgovor: IzvjestavanjeOdgovor;
    id: string;

    constructor(props: IEvidentirajNaplatuOdgovor) {
        this.Odgovor = new IzvjestavanjeOdgovor(props.Odgovor);
        this.id = props.id;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

export class EvidentirajOdbijanjeOdgovor implements EvidentirajOdbijanjeOdgovorSerializable {
    Odgovor: IOdgovor;
    datumVrijemeSlanja: string;
    id: string;

    constructor(props: IEvidentirajOdbijanjeOdgovor) {
        this.Odgovor = new IzvjestavanjeOdgovor(props.Odgovor);
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
        this.id = props.id;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }
}

export class EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor implements EvidentirajIsporukuZaKojuNijeIzdanERacunOdgovorSerializable {
    id: string;
    datumVrijemeSlanja: string;
    Odgovor: IOdgovor;

    constructor(props: IEvidentirajIsporukuZaKojuNijeIzdanERacunOdgovor) {
        this.id = props.id;
        this.datumVrijemeSlanja = props.datumVrijemeSlanja;
        this.Odgovor = new IzvjestavanjeOdgovor(props.Odgovor);
    }


    toXmlString(): string {
        throw new Error("Method not implemented.");
    }
}

export class IzvjestavanjeOdgovor implements OdgovorSerializable {
    idZahtjeva: string;
    prihvacenZahtjev: boolean;
    greska?: IzvjestavanjeGreska | undefined;

    constructor(props: IOdgovor) {
        this.idZahtjeva = props.idZahtjeva;
        this.prihvacenZahtjev = props.prihvacenZahtjev;
        if (props.greska) this.greska = new IzvjestavanjeGreska(props.greska)
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}

export class IzvjestavanjeGreska implements GreskaSerializable {
    opis: string;
    redniBrojZapisa: string;
    sifra: string;

    constructor(props: IGreska) {
        this.opis = props.opis;
        this.redniBrojZapisa = props.redniBrojZapisa;
        this.sifra = props.sifra;
    }

    toXmlString(): string {
        throw new Error("Method not implemented.");
    }

}
