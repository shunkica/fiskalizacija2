import {IBusinessTermXpath} from "../../types";

export const BUSINESS_GROUPS: Record<string, IBusinessTermXpath> = {
  "BG-1": {
    id: "BG-1",
    name: "Napomena za račun",
    xpath: {
        Invoice: [],
        CreditNote: []
    }
},
  "BG-2": {
    id: "BG-2",
    name: "Procesna kontrola",
    xpath: {
        Invoice: [],
        CreditNote: []
    }
},
  "BG-3": {
    id: "BG-3",
    name: "Referenca prethodnog računa",
    xpath: {
        Invoice: [
            "cac:BillingReference"
        ],
        CreditNote: [
            "cac:BillingReference"
        ]
    }
},
  "BG-4": {
    id: "BG-4",
    name: "Prodavatelj",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty"
        ]
    }
},
  "BG-5": {
    id: "BG-5",
    name: "Poštanska adresa prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:PostalAddress"
        ]
    }
},
  "BG-6": {
    id: "BG-6",
    name: "Kontakt prodavatelja",
    xpath: {
        Invoice: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact"
        ],
        CreditNote: [
            "cac:AccountingSupplierParty",
            "cac:Party",
            "cac:Contact"
        ]
    }
},
  "BG-7": {
    id: "BG-7",
    name: "Kupac",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty"
        ]
    }
},
  "BG-8": {
    id: "BG-8",
    name: "Poštanska adresa kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:PostalAddress"
        ]
    }
},
  "BG-9": {
    id: "BG-9",
    name: "Kontaktni podaci kupca",
    xpath: {
        Invoice: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact"
        ],
        CreditNote: [
            "cac:AccountingCustomerParty",
            "cac:Party",
            "cac:Contact"
        ]
    }
},
  "BG-10": {
    id: "BG-10",
    name: "Primatelj plaćanja",
    xpath: {
        Invoice: [
            "cac:PayeeParty"
        ],
        CreditNote: [
            "cac:PayeeParty"
        ]
    }
},
  "BG-11": {
    id: "BG-11",
    name: "Porezni zastupnik prodavatelja",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty"
        ]
    }
},
  "BG-12": {
    id: "BG-12",
    name: "Poštanska adresa poreznog zastupnika prodavatelja",
    xpath: {
        Invoice: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress"
        ],
        CreditNote: [
            "cac:TaxRepresentativeParty",
            "cac:PostalAddress"
        ]
    }
},
  "BG-13": {
    id: "BG-13",
    name: "Podaci o isporuci",
    xpath: {
        Invoice: [
            "cac:Delivery"
        ],
        CreditNote: [
            "cac:Delivery"
        ]
    }
},
  "BG-14": {
    id: "BG-14",
    name: "Obračunsko razdoblje",
    xpath: {
        Invoice: [
            "cac:InvoicePeriod"
        ],
        CreditNote: [
            "cac:InvoicePeriod"
        ]
    }
},
  "BG-15": {
    id: "BG-15",
    name: "Adresa isporuke",
    xpath: {
        Invoice: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address"
        ],
        CreditNote: [
            "cac:Delivery",
            "cac:DeliveryLocation",
            "cac:Address"
        ]
    }
},
  "BG-16": {
    id: "BG-16",
    name: "Upute za plaćanje",
    xpath: {
        Invoice: [
            "cac:PaymentMeans"
        ],
        CreditNote: [
            "cac:PaymentMeans"
        ]
    }
},
  "BG-17": {
    id: "BG-17",
    name: "Kreditni transfer",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PayeeFinancialAccount"
        ]
    }
},
  "BG-18": {
    id: "BG-18",
    name: "Podaci o platnoj kartici",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:CardAccount"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:CardAccount"
        ]
    }
},
  "BG-19": {
    id: "BG-19",
    name: "Izravno terećenje",
    xpath: {
        Invoice: [
            "cac:PaymentMeans",
            "cac:PaymentMandate"
        ],
        CreditNote: [
            "cac:PaymentMeans",
            "cac:PaymentMandate"
        ]
    }
},
  "BG-20": {
    id: "BG-20",
    name: "Popusti na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge"
        ],
        CreditNote: [
            "cac:AllowanceCharge"
        ]
    }
},
  "BG-21": {
    id: "BG-21",
    name: "Troškovi na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:AllowanceCharge"
        ],
        CreditNote: [
            "cac:AllowanceCharge"
        ]
    }
},
  "BG-22": {
    id: "BG-22",
    name: "Ukupni iznosi na razini dokumenta",
    xpath: {
        Invoice: [
            "cac:LegalMonetaryTotal"
        ],
        CreditNote: [
            "cac:LegalMonetaryTotal"
        ]
    }
},
  "BG-23": {
    id: "BG-23",
    name: "Raspodjela PDV-a",
    xpath: {
        Invoice: [
            "cac:TaxTotal",
            "cac:TaxSubtotal"
        ],
        CreditNote: [
            "cac:TaxTotal",
            "cac:TaxSubtotal"
        ]
    }
},
  "BG-24": {
    id: "BG-24",
    name: "Dodatni popratni dokumenti",
    xpath: {
        Invoice: [
            "cac:AdditionalDocumentReference"
        ],
        CreditNote: [
            "cac:AdditionalDocumentReference"
        ]
    }
},
  "BG-25": {
    id: "BG-25",
    name: "Stavka računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine"
        ],
        CreditNote: [
            "cac:CreditNoteLine"
        ]
    }
},
  "BG-26": {
    id: "BG-26",
    name: "Obračunsko razdoblje stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:InvoicePeriod"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:InvoicePeriod"
        ]
    }
},
  "BG-27": {
    id: "BG-27",
    name: "Popusti na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge"
        ]
    }
},
  "BG-28": {
    id: "BG-28",
    name: "Troškovi na stavci računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:AllowanceCharge"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:AllowanceCharge"
        ]
    }
},
  "BG-29": {
    id: "BG-29",
    name: "Pojedinosti cijene",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Price"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Price"
        ]
    }
},
  "BG-30": {
    id: "BG-30",
    name: "Podaci o PDV-u stavke računa",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:ClassifiedTaxCategory"
        ]
    }
},
  "BG-31": {
    id: "BG-31",
    name: "Podaci o artiklu",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item"
        ]
    }
},
  "BG-32": {
    id: "BG-32",
    name: "Atributi artikla",
    xpath: {
        Invoice: [
            "cac:InvoiceLine",
            "cac:Item",
            "cac:AdditionalItemProperty"
        ],
        CreditNote: [
            "cac:CreditNoteLine",
            "cac:Item",
            "cac:AdditionalItemProperty"
        ]
    }
},
  "HR-BG-1": {
    id: "HR-BG-1",
    name: "HR proširenja",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data"
        ]
    }
},
  "HR-BG-2": {
    id: "HR-BG-2",
    name: "HR Raspodjela PDV",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRTaxTotal",
            "hrextac:HRTaxSubtotal"
        ]
    }
},
  "HR-BG-3": {
    id: "HR-BG-3",
    name: "HR ukupni iznosi",
    xpath: {
        Invoice: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal"
        ],
        CreditNote: [
            "ext:Extensions",
            "ext:Extension",
            "ext:ExtensionContent",
            "hrextac:HRFISK20Data",
            "hrextac:HRLegalMonetaryTotal"
        ]
    }
},
};
