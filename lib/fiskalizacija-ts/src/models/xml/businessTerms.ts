import {IBusinessTermXpath} from "../../types";

export const BUSINESS_TERMS: Record<string, IBusinessTermXpath> = {
  "BT-1": {
    id: "BT-1",
    name: "Broj računa",
    xpath: {
        Invoice: [
            "cbc:ID"
        ],
        CreditNote: [
            "cbc:ID"
        ]
    }
},
  "BT-2": {
    id: "BT-2",
    name: "Datum izdavanja računa",
    xpath: {
        Invoice: [
            "cbc:IssueDate"
        ],
        CreditNote: [
            "cbc:IssueDate"
        ]
    }
},
  "BT-3": {
    id: "BT-3",
    name: "Kod tipa računa",
    xpath: {
        Invoice: [
            "cbc:InvoiceTypeCode"
        ],
        CreditNote: [
            "cbc:CreditNoteTypeCode"
        ]
    }
},
  "BT-5": {
    id: "BT-5",
    name: "Kod valute računa",
    xpath: {
        Invoice: [
            "cbc:DocumentCurrencyCode"
        ],
        CreditNote: [
            "cbc:DocumentCurrencyCode"
        ]
    }
},
  "BT-6": {
    id: "BT-6",
    name: "Kod računovodstvene valute za PDV",
    xpath: {
        Invoice: [
            "cbc:TaxCurrencyCode"
        ],
        CreditNote: [
            "cbc:TaxCurrencyCode"
        ]
    }
},
  "BT-7": {
    id: "BT-7",
    name: "Datum nastanka obveze poreza na dodanu vrijednost",
    xpath: {
        Invoice: [
            "cbc:TaxPointDate"
        ],
        CreditNote: [
            "cbc:TaxPointDate"
        ]
    }
},
  "BT-8": {
    id: "BT-8",
    name: "Kod datuma nastanka obveze poreza na dodanu vrijednost",
    xpath: {
        Invoice: [
            "cac:InvoicePeriod",
            "cbc:DescriptionCode"
        ],
        CreditNote: [
            "cac:InvoicePeriod",
            "cbc:DescriptionCode"
        ]
    }
},
  "BT-9": {
    id: "BT-9",
    name: "Datum dospijeća plaćanja",
    xpath: {
        Invoice: [
            "cbc:DueDate"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cbc:PaymentDueDate"
        ]
    }
},
  "BT-10": {
    id: "BT-10",
    name: "Interni identifikator kupca",
    xpath: {
        Invoice: [
            "cbc:BuyerReference"
        ],
        CreditNote: [
            "cbc:BuyerReference"
        ]
    }
},
  "BT-11": {
    id: "BT-11",
    name: "Referenca projekta",
    xpath: {
        Invoice: [
            "cac:ProjectReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-12": {
    id: "BT-12",
    name: "Referenca ugovora",
    xpath: {
        Invoice: [
            "cac:ContractDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:ContractDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-13": {
    id: "BT-13",
    name: "Referenca narudžbenice",
    xpath: {
        Invoice: [
            "cac:OrderReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:OrderReference",
            "cbc:ID"
        ]
    }
},
  "BT-14": {
    id: "BT-14",
    name: "Referenca naloga za isporuku (eng. Sales order)",
    xpath: {
        Invoice: [
            "cac:OrderReference",
            "cbc:SalesOrderID"
        ],
        CreditNote: [
            "cac:OrderReference",
            "cbc:SalesOrderID"
        ]
    }
},
  "BT-15": {
    id: "BT-15",
    name: "Referenca primke",
    xpath: {
        Invoice: [
            "cac:ReceiptDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:ReceiptDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-16": {
    id: "BT-16",
    name: "Referenca otpremnice",
    xpath: {
        Invoice: [
            "cac:DespatchDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:DespatchDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-17": {
    id: "BT-17",
    name: "Referenca javnog nadmetanja ili grupe/lota",
    xpath: {
        Invoice: [
            "cac:OriginatorDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:OriginatorDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-18": {
    id: "BT-18",
    name: "Identifikator fakturiranog objekta",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-19": {
    id: "BT-19",
    name: "Računovodstvena oznaka kupca",
    xpath: {
        Invoice: [
            "cbc:AccountingCost"
        ],
        CreditNote: [
            "cbc:AccountingCost"
        ]
    }
},
  "BT-20": {
    id: "BT-20",
    name: "Uvjeti plaćanja",
    xpath: {
        Invoice: [
            "cac:PaymentTerms",
            "cbc:Note"
        ],
        CreditNote: [
            "cac:PaymentTerms",
            "cbc:Note"
        ]
    }
},
  "BT-21": {
    id: "BT-21",
    name: "Kod predmeta napomene za račun",
    xpath: {
        Invoice: [
            "cbc:Note"
        ],
        CreditNote: [
            "cbc:Note"
        ]
    }
},
  "BT-22": {
    id: "BT-22",
    name: "Napomena za račun",
    xpath: {
        Invoice: [
            "cbc:Note"
        ],
        CreditNote: [
            "cbc:Note"
        ]
    }
},
  "BT-23": {
    id: "BT-23",
    name: "Tip poslovnoga procesa",
    xpath: {
        Invoice: [
            "cbc:ProfileID"
        ],
        CreditNote: [
            "cbc:ProfileID"
        ]
    }
},
  "BT-24": {
    id: "BT-24",
    name: "Identifikator specifikacije",
    xpath: {
        Invoice: [
            "cbc:CustomizationID"
        ],
        CreditNote: [
            "cbc:CustomizationID"
        ]
    }
},
  "BT-25": {
    id: "BT-25",
    name: "Referenca prethodnog računa",
    xpath: {
        Invoice: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-26": {
    id: "BT-26",
    name: "Datum izdavanja prethodnog računa",
    xpath: {
        Invoice: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:IssueDate"
        ],
        CreditNote: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:IssueDate"
        ]
    }
},
  "BT-27": {
    id: "BT-27",
    name: "Ime prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:RegistrationName"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:RegistrationName"
        ]
    }
},
  "BT-28": {
    id: "BT-28",
    name: "Trgovački naziv prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyName",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyName",
            "cbc:Name"
        ]
    }
},
  "BT-29": {
    id: "BT-29",
    name: "Identifikator prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-30": {
    id: "BT-30",
    name: "Identifikator pravne registracije prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ]
    }
},
  "BT-31": {
    id: "BT-31",
    name: "Identifikator prodavatelja za PDV",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ]
    }
},
  "BT-32": {
    id: "BT-32",
    name: "Identifikator porezne registracije prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ]
    }
},
  "BT-33": {
    id: "BT-33",
    name: "Dodatni pravni podaci prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyLegalForm"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyLegalForm"
        ]
    }
},
  "BT-34": {
    id: "BT-34",
    name: "Elektronička adresa prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cbc:EndpointID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cbc:EndpointID"
        ]
    }
},
  "BT-35": {
    id: "BT-35",
    name: "1. redak adrese prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:StreetName"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:StreetName"
        ]
    }
},
  "BT-36": {
    id: "BT-36",
    name: "2. redak adrese prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ]
    }
},
  "BT-37": {
    id: "BT-37",
    name: "Grad prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CityName"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CityName"
        ]
    }
},
  "BT-38": {
    id: "BT-38",
    name: "Poštanski broj prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ]
    }
},
  "BT-39": {
    id: "BT-39",
    name: "Oznaka pokrajine države prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ]
    }
},
  "BT-40": {
    id: "BT-40",
    name: "Kod države prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ]
    }
},
  "BT-41": {
    id: "BT-41",
    name: "Kontaktna točka prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Name"
        ]
    }
},
  "BT-42": {
    id: "BT-42",
    name: "Broj telefona za kontakt prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Telephone"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Telephone"
        ]
    }
},
  "BT-43": {
    id: "BT-43",
    name: "Adresa e-pošte za kontakt prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:ElectronicMail"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact",
            "cbc:ElectronicMail"
        ]
    }
},
  "BT-44": {
    id: "BT-44",
    name: "Ime kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:RegistrationName"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:RegistrationName"
        ]
    }
},
  "BT-45": {
    id: "BT-45",
    name: "Trgovački naziv kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyName",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyName",
            "cbc:Name"
        ]
    }
},
  "BT-46": {
    id: "BT-46",
    name: "Identifikator kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-47": {
    id: "BT-47",
    name: "Identifikator pravne registracije kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ]
    }
},
  "BT-48": {
    id: "BT-48",
    name: "Identifikator kupca za PDV",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ]
    }
},
  "BT-49": {
    id: "BT-49",
    name: "Elektronička adresa kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cbc:EndpointID"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cbc:EndpointID"
        ]
    }
},
  "BT-50": {
    id: "BT-50",
    name: "Redak adrese kupca 1",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:StreetName"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:StreetName"
        ]
    }
},
  "BT-51": {
    id: "BT-51",
    name: "Redak adrese kupca 2",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ]
    }
},
  "BT-52": {
    id: "BT-52",
    name: "Grad kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CityName"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CityName"
        ]
    }
},
  "BT-53": {
    id: "BT-53",
    name: "Poštanski broj kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ]
    }
},
  "BT-54": {
    id: "BT-54",
    name: "Županija kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ]
    }
},
  "BT-55": {
    id: "BT-55",
    name: "Šifra države kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ]
    }
},
  "BT-56": {
    id: "BT-56",
    name: "Broj telefona za kontakt kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Name"
        ]
    }
},
  "BT-57": {
    id: "BT-57",
    name: "Telefonski broj kontakta kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Telephone"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:Telephone"
        ]
    }
},
  "BT-58": {
    id: "BT-58",
    name: "Adresa e-pošte za kontakt kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:ElectronicMail"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact",
            "cbc:ElectronicMail"
        ]
    }
},
  "BT-59": {
    id: "BT-59",
    name: "Ime primatelja plaćanja",
    xpath: {
        Invoice: [
            "cac:PayeeParty",
            "cac:PartyName",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:PayeeParty",
            "cac:PartyName",
            "cbc:Name"
        ]
    }
},
  "BT-60": {
    id: "BT-60",
    name: "Identifikator primatelja plaćanja",
    xpath: {
        Invoice: [
            "cac:PayeeParty",
            "cac:PartyIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:PayeeParty",
            "cac:PartyIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-61": {
    id: "BT-61",
    name: "Identifikator pravne registracije primatelja plaćanja",
    xpath: {
        Invoice: [
            "cac:PayeeParty",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:PayeeParty",
            "cac:PartyLegalEntity",
            "cbc:CompanyID"
        ]
    }
},
  "BT-62": {
    id: "BT-62",
    name: "Ime poreznog zastupnika prodavatelja",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PartyName",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PartyName",
            "cbc:Name"
        ]
    }
},
  "BT-63": {
    id: "BT-63",
    name: "Identifikator za PDV poreznog zastupnika prodavatelja",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PartyTaxScheme",
            "cbc:CompanyID"
        ]
    }
},
  "BT-64": {
    id: "BT-64",
    name: "1. redak adrese poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:StreetName"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:StreetName"
        ]
    }
},
  "BT-65": {
    id: "BT-65",
    name: "2. redak adrese poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:AdditionalStreetName"
        ]
    }
},
  "BT-66": {
    id: "BT-66",
    name: "Grad poreznog zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:CityName"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:CityName"
        ]
    }
},
  "BT-67": {
    id: "BT-67",
    name: "Poštanski broj poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:PostalZone"
        ]
    }
},
  "BT-68": {
    id: "BT-68",
    name: "Pokrajina poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cbc:CountrySubentity"
        ]
    }
},
  "BT-69": {
    id: "BT-69",
    name: "Kod države poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cac:Country",
            "cbc:IdentificationCode"
        ]
    }
},
  "BT-70": {
    id: "BT-70",
    name: "Ime strane primatelja isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryParty",
            "cac:PartyName",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryParty",
            "cac:PartyName",
            "cbc:Name"
        ]
    }
},
  "BT-71": {
    id: "BT-71",
    name: "Identifikator lokacije isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cbc:ID"
        ]
    }
},
  "BT-72": {
    id: "BT-72",
    name: "Stvarni datum isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cbc:ActualDeliveryDate"
        ],
        CreditNote: [
            "cac:Delivery",
            "cbc:ActualDeliveryDate"
        ]
    }
},
  "BT-73": {
    id: "BT-73",
    name: "Početni datum obračunskog razdoblja",
    xpath: {
        Invoice: [
            "cac:InvoicePeriod",
            "cbc:StartDate"
        ],
        CreditNote: [
            "cac:InvoicePeriod",
            "cbc:StartDate"
        ]
    }
},
  "BT-74": {
    id: "BT-74",
    name: "Završni datum obračunskog razdoblja",
    xpath: {
        Invoice: [
            "cac:InvoicePeriod",
            "cbc:EndDate"
        ],
        CreditNote: [
            "cac:InvoicePeriod",
            "cbc:EndDate"
        ]
    }
},
  "BT-75": {
    id: "BT-75",
    name: "1. redak adrese isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:StreetName"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:StreetName"
        ]
    }
},
  "BT-76": {
    id: "BT-76",
    name: "2. redak adrese isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:AdditionalStreetName"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:AdditionalStreetName"
        ]
    }
},
  "BT-77": {
    id: "BT-77",
    name: "Grad isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:CityName"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:CityName"
        ]
    }
},
  "BT-78": {
    id: "BT-78",
    name: "Poštanski broj isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:PostalZone"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:PostalZone"
        ]
    }
},
  "BT-79": {
    id: "BT-79",
    name: "Pokrajina države isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:CountrySubentity"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cbc:CountrySubentity"
        ]
    }
},
  "BT-80": {
    id: "BT-80",
    name: "Kod države isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cac:Country",
            "cbc:IdentificationCode"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cac:Country",
            "cbc:IdentificationCode"
        ]
    }
},
  "BT-81": {
    id: "BT-81",
    name: "Kod načina plaćanja",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cbc:PaymentMeansCode"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cbc:PaymentMeansCode"
        ]
    }
},
  "BT-82": {
    id: "BT-82",
    name: "Tekst načina plaćanja",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cbc:InstructionNote"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cbc:InstructionNote"
        ]
    }
},
  "BT-83": {
    id: "BT-83",
    name: "Podaci o doznaci",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cbc:PaymentID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cbc:PaymentID"
        ]
    }
},
  "BT-84": {
    id: "BT-84",
    name: "Identifikator računa za plaćanje",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cbc:ID"
        ]
    }
},
  "BT-85": {
    id: "BT-85",
    name: "Naziv računa za plaćanje",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cbc:Name"
        ]
    }
},
  "BT-86": {
    id: "BT-86",
    name: "Identifikator pružanja platnih usluga",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cac:FinancialInstitutionBranch",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount",
            "cac:FinancialInstitutionBranch",
            "cbc:ID"
        ]
    }
},
  "BT-87": {
    id: "BT-87",
    name: "Primarni broj računa platne kartice",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:CardAccount",
            "cbc:PrimaryAccountNumberID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:CardAccount",
            "cbc:PrimaryAccountNumberID"
        ]
    }
},
  "BT-88": {
    id: "BT-88",
    name: "Ime imatelja platne kartice",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:CardAccount",
            "cbc:HolderName"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:CardAccount",
            "cbc:HolderName"
        ]
    }
},
  "BT-89": {
    id: "BT-89",
    name: "Identifikator reference ovlaštenja",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PaymentMandate",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PaymentMandate",
            "cbc:ID"
        ]
    }
},
  "BT-90": {
    id: "BT-90",
    name: "Bankovni identifikator vjerovnika",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID",
            "cac:PayeeParty",
            "cac:PartyIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PartyIdentification",
            "cbc:ID",
            "cac:PayeeParty",
            "cac:PartyIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-91": {
    id: "BT-91",
    name: "Identifikator računa za terećenje",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PaymentMandate",
            "cac:PayerFinancialAccount",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PaymentMandate",
            "cac:PayerFinancialAccount",
            "cbc:ID"
        ]
    }
},
  "BT-92": {
    id: "BT-92",
    name: "Iznos popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:Amount"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:Amount"
        ]
    }
},
  "BT-93": {
    id: "BT-93",
    name: "Osnovica popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ]
    }
},
  "BT-94": {
    id: "BT-94",
    name: "Postotak popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ]
    }
},
  "BT-95": {
    id: "BT-95",
    name: "Kod kategorije PDV-a za popust na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:ID"
        ]
    }
},
  "BT-96": {
    id: "BT-96",
    name: "Stopa PDV-a popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Percent"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Percent"
        ]
    }
},
  "BT-97": {
    id: "BT-97",
    name: "Razlog popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ]
    }
},
  "BT-98": {
    id: "BT-98",
    name: "Kod razloga popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ]
    }
},
  "BT-99": {
    id: "BT-99",
    name: "Iznos troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:Amount"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:Amount"
        ]
    }
},
  "BT-100": {
    id: "BT-100",
    name: "Osnovica troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ]
    }
},
  "BT-101": {
    id: "BT-101",
    name: "Postotak troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ]
    }
},
  "BT-102": {
    id: "BT-102",
    name: "Kod kategorije PDV-a troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:ID"
        ]
    }
},
  "BT-103": {
    id: "BT-103",
    name: "Stopa PDV-a troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Percent"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Percent"
        ]
    }
},
  "BT-104": {
    id: "BT-104",
    name: "Razlog troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ]
    }
},
  "BT-105": {
    id: "BT-105",
    name: "Kod razloga troška na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ]
    }
},
  "BT-106": {
    id: "BT-106",
    name: "Zbroj neto iznosa stavki računa",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:LineExtensionAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:LineExtensionAmount"
        ]
    }
},
  "BT-107": {
    id: "BT-107",
    name: "Zbroj popusta na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:AllowanceTotalAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:AllowanceTotalAmount"
        ]
    }
},
  "BT-108": {
    id: "BT-108",
    name: "Zbroj troškova na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:ChargeTotalAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:ChargeTotalAmount"
        ]
    }
},
  "BT-109": {
    id: "BT-109",
    name: "Ukupni iznos računa bez PDV-a",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:TaxExclusiveAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:TaxExclusiveAmount"
        ]
    }
},
  "BT-110": {
    id: "BT-110",
    name: "Ukupni iznos PDV-a za račun",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cbc:TaxAmount"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cbc:TaxAmount"
        ]
    }
},
  "BT-111": {
    id: "BT-111",
    name: "Ukupni iznos PDV-a za račun u računovodstvenoj valuti",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cbc:TaxAmount"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cbc:TaxAmount"
        ]
    }
},
  "BT-112": {
    id: "BT-112",
    name: "Ukupni iznos računa s PDV-om",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:TaxInclusiveAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:TaxInclusiveAmount"
        ]
    }
},
  "BT-113": {
    id: "BT-113",
    name: "Plaćen iznos",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:PrepaidAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:PrepaidAmount"
        ]
    }
},
  "BT-114": {
    id: "BT-114",
    name: "Iznos zaokruživanja",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:PayableRoundingAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:PayableRoundingAmount"
        ]
    }
},
  "BT-115": {
    id: "BT-115",
    name: "Iznos koji dospijeva na plaćanje",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal",
            "cbc:PayableAmount"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal",
            "cbc:PayableAmount"
        ]
    }
},
  "BT-116": {
    id: "BT-116",
    name: "Oporezivi iznos kategorije PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cbc:TaxableAmount"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cbc:TaxableAmount"
        ]
    }
},
  "BT-117": {
    id: "BT-117",
    name: "Iznos poreza kategorije PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cbc:TaxAmount"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cbc:TaxAmount"
        ]
    }
},
  "BT-118": {
    id: "BT-118",
    name: "Kod kategorije PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:ID"
        ]
    }
},
  "BT-119": {
    id: "BT-119",
    name: "Stopa kategorije PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:Percent"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:Percent"
        ]
    }
},
  "BT-120": {
    id: "BT-120",
    name: "Tekst razloga za oslobođenje od PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ]
    }
},
  "BT-121": {
    id: "BT-121",
    name: "Kod razloga za oslobođenje od PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ]
    }
},
  "BT-122": {
    id: "BT-122",
    name: "Referenca popratnog dokumenta",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cbc:ID"
        ]
    }
},
  "BT-123": {
    id: "BT-123",
    name: "Opis popratnog dokumenta",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference",
            "cbc:DocumentDescription"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cbc:DocumentDescription"
        ]
    }
},
  "BT-124": {
    id: "BT-124",
    name: "Lokacija vanjskog dokumenta",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference",
            "cac:Attachment",
            "cac:ExternalReference",
            "cbc:URI"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cac:Attachment",
            "cac:ExternalReference",
            "cbc:URI"
        ]
    }
},
  "BT-125": {
    id: "BT-125",
    name: "Priloženi dokument",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference",
            "cac:Attachment",
            "cbc:EmbeddedDocumentBinaryObject"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference",
            "cac:Attachment",
            "cbc:EmbeddedDocumentBinaryObject"
        ]
    }
},
  "BT-126": {
    id: "BT-126",
    name: "Identifikator stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:ID"
        ]
    }
},
  "BT-127": {
    id: "BT-127",
    name: "Napomena stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:Note"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:Note"
        ]
    }
},
  "BT-128": {
    id: "BT-128",
    name: "Identifikator objekta stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:DocumentReference",
            "cbc:DocumentTypeCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:DocumentReference",
            "cbc:DocumentTypeCode"
        ]
    }
},
  "BT-129": {
    id: "BT-129",
    name: "Obračunata količina",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:InvoicedQuantity"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:CreditedQuantity"
        ]
    }
},
  "BT-130": {
    id: "BT-130",
    name: "Kod jedinice mjere obračunate količine",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:InvoicedQuantity",
            "@unitCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:CreditedQuantity",
            "@unitCode"
        ]
    }
},
  "BT-131": {
    id: "BT-131",
    name: "Neto iznos stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:LineExtensionAmount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:LineExtensionAmount"
        ]
    }
},
  "BT-132": {
    id: "BT-132",
    name: "Referencirana referenca stavke narudžbenice",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:OrderLineReference",
            "cbc:LineID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:OrderLineReference",
            "cbc:LineID"
        ]
    }
},
  "BT-133": {
    id: "BT-133",
    name: "Računovodstvena oznaka kupca na stavci računa (mjesto troška)",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cbc:AccountingCost"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cbc:AccountingCost"
        ]
    }
},
  "BT-134": {
    id: "BT-134",
    name: "Početni datum obračunskog razdoblja stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:InvoicePeriod",
            "cbc:StartDate"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:InvoicePeriod",
            "cbc:StartDate"
        ]
    }
},
  "BT-135": {
    id: "BT-135",
    name: "Završni datum obračunskog razdoblja stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:InvoicePeriod",
            "cbc:EndDate"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:InvoicePeriod",
            "cbc:EndDate"
        ]
    }
},
  "BT-136": {
    id: "BT-136",
    name: "Iznos popusta na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ]
    }
},
  "BT-137": {
    id: "BT-137",
    name: "Osnovica iznosa popusta na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ]
    }
},
  "BT-138": {
    id: "BT-138",
    name: "Postotak popusta na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ]
    }
},
  "BT-139": {
    id: "BT-139",
    name: "Razlog popusta na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ]
    }
},
  "BT-140": {
    id: "BT-140",
    name: "Kod razloga popusta na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ]
    }
},
  "BT-141": {
    id: "BT-141",
    name: "Iznos troška na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ]
    }
},
  "BT-142": {
    id: "BT-142",
    name: "Osnovica iznosa troška na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ]
    }
},
  "BT-143": {
    id: "BT-143",
    name: "Postotak troška na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:MultiplierFactorNumeric"
        ]
    }
},
  "BT-144": {
    id: "BT-144",
    name: "Razlog troška na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReason"
        ]
    }
},
  "BT-145": {
    id: "BT-145",
    name: "Kod razloga za trošak na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge",
            "cbc:AllowanceChargeReasonCode"
        ]
    }
},
  "BT-146": {
    id: "BT-146",
    name: "Neto cijena artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price",
            "cbc:PriceAmount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price",
            "cbc:PriceAmount"
        ]
    }
},
  "BT-147": {
    id: "BT-147",
    name: "Popust na cijenu artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price",
            "cac:AllowanceCharge",
            "cbc:Amount"
        ]
    }
},
  "BT-148": {
    id: "BT-148",
    name: "Bruto cijena artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price",
            "cac:AllowanceCharge",
            "cbc:BaseAmount"
        ]
    }
},
  "BT-149": {
    id: "BT-149",
    name: "Jedinična količina za cijenu artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price",
            "cbc:BaseQuantity"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price",
            "cbc:BaseQuantity"
        ]
    }
},
  "BT-150": {
    id: "BT-150",
    name: "Kod jedinice mjere za jediničnu količinu za cijenu artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price",
            "cbc:BaseQuantity",
            "@unitCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price",
            "cbc:BaseQuantity",
            "@unitCode"
        ]
    }
},
  "BT-151": {
    id: "BT-151",
    name: "Kod kategorije PDV-a stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:ID"
        ]
    }
},
  "BT-152": {
    id: "BT-152",
    name: "Stopa PDV-a stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:Percent"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:Percent"
        ]
    }
},
  "BT-153": {
    id: "BT-153",
    name: "Naziv artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cbc:Name"
        ]
    }
},
  "BT-154": {
    id: "BT-154",
    name: "Opis artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cbc:Description"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cbc:Description"
        ]
    }
},
  "BT-155": {
    id: "BT-155",
    name: "Prodavateljev identifikator artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:SellersItemIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:SellersItemIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-156": {
    id: "BT-156",
    name: "Kupčev identifikator artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:BuyersItemIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:BuyersItemIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-157": {
    id: "BT-157",
    name: "Standardni identifikator artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:StandardItemIdentification",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:StandardItemIdentification",
            "cbc:ID"
        ]
    }
},
  "BT-158": {
    id: "BT-158",
    name: "Identifikator klasifikacije artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:CommodityClassification",
            "cbc:ItemClassificationCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:CommodityClassification",
            "cbc:ItemClassificationCode"
        ]
    }
},
  "BT-159": {
    id: "BT-159",
    name: "Zemlja podrijetla artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:OriginCountry",
            "cbc:IdentificationCode"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:OriginCountry",
            "cbc:IdentificationCode"
        ]
    }
},
  "BT-160": {
    id: "BT-160",
    name: "Ime atributa artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:AdditionalItemProperty",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:AdditionalItemProperty",
            "cbc:Name"
        ]
    }
},
  "BT-161": {
    id: "BT-161",
    name: "Vrijednost atributa artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:AdditionalItemProperty",
            "cbc:Value"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:AdditionalItemProperty",
            "cbc:Value"
        ]
    }
},
  "BT-162": {
    id: "BT-162",
    name: "3. redak adrese prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ]
    }
},
  "BT-163": {
    id: "BT-163",
    name: "Redak adrese kupca 3",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ]
    }
},
  "BT-164": {
    id: "BT-164",
    name: "3. redak adrese poreznoga zastupnika",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress",
            "cac:AddressLine",
            "cbc:Line"
        ]
    }
},
  "BT-165": {
    id: "BT-165",
    name: "3. redak adrese isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cac:AddressLine",
            "cbc:Line"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address",
            "cac:AddressLine",
            "cbc:Line"
        ]
    }
},
  "HR-BT-1": {
    id: "HR-BT-1",
    name: "Indikator kopije računa",
    xpath: {
        Invoice: [
            "cbc:CopyIndicator"
        ],
        CreditNote: [
            "cbc:CopyIndicator"
        ]
    }
},
  "HR-BT-2": {
    id: "HR-BT-2",
    name: "Vrijeme izdavanja računa",
    xpath: {
        Invoice: [
            "cbc:IssueTime"
        ],
        CreditNote: [
            "cbc:IssueTime"
        ]
    }
},
  "HR-BT-3": {
    id: "HR-BT-3",
    name: "Opis prethodnog računa",
    xpath: {
        Invoice: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:DocumentDescription"
        ],
        CreditNote: [
            "cac:BillingReference",
            "cac:InvoiceDocumentReference",
            "cbc:DocumentDescription"
        ]
    }
},
  "HR-BT-4": {
    id: "HR-BT-4",
    name: "Oznaka operatera",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:SellerContact",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:SellerContact",
            "cbc:Name"
        ]
    }
},
  "HR-BT-5": {
    id: "HR-BT-5",
    name: "OIB operatera",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:SellerContact",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:SellerContact",
            "cbc:ID"
        ]
    }
},
  "HR-BT-6": {
    id: "HR-BT-6",
    name: "HR Oznaka porezne kategorije",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:Name"
        ]
    }
},
  "HR-BT-7": {
    id: "HR-BT-7",
    name: "Razlog oslobođenja PDV-a",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ]
    }
},
  "HR-BT-8": {
    id: "HR-BT-8",
    name: "Kod oslobođenja od PDV-a",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ],
        CreditNote: [
            "cac:AllowanceCharge",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ]
    }
},
  "HR-BT-9": {
    id: "HR-BT-9",
    name: "Referenca narudžbenice na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:OrderLineReference",
            "cac:OrderReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:OrderLineReference",
            "cac:OrderReference",
            "cbc:ID"
        ]
    }
},
  "HR-BT-10": {
    id: "HR-BT-10",
    name: "Referenca otpremnice na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:DespatchLineReference",
            "cac:DocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:DespatchLineReference",
            "cac:DocumentReference",
            "cbc:ID"
        ]
    }
},
  "HR-BT-11": {
    id: "HR-BT-11",
    name: "Referenca primke na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:ReceiptLineReference",
            "cac:DocumentReference",
            "cbc:ID"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:ReceiptLineReference",
            "cac:DocumentReference",
            "cbc:ID"
        ]
    }
},
  "HR-BT-12": {
    id: "HR-BT-12",
    name: "Oznaka porezne kategorije artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:Name"
        ],
        CreditNote: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:Name"
        ]
    }
},
  "HR-BT-13": {
    id: "HR-BT-13",
    name: "Razlog oslobođenja od PDV-a stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:TaxExemptionReason"
        ],
        CreditNote: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:TaxExemptionReason"
        ]
    }
},
  "HR-BT-14": {
    id: "HR-BT-14",
    name: "Kod razloga oslobođenja od PDV-a stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:TaxExemptionReasonCode"
        ],
        CreditNote: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory",
            "cbc:TaxExemptionReasonCode"
        ]
    }
},
  "HR-BT-15": {
    id: "HR-BT-15",
    name: "Obračun PDV-a po naplaćenoj naknadi",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20data",
            "hrextac:HRObracunPDVPoNaplati"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRObracunPDVPoNaplati"
        ]
    }
},
  "HR-BT-16": {
    id: "HR-BT-16",
    name: "HR iznos osnovice kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cbc:TaxableAmount"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cbc:TaxableAmount"
        ]
    }
},
  "HR-BT-17": {
    id: "HR-BT-17",
    name: "HR iznos kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cbc:TaxAmount"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxSubtotal",
            "cbc:TaxAmount"
        ]
    }
},
  "HR-BT-18": {
    id: "HR-BT-18",
    name: "HR kod kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:ID"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:ID"
        ]
    }
},
  "HR-BT-19": {
    id: "HR-BT-19",
    name: "HR stopa kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:Percent"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:Percent"
        ]
    }
},
  "HR-BT-20": {
    id: "HR-BT-20",
    name: "HR tekst razloga oslobođenja kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReason"
        ]
    }
},
  "HR-BT-21": {
    id: "HR-BT-21",
    name: "HR kod razloga oslobođenja kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:TaxExemptionReasonCode"
        ]
    }
},
  "HR-BT-22": {
    id: "HR-BT-22",
    name: "HR Oznaka kategorije PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:Name"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal",
            "cac:TaxCategory",
            "cbc:Name"
        ]
    }
},
  "HR-BT-23": {
    id: "HR-BT-23",
    name: "HR iznos osnovice za PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal",
            "hrextac:HRTaxExclusiveAmount"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal",
            "hrextac:HRTaxExclusiveAmount"
        ]
    }
},
  "HR-BT-24": {
    id: "HR-BT-24",
    name: "HR Neoporezivi iznos",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal",
            "cbc:OutOfScopeOfVATAmount"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal",
            "cbc:OutOfScopeOfVATAmount"
        ]
    }
},
  "HR-BT-25": {
    id: "HR-BT-25",
    name: "HR ukupni iznos PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "cbc:TaxAmount"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "cbc:TaxAmount"
        ]
    }
},
};
