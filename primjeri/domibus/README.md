# Domibus

# Portovi

- `8081` - domibus instanca 1
- `8082` - domibus instanca 2
- `8083` - domismp
- `8084` - domisml

# URL-ovi

- `http://localhost:8081/domibus` - domibus instanca 1
- `http://localhost:8082/domibus` - domibus instanca 2
- `http://localhost:8083/smp/ui` - domismp
- `http://localhost:8084/bdmsl` - domisml

# Korisnički računi

- domibus - `admin` / `123456`
- domismp - `system` / `123456` | `user` / `123456`

# DDC (dynamic discovery client)

- https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/europa/ec/dynamic-discovery/dynamic-discovery-cli/3.0/dynamic-discovery-cli-3.0.jar

## Dynamic Discovery Client (DDC)

### Provjera NAPTR zapisa

Poziv:

```shell
java -jar ddc.jar -dns -rs urn:oasis:names:tc:ebcore:partyid-type:unregistered:ddc-webinar -ri 0088:participant2 -d test.acc.edelivery.tech.ec.europa.eu -t NAPTR
```

Vraća:

```text
UIBIUS6A4PXOXNOWGA2B3LCZG4KCECX26PYNPTCBF5IZCA7PJNNA.test.acc.edelivery.tech.ec.europa.eu.      60      IN      NAPTR   100 10 "U" "Meta:SMP" "!.*!https://smp-ext-acc.eusfx.ec.europa.eu/!" .
```

### Dohvaćanje ServiceGroup

Poziv:

```shell
java -jar ddc.jar -get -ri urn:oasis:names:tc:ebcore:partyid-type:unregistered:ddc-webinar -d test.acc.edelivery.tech.ec.europa.eu -o service-group.xml
```

Vraća ( u service-group.xml):

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ServiceGroup xmlns="http://docs.oasis-open.org/bdxr/ns/SMP/2016/05" xmlns:ns2="http://www.w3.org/2000/09/xmldsig#">
  <ParticipantIdentifier scheme="urn:oasis:names:tc:ebcore:partyid-type:unregistered:ddc-webinar">0088:participant2
  </ParticipantIdentifier>
  <ServiceMetadataReferenceCollection>
    <ServiceMetadataReference
        href="https://smp-ext-acc.eusfx.ec.europa.eu/urn%3Aoasis%3Anames%3Atc%3Aebcore%3Apartyid-type%3Aunregistered%3Addc-webinar%3A0088%3Aparticipant2/services/ddc-scheme-qns%3A%3Aurn%3Addc%3Ainvoice"/>
  </ServiceMetadataReferenceCollection>
</ServiceGroup>
```

### Dohvaćanje ServiceMetadata

Poziv:

```shell
java -jar ddc.jar -get -ri urn:oasis:names:tc:ebcore:partyid-type:unregistered:ddc-webinar:0088:participant2 -d test.acc.edelivery.tech.ec.europa.eu -si urn:ddc:invoice -ss ddc-scheme-qns -o service-metadata.xml
```

Vraća (u service-metadata.xml):

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<SignedServiceMetadata xmlns="http://docs.oasis-open.org/bdxr/ns/SMP/2016/05">
  <ServiceMetadata xmlns:ns2="http://www.w3.org/2000/09/xmldsig#">
    <ServiceInformation>
      <ParticipantIdentifier scheme="urn:oasis:names:tc:ebcore:partyid-type:unregistered:ddc-webinar">
        0088:participant2
      </ParticipantIdentifier>
      <DocumentIdentifier scheme="ddc-scheme-qns">urn:ddc:invoice</DocumentIdentifier>
      <ProcessList>
        <Process>
          <ProcessIdentifier scheme="dd-process-scheme">dd-process-value</ProcessIdentifier>
          <ServiceEndpointList>
            <Endpoint transportProfile="bdxr-transport-ebms3-as4-v1p0">
              <EndpointURI>http://localhost:8091/domibus/services/msh?domain=domain1</EndpointURI>
              <Certificate>
                ...
              </Certificate>
              <ServiceDescription>Service description for partners</ServiceDescription>
              <TechnicalContactUrl>www.best-page.eu</TechnicalContactUrl>
            </Endpoint>
          </ServiceEndpointList>
        </Process>
      </ProcessList>
    </ServiceInformation>
  </ServiceMetadata>
  <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
    <SignedInfo>
      <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
      <SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
      <Reference URI="">
        <Transforms>
          <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
        </Transforms>
        <DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
        <DigestValue>oHB+iRLke37vJXCZV8dKSeVh4TE3ZBJocWmfS8VJOXw=</DigestValue>
      </Reference>
    </SignedInfo>
    <SignatureValue>
      ...
    </SignatureValue>
    <KeyInfo>
      <X509Data>
        <X509SubjectName>CN=EUSEND_SMP_ACC,OU=EUSEND,OU=SMP_ACC,OU=CEF_eDelivery.europa.eu,O=eDelivery Support,C=BE
        </X509SubjectName>
        <X509Certificate>
          ...
        </X509Certificate>
      </X509Data>
    </KeyInfo>
  </Signature>
</SignedServiceMetadata>
```

# Generiranje ključeva i certifikata

## DomiSML

Potrebno generirati `encriptionKey` koji se koristi za enkripciju i dekripciju tajni.

Preuzeti i raspakirati bdmsl-webapp war datoteku (`jar -xf bdmsl-webapp.war`).

```shell
java -cp "WEB-INF/lib/*" eu.europa.ec.bdmsl.common.util.PrivateKeyGenerator encryptionPrivateKey.private
```

Korištenje enkripcijskog ključa za enkripciju lozinki:

```shell
java -cp "WEB-INF/lib/*" eu.europa.ec.bdmsl.common.util.EncryptPassword encryptionPrivateKey.private test123
````

Generiranje keystore i truststore datoteka (PKCS):

```shell
keytool -genkeypair -alias bdmsl -keyalg RSA -keystore keystore.p12 -storetype PKCS12 -storepass test123
keytool -exportcert -alias bdmsl -keystore keystore.p12 -storetype PKCS12 -file bdmsl.cer -storepass test123
keytool -importcert -alias bdmsl -file bdmsl.cer -keystore truststore.p12 -storetype PKCS12 -storepass test123
```

## DomiSML <-> BIND9

Generiranje TSIG ključeva koji omogućavaju DomiSML da mijenja DNS zapise.

```
tsig-keygen -a hmac-sha256 test.domisml.local.
```

Primjer:

```text
key "test.domisml.local." {
    algorithm hmac-sha256;
    secret "Reukm5R1cQqEu2RM7ig8lvpNrqFyagoHyYXZr7zeLnw=";
};
```

Postaviti key u `named.conf.local` na bind serveru i dodati ga u allow-update na odgovarajućem zapisu.

Za DomiSML potrebno

U DomiSML postaviti:
`dnsClient.TSIGEnabled=true`
`dnsClient.TSIGKeyName=test.domisml.local.`
`dnsClient.TSIGKeyValue=Reukm5R1cQqEu2RM7ig8lvpNrqFyagoHyYXZr7zeLnw=`
`dnsClient.TSIGAlgorithm=hmac-sha256`

## DomiSMP

Postaviti `encryptionKey` na isti način kao i u DomiSML. (samo što se u DomiSMP ovaj property zove `encryptionKey` a ne `encriptionKey` kao u DomiSML)

Generiranje keystore i truststore datoteka (PKCS):

```shell

keytool -genkeypair -alias domismp -keyalg RSA -keystore keystore.p12 -storetype PKCS12 -storepass test123
keytool -exportcert -alias domismp -keystore keystore.p12 -storetype PKCS12 -file domismp.cer -storepass test123
keytool -importcert -alias domismp -file domismp.cer -keystore truststore.p12 -storetype PKCS12 -storepass test123
```

Kreiranje domenskog ključa (eracun-testdomain) sa issuerom "domismp" i dodavanje u keystore i truststore:

```shell
key
```

Dodavanje domenskih ključeva u truststore DomiSML:

```shell
keytool -importcert -alias eracun-testdomain -file eracun-testdomain.cer -keystore ../../sml/security/truststore.p12 -storetype PKCS12 -storepass test123
```
                        
## DomiSMP <-> DomiSML

```shell
python3 create_smp.py --url "http://localhost:8084/edelivery-sml/manageservicemetadata" --smp-id domismp --logical-address http://domismp:8080/smp --physical-address 172.18.0.5 --client-cert-header "sno=1363701384833571773&subject=CN=SMP_TEST,OU=Dev,O=Company,L=City,ST=State,C=HR&validfrom=Jun 11 13:04:14 2025 CEST&validto=Jun 11 13:04:14 2056 CEST&issuer=CN=domismp-ca,OU=Dev,O=Company,L=City,ST=State,C=HR"
```

# Koraci

## 1. Registracija primatelja

- DomiSMP -> System Settings -> Domain -> SML integration -> SML Client Certificate Alias
- DomiSMP -> Administration -> Edit Groups -> Resources -> Create: Dodati grupu
- DomiSMP -> Administration -> Edit Resources -> Subresources -> Create: dodati vrste resursa koje se zaprimaju (npr
  Invoice, CreditNote)
- DomiSMP -> Administration -> Edit Resources -> Subresources -> Edit: postaviti ProcessIdentifier scheme i value,
  Certificate
