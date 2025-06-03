# Verzija 1.1 (2025-05-09)

| ID    | Pojam                                             | Min | Max | Invoice                                                  | CreditNote                                               |
|-------|---------------------------------------------------|-----|-----|----------------------------------------------------------|----------------------------------------------------------|
| BG-1  | Napomena za račun                                 | 0   | n   |                                                          |                                                          |
| BG-2  | Procesna kontrola                                 | 1   | 1   |                                                          |                                                          |
| BG-3  | Referenca prethodnog računa                       | 0   | n   | /cac:BillingReference                                    | /cac:BillingReference                                    |
| BG-4  | Prodavatelj                                       | 1   | 1   | /cac:AccountingSupplierParty                             | /cac:AccountingSupplierParty                             |
| BG-5  | Poštanska adresa prodavatelja                     | 1   | 1   | /cac:AccountingSupplierParty/cac:Party/cac:PostalAddress | /cac:AccountingSupplierParty/cac:Party/cac:PostalAddress |
| BG-6  | Kontakt prodavatelja                              | 0   | 1   | /cac:AccountingSupplierParty/cac:Party/cac:Contact       | /cac:AccountingSupplierParty/cac:Party/cac:Contact       |
| BG-7  | Kupac                                             | 1   | 1   | /cac:AccountingCustomerParty                             | /cac:AccountingCustomerParty                             |
| BG-8  | Poštanska adresa kupca                            | 1   | 1   | /cac:AccountingCustomerParty/cac:Party/cac:PostalAddress | /cac:AccountingCustomerParty/cac:Party/cac:PostalAddress |
| BG-9  | Kontaktni podaci kupca                            | 0   | 1   | /cac:AccountingCustomerParty/cac:Party/cac:Contact       | /cac:AccountingCustomerParty/cac:Party/cac:Contact       |
| BG-10 | Primatelj plaćanja                                | 0   | 1   | /cac:PayeeParty                                          | /cac:PayeeParty                                          |
| BG-11 | Porezni zastupnik prodavatelja                    | 0   | 1   | /cac:TaxRepresentativeParty                              | /cac:TaxRepresentativeParty                              |
| BG-12 | Poštanska adresa poreznog zastupnika prodavatelja | 1   | 1   | /cac:TaxRepresentativeParty/cac:PostalAddress            | /cac:TaxRepresentativeParty/cac:PostalAddress            |
| BG-13 | Podaci o isporuci                                 | 0   | 1   | /cac:Delivery                                            | /cac:Delivery                                            |
| BG-14 | Obračunsko razdoblje                              | 0   | 1   | /cac:InvoicePeriod                                       | /cac:InvoicePeriod                                       |
| BG-15 | Adresa isporuke                                   | 0   | 1   | /cac:Delivery/cac:DeliveryLocation/cac:Address           | /cac:Delivery/cac:DeliveryLocation/cac:Address           |
| BG-16 | Upute za plaćanje                                 | 0   | 1   | /cac:PaymentMeans                                        | /cac:PaymentMeans                                        |
| BG-17 | Kreditni transfer                                 | 0   | n   | /cac:PaymentMeans/cac:PayeeFinancialAccount              | /cac:PaymentMeans/cac:PayeeFinancialAccount              |
| BG-18 | Podaci o platnoj kartici                          | 0   | 1   | /cac:PaymentMeans/cac:CardAccount                        | /cac:PaymentMeans/cac:CardAccount                        |
| BG-19 | Izravno terećenje                                 | 0   | 1   | /cac:PaymentMeans/cac:PaymentMandate                     | /cac:PaymentMeans/cac:PaymentMandate                     |
| BG-20 | Popusti na razini dokumenta                       | 0   | n   | /cac:AllowanceCharge                                     | /cac:AllowanceCharge                                     |
| BG-21 | Troškovi na razini dokumenta                      | 0   | n   | /cac:AllowanceCharge                                     | /cac:AllowanceCharge                                     |
| BG-22 | Ukupni iznosi na razini dokumenta                 | 1   | 1   | /cac:LegalMonetaryTotal                                  | /cac:LegalMonetaryTotal                                  |
| BG-23 | Raspodjela PDV-a                                  | 1   | n   | /cac:TaxTotal/cac:TaxSubtotal                            | /cac:TaxTotal/cac:TaxSubtotal                            |
| BG-24 | Dodatni popratni dokumenti                        | 0   | n   | /cac:AdditionalDocumentReference                         | /cac:AdditionalDocumentReference                         |
| BG-25 | Stavka računa                                     | 1   | n   | /cac:InvoiceLine                                         | /cac:CreditNoteLine                                      |
| BG-26 | Obračunsko razdoblje stavke računa                | 0   | 1   | /cac:InvoiceLine/cac:InvoicePeriod                       | /cac:CreditNoteLine/cac:InvoicePeriod                    |
| BG-27 | Popusti na stavci računa                          | 0   | n   | /cac:InvoiceLine/cac:AllowanceCharge                     | /cac:CreditNoteLine/cac:AllowanceCharge                  |
| BG-28 | Troškovi na stavci računa                         | 0   | n   | /cac:InvoiceLine/cac:AllowanceCharge                     | /cac:CreditNoteLine/cac:AllowanceCharge                  |
| BG-29 | Pojedinosti cijene                                | 1   | 1   | /cac:InvoiceLine/cac:Price                               | /cac:CreditNoteLine/cac:Price                            |
| BG-30 | Podaci o PDV-u stavke računa                      | 1   | 1   | /cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory      | /cac:CreditNoteLine/cac:Item/cac:ClassifiedTaxCategory   |
| BG-31 | Podaci o artiklu                                  | 1   | 1   | /cac:InvoiceLine/cac:Item                                | /cac:CreditNoteLine/cac:Item                             |
| BG-32 | Atributi artikla                                  | 0   | n   | /cac:InvoiceLine/cac:Item/cac:AdditionalItemProperty     | /cac:CreditNoteLine/cac:Item/cac:AdditionalItemProperty  |
