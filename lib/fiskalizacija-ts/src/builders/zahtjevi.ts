import {IERacun, IEvidentirajERacunZahtjev, IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev, IEvidentirajNaplatuZahtjev, IEvidentirajOdbijanjeZahtjev, INaplata, IOdbijanje, IRacun} from "../types";

export function getEvidentirajERacunZahtjev(
    vrsta: "I" | "U",
    eracun: IERacun | IERacun[]
): IEvidentirajERacunZahtjev {
    return {
        _id: crypto.randomUUID(),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
            vrstaERacuna: vrsta
        },
        ERacun: Array.isArray(eracun) ? eracun : [eracun]
    };
}

export function getEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev(
    racun: IRacun | IRacun[]
): IEvidentirajIsporukuZaKojuNijeIzdanERacunZahtjev {
    return {
        _id: crypto.randomUUID(),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
            vrstaRacuna: "IR"
        },
        Racun: Array.isArray(racun) ? racun : [racun]
    };
}

export function getEvidentirajNaplatuZahtjev(
    naplata: INaplata | INaplata[]
): IEvidentirajNaplatuZahtjev {
    return {
        _id: crypto.randomUUID(),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString()
        },
        Naplata: Array.isArray(naplata) ? naplata : [naplata]
    };
}

export function getEvidentirajOdbijanjeZahtjev(
    odbijanje: IOdbijanje | IOdbijanje[],
): IEvidentirajOdbijanjeZahtjev {
    return {
        _id: crypto.randomUUID(),
        Zaglavlje: {
            datumVrijemeSlanja: new Date().toISOString(),
        },
        Odbijanje: Array.isArray(odbijanje) ? odbijanje : [odbijanje]
    };
}
