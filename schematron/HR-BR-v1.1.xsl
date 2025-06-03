<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
               xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
               xmlns:cn="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"
               xmlns:error="https://doi.org/10.5281/zenodo.1495494#error"
               xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
               xmlns:hrextac="urn:mfin.gov.hr:schemas:UBL-2:1"
               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:sch="http://purl.oclc.org/dsdl/schematron"
               xmlns:schxslt="https://doi.org/10.5281/zenodo.1495494"
               xmlns:schxslt-api="https://doi.org/10.5281/zenodo.1495494#api"
               xmlns:ubl="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
               xmlns:xs="http://www.w3.org/2001/XMLSchema"
               xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
               version="2.0">
   <rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:dct="http://purl.org/dc/terms/"
                    xmlns:skos="http://www.w3.org/2004/02/skos/core#">
      <dct:creator>
         <dct:Agent>
            <skos:prefLabel>SchXslt/1.10.1 SAXON/HE 12.7</skos:prefLabel>
            <schxslt.compile.typed-variables xmlns="https://doi.org/10.5281/zenodo.1495494#">true</schxslt.compile.typed-variables>
         </dct:Agent>
      </dct:creator>
      <dct:created>2025-06-03T14:06:54.481282881+02:00</dct:created>
   </rdf:Description>
   <xsl:output indent="yes"/>
   <xsl:param name="schxslt.validate.initial-document-uri" as="xs:string?"/>
   <xsl:template name="schxslt.validate">
      <xsl:apply-templates select="document($schxslt.validate.initial-document-uri)"/>
   </xsl:template>
   <xsl:template match="root()">
      <xsl:param name="schxslt.validate.recursive-call"
                 as="xs:boolean"
                 select="false()"/>
      <xsl:choose>
         <xsl:when test="not($schxslt.validate.recursive-call) and (normalize-space($schxslt.validate.initial-document-uri) != '')">
            <xsl:apply-templates select="document($schxslt.validate.initial-document-uri)">
               <xsl:with-param name="schxslt.validate.recursive-call"
                               as="xs:boolean"
                               select="true()"/>
            </xsl:apply-templates>
         </xsl:when>
         <xsl:otherwise>
            <xsl:variable name="metadata" as="element()?">
               <svrl:metadata xmlns:dct="http://purl.org/dc/terms/"
                              xmlns:skos="http://www.w3.org/2004/02/skos/core#"
                              xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <dct:creator>
                     <dct:Agent>
                        <skos:prefLabel>
                           <xsl:value-of separator="/"
                                         select="(system-property('xsl:product-name'), system-property('xsl:product-version'))"/>
                        </skos:prefLabel>
                     </dct:Agent>
                  </dct:creator>
                  <dct:created>
                     <xsl:value-of select="current-dateTime()"/>
                  </dct:created>
                  <dct:source>
                     <rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/">
                        <dct:creator>
                           <dct:Agent>
                              <skos:prefLabel>SchXslt/1.10.1 SAXON/HE 12.7</skos:prefLabel>
                              <schxslt.compile.typed-variables xmlns="https://doi.org/10.5281/zenodo.1495494#">true</schxslt.compile.typed-variables>
                           </dct:Agent>
                        </dct:creator>
                        <dct:created>2025-06-03T14:06:54.481282881+02:00</dct:created>
                     </rdf:Description>
                  </dct:source>
               </svrl:metadata>
            </xsl:variable>
            <xsl:variable name="report" as="element(schxslt:report)">
               <schxslt:report>
                  <xsl:call-template name="d7e23"/>
               </schxslt:report>
            </xsl:variable>
            <xsl:variable name="schxslt:report" as="node()*">
               <xsl:sequence select="$metadata"/>
               <xsl:for-each select="$report/schxslt:document">
                  <xsl:for-each select="schxslt:pattern">
                     <xsl:sequence select="node()"/>
                     <xsl:sequence select="../schxslt:rule[@pattern = current()/@id]/node()"/>
                  </xsl:for-each>
               </xsl:for-each>
            </xsl:variable>
            <svrl:schematron-output xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                    title="Fiskalizacija 2.0 - Hrvatska poslovna pravila za UBL">
               <svrl:ns-prefix-in-attribute-values prefix="cbc"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="cac"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="cn"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="ubl"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="ext"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="hrextac" uri="urn:mfin.gov.hr:schemas:UBL-2:1"/>
               <xsl:sequence select="$schxslt:report"/>
            </svrl:schematron-output>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="text() | @*" mode="#all" priority="-10"/>
   <xsl:template match="/" mode="#all" priority="-10">
      <xsl:apply-templates mode="#current" select="node()"/>
   </xsl:template>
   <xsl:template match="*" mode="#all" priority="-10">
      <xsl:apply-templates mode="#current" select="@*"/>
      <xsl:apply-templates mode="#current" select="node()"/>
   </xsl:template>
   <xsl:template name="d7e23">
      <schxslt:document>
         <schxslt:pattern id="d7e23">
            <xsl:if test="exists(base-uri(root()))">
               <xsl:attribute name="documents" select="base-uri(root())"/>
            </xsl:if>
            <xsl:for-each select="root()">
               <svrl:active-pattern xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                    name="HR-Model"
                                    id="HR-Model">
                  <xsl:attribute name="documents" select="base-uri(.)"/>
               </svrl:active-pattern>
            </xsl:for-each>
         </schxslt:pattern>
         <xsl:apply-templates mode="d7e23" select="root()"/>
      </schxslt:document>
   </xsl:template>
   <xsl:template match="/ubl:Invoice | /cn:CreditNote" priority="1" mode="d7e23">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e23']">
            <schxslt:rule pattern="d7e23">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "/ubl:Invoice | /cn:CreditNote" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl:Invoice | /cn:CreditNote</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:suppressed-rule>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="$schxslt:patterns-matched"/>
            </xsl:next-match>
         </xsl:when>
         <xsl:otherwise>
            <schxslt:rule pattern="d7e23">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl:Invoice | /cn:CreditNote</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(not(matches(cbc:ID, '\s')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-1">
                     <xsl:attribute name="test">not(matches(cbc:ID, '\s'))</xsl:attribute>
                     <svrl:text>
        [HR-BR-1] Broj računa (BT-1) ne smije sadržavati bjeline (whitespace znakove).
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cbc:IssueTime and normalize-space(cbc:IssueTime) != '')">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-2">
                     <xsl:attribute name="test">cbc:IssueTime and normalize-space(cbc:IssueTime) != ''</xsl:attribute>
                     <svrl:text>
        [HR-BR-2] Račun mora imati vrijeme izdavanja računa (HR-BT-2).
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:LegalMonetaryTotal/cbc:PayableAmount &gt; 0) or (cbc:DueDate and normalize-space(cbc:DueDate) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-4(1)">
                     <xsl:attribute name="test">not(cac:LegalMonetaryTotal/cbc:PayableAmount &gt; 0) or (cbc:DueDate and normalize-space(cbc:DueDate) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-4] U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9) mora biti naveden.
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cbc:ProfileID and (matches(cbc:ProfileID, '^P([1-9]|1[0-2])$') or matches(cbc:ProfileID, '^P99:.+$')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-4(2)">
                     <xsl:attribute name="test">cbc:ProfileID and (matches(cbc:ProfileID, '^P([1-9]|1[0-2])$') or matches(cbc:ProfileID, '^P99:.+$'))</xsl:attribute>
                     <svrl:text>
        [HR-BR-4] Oznaka procesa (BT-23) MORA biti navedena. Koriste se vrijednosti P1-P12 ili P99:Oznaka kupca iz Tablice 4 Tipovi poslovnog procesa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cbc:CustomizationID and contains(cbc:CustomizationID, 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-5">
                     <xsl:attribute name="test">cbc:CustomizationID and contains(cbc:CustomizationID, 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0')</xsl:attribute>
                     <svrl:text>
        [HR-BR-5] Identifikator specifikacije (BT-24) mora imati vrijednost 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $ref in cac:BillingReference satisfies ($ref/cac:InvoiceDocumentReference/cbc:IssueDate and normalize-space($ref/cac:InvoiceDocumentReference/cbc:IssueDate) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-6">
                     <xsl:attribute name="test">every $ref in cac:BillingReference satisfies ($ref/cac:InvoiceDocumentReference/cbc:IssueDate and normalize-space($ref/cac:InvoiceDocumentReference/cbc:IssueDate) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-6] Svaka referenca prethodnog računa (BG-3) mora imati datum izdavanja prethodnog računa (BT-26)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cac:AccountingSupplierParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingSupplierParty/cac:Party/cbc:EndpointID) != '')">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-7">
                     <xsl:attribute name="test">cac:AccountingSupplierParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingSupplierParty/cac:Party/cbc:EndpointID) != ''</xsl:attribute>
                     <svrl:text>
        [HR-BR-7] Elektronička adresa Prodavatelja (BT-34) mora biti navedena
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID and normalize-space(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID) != '' and matches(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID, '^\d{11}$'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-9">
                     <xsl:attribute name="test">cac:AccountingSupplierParty/cac:SellerContact/cbc:ID and normalize-space(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID) != '' and matches(cac:AccountingSupplierParty/cac:SellerContact/cbc:ID, '^\d{11}$')</xsl:attribute>
                     <svrl:text>
        [HR-BR-9] Račun mora sadržavati OIB operatera (HR-BT-5) koji mora biti točno 11 znamenki
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cac:AccountingCustomerParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingCustomerParty/cac:Party/cbc:EndpointID) != '')">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-10">
                     <xsl:attribute name="test">cac:AccountingCustomerParty/cac:Party/cbc:EndpointID and normalize-space(cac:AccountingCustomerParty/cac:Party/cbc:EndpointID) != ''</xsl:attribute>
                     <svrl:text>
        [HR-BR-10] Elektronička adresa Kupca (BT-49) mora biti navedena.
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (                 not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($charge/cac:TaxCategory/cbc:Name and normalize-space($charge/cac:TaxCategory/cbc:Name) != '' and                  $charge/cac:TaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O'))               ))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-11">
                     <xsl:attribute name="test">every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (                 not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($charge/cac:TaxCategory/cbc:Name and normalize-space($charge/cac:TaxCategory/cbc:Name) != '' and                  $charge/cac:TaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O'))               )</xsl:attribute>
                     <svrl:text>
        [HR-BR-11] Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen PDV-a mora imati oznaku kategorije PDV-a troška na razini dokumenta (HR-BT-6) iz tablice HR-TB-2 HR oznaka kategorija PDV-a
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (                 not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($charge/cac:TaxCategory/cbc:TaxExemptionReason and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReason) != '') or                 ($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode) != '')               ))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-13">
                     <xsl:attribute name="test">every $charge in cac:AllowanceCharge[cbc:ChargeIndicator='true'] satisfies (                 not($charge/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($charge/cac:TaxCategory/cbc:TaxExemptionReason and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReason) != '') or                 ($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode and normalize-space($charge/cac:TaxCategory/cbc:TaxExemptionReasonCode) != '')               )</xsl:attribute>
                     <svrl:text>
        [HR-BR-13] Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen mora imati razlog oslobođenja PDV-a troška na razini dokumenta (HR-BT-7) ili kod razloga oslobođenja PDV-a a troška na razini dokumenta (HR-BT-8)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:OrderLineReference/cac:OrderReference/cbc:ID) or not(cac:OrderReference/cbc:ID))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-17(1)">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:OrderLineReference/cac:OrderReference/cbc:ID) or not(cac:OrderReference/cbc:ID)</xsl:attribute>
                     <svrl:text>
        [HR-BR-17(1)] Ako se koristi referenca narudžbenice na stavci računa (HR-BT-9), zabranjeno je koristiti BT-13 Referencu narudžbenice na razini računa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:DespatchLineReference/cac:DocumentReference/cbc:ID) or not(cac:DespatchDocumentReference/cbc:ID))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-18(1)">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:DespatchLineReference/cac:DocumentReference/cbc:ID) or not(cac:DespatchDocumentReference/cbc:ID)</xsl:attribute>
                     <svrl:text>
        [HR-BR-18(1)] Ako se koristi referenca otpremnice na stavci računa (HR-BT-10), zabranjeno je koristiti BT-16 Referencu otpremnice na razini računa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:ReceiptLineReference/cac:DocumentReference/cbc:ID) or not(cac:ReceiptDocumentReference/cbc:ID))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-19(1)">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:ReceiptLineReference/cac:DocumentReference/cbc:ID) or not(cac:ReceiptDocumentReference/cbc:ID)</xsl:attribute>
                     <svrl:text>
        [HR-BR-19(1)] Ako se koristi referenca primke na stavci računa (HR-BT-11), zabranjeno je koristiti BT-15 Referencu primke na razini računa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' or                        cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'E') or                    ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-26">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' or                        cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'E') or                    ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal</xsl:attribute>
                     <svrl:text>
        [HR-BR-26] Račun koji sadržava stavku računa (BG-25), popust na razini dokumenta (BG-20) ili trošak na razini dokumenta (BG-21), gdje je kod kategorije PDV-a (BT-151, BT-95 ili BT-102) „oslobođeno od PDV-a" mora u za svaki razlog oslobođenja od PDV-a ili kod razloga oslobođenja od PDV-a sadržavati HR raspodjelu oslobođenja od PDV (HR-BG-2)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 $hrSubtotal/cbc:TaxableAmount =                 (sum((cac:InvoiceLine | cac:CreditNoteLine)/cbc:LineExtensionAmount) -                  sum(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cbc:Amount) +                  sum(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cbc:Amount) -                  (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1])               ))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-27">
                     <xsl:attribute name="test">every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 $hrSubtotal/cbc:TaxableAmount =                 (sum((cac:InvoiceLine | cac:CreditNoteLine)/cbc:LineExtensionAmount) -                  sum(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cbc:Amount) +                  sum(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cbc:Amount) -                  (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1])               )</xsl:attribute>
                     <svrl:text>
        [HR-BR-27] U HR raspodjeli PDV-a (HR-BG-2) HR oporezivi iznos (HR-BT-16) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 not($hrSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:ID = 'VAT' and $hrSubtotal/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($hrSubtotal/cbc:TaxAmount = 0)               ))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-28">
                     <xsl:attribute name="test">every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 not($hrSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:ID = 'VAT' and $hrSubtotal/cac:TaxCategory/cbc:ID = ('E', 'O')) or                 ($hrSubtotal/cbc:TaxAmount = 0)               )</xsl:attribute>
                     <svrl:text>
        [HR-BR-28] Za cac:TaxScheme = „VAT" i kod porezne kategorije (HR-BT-18) „E" ili „O" HR iznos porezne kategorije (HR-BT-17) mora biti 0
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 not($hrSubtotal/cbc:TaxableAmount = 0) or                 ($hrSubtotal/cac:TaxCategory/cbc:ID = 'O' and $hrSubtotal/cbc:TaxAmount = 0)               ))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-29">
                     <xsl:attribute name="test">every $hrSubtotal in ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal satisfies (                 not($hrSubtotal/cbc:TaxableAmount = 0) or                 ($hrSubtotal/cac:TaxCategory/cbc:ID = 'O' and $hrSubtotal/cbc:TaxAmount = 0)               )</xsl:attribute>
                     <svrl:text>
        [HR-BR-29] Stavke računa, troškovi ili popusti koji ne ulaze u poreznu osnovicu HR kod kategorije PDV-a (HR-BT-18) mora biti „O", a HR iznos kategorije poreza (HR-BT-17) mora biti 0
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O') or                        (cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'O')) or                    ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-30">
                     <xsl:attribute name="test">not(((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O') or                        (cac:AllowanceCharge/cac:TaxCategory/cbc:ID = 'O')) or                    ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal</xsl:attribute>
                     <svrl:text>
        [HR-BR-30] HR Ukupni iznosi računa (HR-BG-3) se navodi na računu ako račun sadrži stavke računa (BG-25) ili troškove na razini dokumenta (BG-21) koji ne ulaze u poreznu osnovicu računa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount) or                    (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount =                     (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID != 'O']/cbc:LineExtensionAmount) -                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) +                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) -                      (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-31">
                     <xsl:attribute name="test">not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount) or                    (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:HRTaxExclusiveAmount =                     (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID != 'O']/cbc:LineExtensionAmount) -                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) +                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID != 'O']/cbc:Amount) -                      (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount, 0)[1]))</xsl:attribute>
                     <svrl:text>
        [HR-BR-31] HR porezna osnovica (HR-BT-23) je ukupan neto iznos stavki računa (BT-131) koje ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje ulaze u poreznu osnovicu umanjen za HR neoporezivi iznos (HR-BT-24)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount) or                    (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount =                     (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O']/cbc:LineExtensionAmount) -                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount) +                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-32">
                     <xsl:attribute name="test">not(ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount) or                    (ext:Extensions/ext:Extension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:OutOfScopeOfVATAmount =                     (sum((cac:InvoiceLine | cac:CreditNoteLine)[cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'O']/cbc:LineExtensionAmount) -                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='false' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount) +                      sum(cac:AllowanceCharge[cbc:ChargeIndicator='true' and cac:TaxCategory/cbc:ID = 'O']/cbc:Amount)))</xsl:attribute>
                     <svrl:text>
        [HR-BR-32] HR neoporezivi iznos (HR-BT-24) jednak je zbroju neto iznosa stavki računa (BT-131) koje NE ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje NE ulaze u poreznu osnovicu
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(//*[not(*) and not(@*) and normalize-space() = '' and local-name() != 'SignatureInformation']))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-33">
                     <xsl:attribute name="test">not(//*[not(*) and not(@*) and normalize-space() = '' and local-name() != 'SignatureInformation'])</xsl:attribute>
                     <svrl:text>
        [HR-BR-33] Račun ne smije sadržavati prazne xml elemente osim elementa s elektroničkim potpisom računa
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-1">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-S-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-2">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-S-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-3">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'S') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-S-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Standard rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-1">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-Z-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-2">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-Z-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-3">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'Z') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-Z-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Zero rated" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-1">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-E-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-2">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-E-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-3">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'E') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-E-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Exempt from VAT" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-1">
                     <xsl:attribute name="test">not((cac:InvoiceLine | cac:CreditNoteLine)/cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-AE-1] Račun koji sadrži stavku računa (BG-25) u kojoj je kod kategorije PDV-a obračunate stavke (BT-151) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-2">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-AE-2] Račun koji sadrži popuste na razini dokumenta (BG-20) gdje je kod kategorije PDV-a popusta na razini dokumenta (BT-95) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-3">
                     <xsl:attribute name="test">not(cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory/cbc:ID = 'AE') or                     (cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID and normalize-space(cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-AE-3] Račun koji sadrži troškove na razini dokumenta (BG-21) gdje je kod kategorije PDV-a troška na razini dokumenta (BT-102) "Reverse charge" mora sadržavati PDV identifikacijski broj Kupca (BT-48)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e23')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="/ubl:Invoice/cac:InvoiceLine | /cn:CreditNote/cac:CreditNoteLine"
                 priority="0"
                 mode="d7e23">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e23']">
            <schxslt:rule pattern="d7e23">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "/ubl:Invoice/cac:InvoiceLine | /cn:CreditNote/cac:CreditNoteLine" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl:Invoice/cac:InvoiceLine | /cn:CreditNote/cac:CreditNoteLine</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:suppressed-rule>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="$schxslt:patterns-matched"/>
            </xsl:next-match>
         </xsl:when>
         <xsl:otherwise>
            <schxslt:rule pattern="d7e23">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl:Invoice/cac:InvoiceLine | /cn:CreditNote/cac:CreditNoteLine</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:Name and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:Name) != '' and                      cac:Item/cac:ClassifiedTaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-16">
                     <xsl:attribute name="test">not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:Name and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:Name) != '' and                      cac:Item/cac:ClassifiedTaxCategory/cbc:Name = ('HR:Z', 'HR:K', 'HR:G', 'HR:AE', 'HR:E', 'HR:POVNAK', 'HR:PP', 'HR:PPMV', 'HR:O'))</xsl:attribute>
                     <svrl:text>
        [HR-BR-16] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati oznaku kategorije PDV-a obračunate stavke HR-BT-12 iz šifarnika oznaka kategorija PDV-a HR-TB-2
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' and cac:Item/cac:ClassifiedTaxCategory/cbc:Percent = 0))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-17(2)">
                     <xsl:attribute name="test">not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:ID = 'E' and cac:Item/cac:ClassifiedTaxCategory/cbc:Percent = 0)</xsl:attribute>
                     <svrl:text>
        [HR-BR-17(2)] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati kod kategorije PDV-a „E" (BT-151) i stopu PDV-a (BT-152) jednaku 0
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) != '') or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-18(2)">
                     <xsl:attribute name="test">not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) != '') or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-18(2)] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) != '') or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode) != ''))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-19(2)">
                     <xsl:attribute name="test">not(cac:Item/cac:ClassifiedTaxCategory/cbc:ID = ('E', 'O')) or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) != '') or                     (cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode and normalize-space(cac:Item/cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode) != '')</xsl:attribute>
                     <svrl:text>
        [HR-BR-19(2)] Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Price/cbc:BaseQuantity) or (cac:Price/cbc:BaseQuantity &gt; 0))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-20">
                     <xsl:attribute name="test">not(cac:Price/cbc:BaseQuantity) or (cac:Price/cbc:BaseQuantity &gt; 0)</xsl:attribute>
                     <svrl:text>
        [HR-BR-20] Jedinična količina za cijenu artikla (BT-149), ako je iskazana, MORA biti pozitivan broj veći od nule
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Price/cbc:BaseQuantity/@unitCode) or                     not((cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode) or                     (cac:Price/cbc:BaseQuantity/@unitCode = (cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-21">
                     <xsl:attribute name="test">not(cac:Price/cbc:BaseQuantity/@unitCode) or                     not((cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode) or                     (cac:Price/cbc:BaseQuantity/@unitCode = (cbc:InvoicedQuantity | cbc:CreditedQuantity)/@unitCode)</xsl:attribute>
                     <svrl:text>
        [HR-BR-21] Jedinica mjere jedinične količine cijene artikla (BT-150), ako je iskazan, MORA biti jednaka jedinici mjere obračunate količine (BT-130)
      </svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e23')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:function name="schxslt:location" as="xs:string">
      <xsl:param name="node" as="node()"/>
      <xsl:variable name="segments" as="xs:string*">
         <xsl:for-each select="($node/ancestor-or-self::node())">
            <xsl:variable name="position">
               <xsl:number level="single"/>
            </xsl:variable>
            <xsl:choose>
               <xsl:when test=". instance of element()">
                  <xsl:value-of select="concat('Q{', namespace-uri(.), '}', local-name(.), '[', $position, ']')"/>
               </xsl:when>
               <xsl:when test=". instance of attribute()">
                  <xsl:value-of select="concat('@Q{', namespace-uri(.), '}', local-name(.))"/>
               </xsl:when>
               <xsl:when test=". instance of processing-instruction()">
                  <xsl:value-of select="concat('processing-instruction(&#34;', name(.), '&#34;)[', $position, ']')"/>
               </xsl:when>
               <xsl:when test=". instance of comment()">
                  <xsl:value-of select="concat('comment()[', $position, ']')"/>
               </xsl:when>
               <xsl:when test=". instance of text()">
                  <xsl:value-of select="concat('text()[', $position, ']')"/>
               </xsl:when>
               <xsl:otherwise/>
            </xsl:choose>
         </xsl:for-each>
      </xsl:variable>
      <xsl:value-of select="concat('/', string-join($segments, '/'))"/>
   </xsl:function>
</xsl:transform>
