# WIP

## DomiSMP

### Preduvjeti
- Za provođenje testiranja DomiSMP instanca mora biti javno dostupna na internetu, te mora biti postavljen MPS Endpoint URL na nju unutar portala za testiranje sukladnosti
- Morate posjedovati Demo certifikat izdan od Fine koji u DN ima `organizationIdentifier=HR<vas oib>`

### Postavljanje DomiSMP-a
1. Uvoz certifikata:
  - ~~Preuzeti `Fina Root CA` i `Fina RDC 2020` PEM certifikate te ih uvesti u `System Settings` > `Truststore` > `Add Certificate`~~
  - Postaviti svoje privatne certifikate (p12 izdan od Fine) u `System Settings` > `Keystore` > `Import keystore`
2. Kreiranje domene:
  - `System Settings` > `Domain` > `Create`
    - `Domain code`: bilo što, npr. `mpsdemo`
    - `Response signature`: odabrati certifikat uvezen u keystore u koraku 1
    - `Visibility of the domain`: `Public`
 - Odabrati kreiranu domenu iz liste te postaviti:
    - `Resource Types`: `edelivery-oasis-smp-1.0-servicegroup (smp-1)`
    - `Members`: `Invite member` - dodati korisnika sa `ADMIN` ulogom (npr. system korisnik)
    - ~~`SML Integration`~~ ( ! integracija nije podržana od strane PU, potrebno je dodavati participante "ručno" u AMS, vidi "create-participant.js" !)
      - ~~`SML domain`: `demo`~~
      - ~~`SML SMP identifier`: `MPS<OIB>`~~
      - ~~`SML Client Certificate Alias`: odabrati certifikat uvezen u keystore u koraku 1~~
      - ~~Nakon unošenja podataka kliknuti `Save` `i zatim `Register`~~ 
3. Kreiranje domene i grupe - `Edit Domains` > `Group` > `Create`
  - `Group name`: bilo što, npr. 'mps-demo-group'
  - `Group visibility`: `Public`
4. Kreiranje resursa (primatelja računa) - `Edit Groups` > `Resources` > `Create`.
  - Ovaj korak treba napraviti nakon što se na portalu za testiranje sukladnosti pokrene test. u \<oib primatelja\> unose se oib-ovi koji se dobiju klikom na `Generiraj` nakon pokretanja testa `MPS` > `Kreiraj` unutar portala za testiranje sukladnosti.
  - `Resource type`: `edelivery-oasis-smp-1.0-servicegroup`
  - `Resource identifier`: `9934:<oib primatelja>`
  - `Resource scheme`: `iso6523-actorid-upis`
  - `Resource visibility`: `Public`
5. Kreiranje podresursa (vrsta dokumenata) - `Edit Resources` > `Subresources` > `Create`
  - Za __SVAKI__ resource (primatelj računa) potrebno je dodati Invoice i CreditNote dokumente
  - Invoice:
    - `Subresource identifier`: `urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1`
    - `Subresource scheme`: `busdox-docid-qns`
  - CreditNote:
    - `Subresource identifier`: `urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2::CreditNote##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1`
    - `Subresource scheme`: `busdox-docid-qns`
6. Postavljanje subresource dokumenata
  - Svaki kreirani subresource dokument potrebno je urediti klikom na `Edit` te `New version`
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ServiceMetadata xmlns="http://docs.oasis-open.org/bdxr/ns/SMP/2016/05" xmlns:ns2="http://www.w3.org/2000/09/xmldsig#">
    <ServiceInformation>
        <ParticipantIdentifier scheme="${resource.identifier.scheme}">${resource.identifier.value}</ParticipantIdentifier>
        <DocumentIdentifier scheme="${subresource.identifier.scheme}">${subresource.identifier.value}</DocumentIdentifier>
        <ProcessList>
            <Process>
                <ProcessIdentifier scheme="cenbii-procid-ubl">urn:fdc:eracun.hr:poacc:en16931:any</ProcessIdentifier>
                <ServiceEndpointList>
                    <Endpoint transportProfile="eracun-transport-as4-v1_0">
                        <EndpointURI>[OVDJE STAVITI URL DO SVOJE PRISTUPNE TOČKE (domibus)]/services/msh</EndpointURI>
                        <Certificate>[OVDJE STAVITI SVOJ JAVNI CERTIFIKAT]</Certificate>
                        <ServiceDescription>Service description for partners </ServiceDescription>
                        <TechnicalContactUrl>www.best-page.eu</TechnicalContactUrl>
                    </Endpoint>
                </ServiceEndpointList>
            </Process>
        </ProcessList>
      <Extension>
        <ExtensionID>eRacunParticipantData</ExtensionID>
        <ex:HRMPS xmlns:ex="http://porezna-uprava.hr/mps/extension">
          <ex:ParticipantOIB>[OVDJE STAVITI OIB PRIMATELJA]</ex:ParticipantOIB>
          <ex:AccessPointOIB>[OVDJE STAVITI SVOJ OIB]</ex:AccessPointOIB>
        </ex:HRMPS >
      </Extension>
    </ServiceInformation>
</ServiceMetadata>

```
