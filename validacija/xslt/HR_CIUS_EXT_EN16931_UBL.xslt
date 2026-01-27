<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
               xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
               xmlns:error="https://doi.org/10.5281/zenodo.1495494#error"
               xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
               xmlns:hrextac="urn:mfin.gov.hr:schema:xsd:HRExtensionAggregateComponents-1"
               xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:sch="http://purl.oclc.org/dsdl/schematron"
               xmlns:schxslt="https://doi.org/10.5281/zenodo.1495494"
               xmlns:schxslt-api="https://doi.org/10.5281/zenodo.1495494#api"
               xmlns:sig="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2"
               xmlns:ubl-creditnote="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"
               xmlns:ubl-invoice="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
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
                  
                  <dct:source>
                     <rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/">
                        <dct:creator>
                           <dct:Agent>
                              <skos:prefLabel>SchXslt/1.10.1 SAXON/HE 12.7</skos:prefLabel>
                              <schxslt.compile.typed-variables xmlns="https://doi.org/10.5281/zenodo.1495494#">true</schxslt.compile.typed-variables>
                           </dct:Agent>
                        </dct:creator>
                        
                     </rdf:Description>
                  </dct:source>
               </svrl:metadata>
            </xsl:variable>
            <xsl:variable name="report" as="element(schxslt:report)">
               <schxslt:report>
                  <xsl:call-template name="d7e25"/>
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
                                    schemaVersion="iso"
                                    title="Rules for CIUS-HR and EXT-HR 2025 (1.0.0)">
               <svrl:ns-prefix-in-attribute-values prefix="cbc"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="cac"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="ext"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="sig"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="hrextac"
                                                   uri="urn:mfin.gov.hr:schema:xsd:HRExtensionAggregateComponents-1"/>
               <svrl:ns-prefix-in-attribute-values prefix="ubl-creditnote"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="ubl-invoice"
                                                   uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
               <svrl:ns-prefix-in-attribute-values prefix="xs" uri="http://www.w3.org/2001/XMLSchema"/>
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
   <xsl:template name="d7e25">
      <schxslt:document>
         <schxslt:pattern id="d7e25">
            <xsl:if test="exists(base-uri(root()))">
               <xsl:attribute name="documents" select="base-uri(root())"/>
            </xsl:if>
            <xsl:for-each select="root()">
               <svrl:active-pattern xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="documents" select="base-uri(.)"/>
               </svrl:active-pattern>
            </xsl:for-each>
         </schxslt:pattern>
         <schxslt:pattern id="d7e35">
            <xsl:if test="exists(base-uri(root()))">
               <xsl:attribute name="documents" select="base-uri(root())"/>
            </xsl:if>
            <xsl:for-each select="root()">
               <svrl:active-pattern xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="documents" select="base-uri(.)"/>
               </svrl:active-pattern>
            </xsl:for-each>
         </schxslt:pattern>
         <xsl:apply-templates mode="d7e25" select="root()"/>
      </schxslt:document>
   </xsl:template>
   <xsl:template match="//*[not(*) and not(normalize-space()) and not(ancestor-or-self::sig:UBLDocumentSignatures)]"
                 priority="9"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e25']">
            <schxslt:rule pattern="d7e25">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "//*[not(*) and not(normalize-space()) and not(ancestor-or-self::sig:UBLDocumentSignatures)]" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">//*[not(*) and not(normalize-space()) and not(ancestor-or-self::sig:UBLDocumentSignatures)]</xsl:attribute>
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
            <schxslt:rule pattern="d7e25">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">//*[not(*) and not(normalize-space()) and not(ancestor-or-self::sig:UBLDocumentSignatures)]</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(false())">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-33">
                     <xsl:attribute name="test">false()</xsl:attribute>
                     <svrl:text>[HR-BR-33] - Račun ne smije sadržavati prazne xml elemente osim elementa s elektroničkim potpisom računa.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e25')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="ubl-creditnote:CreditNote | ubl-invoice:Invoice"
                 priority="8"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:variable name="issueDate" select="xs:date(cbc:IssueDate)"/>
      <xsl:variable name="payableAmount"
                    select="             if (/ubl-invoice:Invoice) then               cac:LegalMonetaryTotal/cbc:PayableAmount             else               cac:LegalMonetaryTotal/cbc:PayableAmount * -1"/>
      <xsl:variable name="dueDate"
                    select="             if (/ubl-invoice:Invoice) then               cbc:DueDate             else               cac:PaymentMeans/cbc:PaymentDueDate"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "ubl-creditnote:CreditNote | ubl-invoice:Invoice" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">ubl-creditnote:CreditNote | ubl-invoice:Invoice</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">ubl-creditnote:CreditNote | ubl-invoice:Invoice</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(not(matches(/*/cbc:ID, '\s')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-1">
                     <xsl:attribute name="test">not(matches(/*/cbc:ID, '\s'))</xsl:attribute>
                     <svrl:text>[HR-BR-1] - Broj računa ne smije sadržavati bjeline (whitespace znakove)
			</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((xs:date(cbc:IssueDate) &gt;= xs:date('2026-01-01')) and (xs:date(cbc:IssueDate) &lt;= xs:date('2100-01-01')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-40">
                     <xsl:attribute name="test">(xs:date(cbc:IssueDate) &gt;= xs:date('2026-01-01')) and (xs:date(cbc:IssueDate) &lt;= xs:date('2100-01-01'))</xsl:attribute>
                     <svrl:text>[HR-BR-40] - Datum izdavanja računa (BT-2) - (<xsl:value-of select="$issueDate"/>) mora biti veći od 01.01.2026 i manji od 01.01.2100.
			</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cbc:IssueTime and matches(cbc:IssueTime, '^[0-9]{2}:[0-9]{2}:[0-9]{2}$'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-2">
                     <xsl:attribute name="test">cbc:IssueTime and matches(cbc:IssueTime, '^[0-9]{2}:[0-9]{2}:[0-9]{2}$')</xsl:attribute>
                     <svrl:text>[HR-BR-2] - Račun mora imati vrijeme izdavanja računa (HR-BT-2). Vrijeme se upisuje u formatu hh:mm:ss</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(/*/cbc:ProfileID and (matches(normalize-space(/*/cbc:ProfileID), '^P([1-9]{1})$') or matches(normalize-space(/*/cbc:ProfileID), '^P([1]{1}[0-2]{1})$') or matches(normalize-space(/*/cbc:ProfileID), '^P99:')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-34">
                     <xsl:attribute name="test">/*/cbc:ProfileID and (matches(normalize-space(/*/cbc:ProfileID), '^P([1-9]{1})$') or matches(normalize-space(/*/cbc:ProfileID), '^P([1]{1}[0-2]{1})$') or matches(normalize-space(/*/cbc:ProfileID), '^P99:'))</xsl:attribute>
                     <svrl:text>[HR-BR-34] - Oznaka procesa (BT-23) MORA biti navedena. Koriste se vrijednosti P1-P12 ili P99:Oznaka kupca</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(string-length(cbc:ProfileID) &lt;= 200)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-42">
                     <xsl:attribute name="test">string-length(cbc:ProfileID) &lt;= 200</xsl:attribute>
                     <svrl:text>[HR-BR-42] - Oznaka procesa (BT-23) ne smije biti veća od 200 znakova</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(string-length(cac:ContractDocumentReference/cbc:ID) &lt;= 1024)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-43">
                     <xsl:attribute name="test">string-length(cac:ContractDocumentReference/cbc:ID) &lt;= 1024</xsl:attribute>
                     <svrl:text>[HR-BR-43] - Referenca ugovora (BT-12) ne smije imati više od 1024 znakova</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(xs:date(cac:Delivery/cbc:ActualDeliveryDate) &lt;= xs:date('2100-01-01') or (not(exists(cac:Delivery/cbc:ActualDeliveryDate))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-44">
                     <xsl:attribute name="test">xs:date(cac:Delivery/cbc:ActualDeliveryDate) &lt;= xs:date('2100-01-01') or (not(exists(cac:Delivery/cbc:ActualDeliveryDate)))</xsl:attribute>
                     <svrl:text>[HR-BR-44] - Stvarni datum isporuke (BT-72) mora biti manji od 01.01.2100.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(normalize-space(cbc:CustomizationID) = 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0')">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-5">
                     <xsl:attribute name="test">normalize-space(cbc:CustomizationID) = 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'</xsl:attribute>
                     <svrl:text>[HR-BR-5] - Identifikator specifikacije (BT-24) mora imati vrijednost 'urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0'</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'S'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-1">
                     <xsl:attribute name="test">(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'S']))</xsl:attribute>
                     <svrl:text>[HR-BR-S-1] - Račun koji sadržava stavku računa (BG-25) u kojoj je šifra kategorije PDV-a fakturiranog artikla (BT-151) 'Standardna ili reducirana stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'S'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-2">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']))</xsl:attribute>
                     <svrl:text>[HR-BR-S-2] - Račun koji sadržava popust na razini dokumenta (BG-20) u kojemu je šifra kategorije PDV-a popusta na razini dokumenta (BT-95) 'Standardna ili reducirana stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'S'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-3">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'S']))</xsl:attribute>
                     <svrl:text>[HR-BR-S-3] - Račun koji sadržava trošak na razini dokumenta (BG-21) u kojemu je šifra kategorije PDV-a troška na razini dokumenta (BT-102) 'Standardna ili reducirana stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'Z'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-1">
                     <xsl:attribute name="test">(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'Z']))</xsl:attribute>
                     <svrl:text>[HR-BR-Z-1] - Račun koji sadržava stavku računa (BG-25) u kojoj je šifra kategorije PDV-a fakturiranog artikla (BT-151) 'Nulta stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-2">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']))</xsl:attribute>
                     <svrl:text>[HR-BR-Z-2] - Račun koji sadržava popust na razini dokumenta (BG-20) u kojemu je šifra kategorije PDV-a popusta na razini dokumenta (BT-95) 'Nulta stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-3">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'Z']))</xsl:attribute>
                     <svrl:text>[HR-BR-Z-3] - Račun koji sadržava trošak na razini dokumenta (BG-21) u kojemu je šifra kategorije PDV-a troška na razini dokumenta (BT-102) 'Nulta stopa PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-1">
                     <xsl:attribute name="test">(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']))</xsl:attribute>
                     <svrl:text>[HR-BR-E-1] - Račun koji sadržava stavku računa (BG-25) u kojoj je šifra kategorije PDV-a fakturiranog artikla (BT-151) 'Oslobođeno PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-2">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']))</xsl:attribute>
                     <svrl:text>[HR-BR-E-2] - Račun koji sadržava popust na razini dokumenta (BG-20) u kojemu je šifra kategorije PDV-a popusta na razini dokumenta (BT-95) 'Oslobođeno PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-3">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']))</xsl:attribute>
                     <svrl:text>[HR-BR-E-3] - Račun koji sadržava trošak na razini dokumenta (BG-21) u kojemu je šifra kategorije PDV-a troška na razini dokumenta (BT-102) 'Oslobođeno PDV' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'AE'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-1">
                     <xsl:attribute name="test">(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'AE']))</xsl:attribute>
                     <svrl:text>[HR-BR-AE-1] - Račun koji sadržava stavku računa (BG-25) u kojoj je šifra kategorije PDV-a fakturiranog artikla (BT-151) 'Prijenos porezne obveze' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-2">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']))</xsl:attribute>
                     <svrl:text>[HR-BR-AE-2] - Račun koji sadržava popust na razini dokumenta (BG-20) u kojemu je šifra kategorije PDV-a popusta na razini dokumenta (BT-95) 'Prijenos porezne obveze' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-3">
                     <xsl:attribute name="test">(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']) and (exists(//cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme[cac:TaxScheme/cbc:ID = 'VAT']/cbc:CompanyID))) or not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'AE']))</xsl:attribute>
                     <svrl:text>[HR-BR-AE-3] - Račun koji sadržava trošak na razini dokumenta (BG-21) u kojemu je šifra kategorije PDV-a troška na razini dokumenta (BT-102) 'Prijenos porezne obveze' mora sadržavati PDV identifikator Kupca (BT-48)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E'])) and (exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal)) or (not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E'])) and (not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']))) and (not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E'])))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-26">
                     <xsl:attribute name="test">(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E'])) and (exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal)) or (not(exists(//cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E'])) and (not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='false']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']))) and (not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:ID) = 'E']))))</xsl:attribute>
                     <svrl:text>[HR-BR-26] - Račun koji sadržava stavku računa (BG-25), popust na razini dokumenta (BG-20) ili trošak na razini dokumenta (BG-21), gdje je kod kategorije PDV-a (BT-151, BT-95 ili  BT-102) „oslobođeno od PDV-a“ mora sadržavati HR raspodjelu PDV (HR-BG-2)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(((cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and (cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) + xs:decimal(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) - xs:decimal(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10) div 100 ))  or (not(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and (cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) - xs:decimal(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10 ) div 100)) or ((cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and not(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) + xs:decimal(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10 ) div 100)) or (not(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and not(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount))) or (not(exists(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-27">
                     <xsl:attribute name="test">((cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and (cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) + xs:decimal(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) - xs:decimal(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10) div 100 ))  or (not(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and (cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) - xs:decimal(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10 ) div 100)) or ((cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and not(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = round((xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) + xs:decimal(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount)) * 10 * 10 ) div 100)) or (not(cac:LegalMonetaryTotal/cbc:ChargeTotalAmount) and not(cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount) and (xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/cbc:TaxExclusiveAmount) = xs:decimal(cac:LegalMonetaryTotal/cbc:LineExtensionAmount) - xs:decimal(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount))) or (not(exists(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal)))</xsl:attribute>
                     <svrl:text>[HR-BR-27] - HR iznos osnovice za PDV (HR-BT-23) mora biti jednak zbroju neto iznosa stavki računa (BT-131) umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) i umanjen za HR neoporezivi iznos (HR-BT-24)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/hrextac:HRTaxCategory[normalize-space(cbc:ID) = 'O'])) and (//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/cbc:TaxAmount = 0) or (not(exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/hrextac:HRTaxCategory[normalize-space(cbc:ID) = 'O']))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-29">
                     <xsl:attribute name="test">(exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/hrextac:HRTaxCategory[normalize-space(cbc:ID) = 'O'])) and (//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/cbc:TaxAmount = 0) or (not(exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal/hrextac:HRTaxCategory[normalize-space(cbc:ID) = 'O'])))</xsl:attribute>
                     <svrl:text>[HR-BR-29] - Stavke računa, troškovi ili popusti koji ne ulaze u poreznu osnovicu HR kod kategorije PDV-a (HR-BT-18) mora biti „O“, a HR iznos kategorije poreza (HR-BT-17) mora biti 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(((exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PP']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PPMV']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:N']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PP']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PPMV']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:N'])) and (exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal))) or (not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PP'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PPMV'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:N'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PP'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PPMV'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:N']))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-30">
                     <xsl:attribute name="test">((exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PP']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PPMV']) or exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:N']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PP']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PPMV']) or exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:N'])) and (exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal))) or (not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PP'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:PPMV'])) and not(exists(//cac:InvoiceLine/cac:Item/cac:ClassifiedTaxCategory[normalize-space(cbc:Name) = 'HR:N'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:POVNAK'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PP'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:PPMV'])) and not(exists(//cac:AllowanceCharge[cbc:ChargeIndicator='true']/cac:TaxCategory[normalize-space(cbc:Name) = 'HR:N'])))</xsl:attribute>
                     <svrl:text>[HR-BR-30] - HR Ukupni iznosi računa (HR-BG-3) se navodi na računu ako račun sadrži stavke računa (BG-25) ili troškove na razini dokumenta (BG-21) koji ne ulaze u poreznu osnovicu računa osim ako je EN porezna kategorija (O) Neoporeziva prodaja I Oznaka porezne kategorije HR:O.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount) = round(sum(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal[hrextac:HRTaxCategory/normalize-space(cbc:ID) = 'O']/xs:decimal(cbc:TaxableAmount)) * 10 * 10) div 100) or (not(exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-32">
                     <xsl:attribute name="test">(xs:decimal(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal/hrextac:OutOfScopeOfVATAmount) = round(sum(ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal[hrextac:HRTaxCategory/normalize-space(cbc:ID) = 'O']/xs:decimal(cbc:TaxableAmount)) * 10 * 10) div 100) or (not(exists(//ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRLegalMonetaryTotal)))</xsl:attribute>
                     <svrl:text>[HR-BR-32] - HR neoporezivi iznos (HR-BT-24) jednak je zbroju neto iznosa stavki računa (BT-131) koje NE ulaze u poreznu osnovicu umanjen za zbroj iznosa popusta na razini dokumenta (BT-92) i uvećan za zbroj iznosa troškova na razini dokumenta (BT-99) koje NE ulaze u poreznu osnovicu</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(($payableAmount &gt; 0) and (exists(cbc:DueDate) or exists(cac:PaymentMeans/cbc:PaymentDueDate)) or (($payableAmount &lt;= 0)))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-4">
                     <xsl:attribute name="test">($payableAmount &gt; 0) and (exists(cbc:DueDate) or exists(cac:PaymentMeans/cbc:PaymentDueDate)) or (($payableAmount &lt;= 0))</xsl:attribute>
                     <svrl:text>[HR-BR-4] - U slučaju pozitivnog iznosa koji dospijeva na plaćanje (BT-115), datum dospijeća plaćanja (BT-9) mora biti naveden</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((xs:date($dueDate) &lt;= xs:date('2100-01-01')) or ($payableAmount &lt;= 0))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-41">
                     <xsl:attribute name="test">(xs:date($dueDate) &lt;= xs:date('2100-01-01')) or ($payableAmount &lt;= 0)</xsl:attribute>
                     <svrl:text>[HR-BR-41] - Datum dospijeća plaćanja (BT-9) -(<xsl:value-of select="$dueDate"/>) - mora biti manji od 01.01.2100.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="/ubl-invoice:Invoice/cac:AllowanceCharge[cbc:ChargeIndicator = true()] | /ubl-creditnote:CreditNote/cac:AllowanceCharge[cbc:ChargeIndicator = true()]"
                 priority="7"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "/ubl-invoice:Invoice/cac:AllowanceCharge[cbc:ChargeIndicator = true()] | /ubl-creditnote:CreditNote/cac:AllowanceCharge[cbc:ChargeIndicator = true()]" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl-invoice:Invoice/cac:AllowanceCharge[cbc:ChargeIndicator = true()] | /ubl-creditnote:CreditNote/cac:AllowanceCharge[cbc:ChargeIndicator = true()]</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">/ubl-invoice:Invoice/cac:AllowanceCharge[cbc:ChargeIndicator = true()] | /ubl-creditnote:CreditNote/cac:AllowanceCharge[cbc:ChargeIndicator = true()]</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(((cac:TaxCategory[normalize-space(cbc:ID) = 'E'] or cac:TaxCategory[normalize-space(cbc:ID) = 'O']) and exists(cac:TaxCategory/cbc:Name)) or (cac:TaxCategory[normalize-space(cbc:ID) != 'E'] and cac:TaxCategory[normalize-space(cbc:ID) != 'O']))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-11">
                     <xsl:attribute name="test">((cac:TaxCategory[normalize-space(cbc:ID) = 'E'] or cac:TaxCategory[normalize-space(cbc:ID) = 'O']) and exists(cac:TaxCategory/cbc:Name)) or (cac:TaxCategory[normalize-space(cbc:ID) != 'E'] and cac:TaxCategory[normalize-space(cbc:ID) != 'O'])</xsl:attribute>
                     <svrl:text>[HR-BR-11] - Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen PDV-a mora imati oznaku kategorije PDV-a troška na razini dokumenta (HR-BT-6)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(((cac:TaxCategory[normalize-space(cbc:ID) = 'E'] or cac:TaxCategory[normalize-space(cbc:ID) = 'O']) and (exists(cac:TaxCategory/cbc:TaxExemptionReason) or exists(cac:TaxCategory/cbc:TaxExemptionReasonCode))) or (cac:TaxCategory[normalize-space(cbc:ID) != 'E'] and cac:TaxCategory[normalize-space(cbc:ID) != 'O']))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-13">
                     <xsl:attribute name="test">((cac:TaxCategory[normalize-space(cbc:ID) = 'E'] or cac:TaxCategory[normalize-space(cbc:ID) = 'O']) and (exists(cac:TaxCategory/cbc:TaxExemptionReason) or exists(cac:TaxCategory/cbc:TaxExemptionReasonCode))) or (cac:TaxCategory[normalize-space(cbc:ID) != 'E'] and cac:TaxCategory[normalize-space(cbc:ID) != 'O'])</xsl:attribute>
                     <svrl:text>[HR-BR-13] - Svaki troškak na razini dokumenta (BG-21) koji ne podliježe PDV-u ili je oslobođen mora imati razlog oslobođenja PDV-a troška na razini dokumenta (HR-BT-6) ili kod razloga oslobođenja PDV-a a troška na razini dokumenta (HR-BT-7)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:BillingReference" priority="6" mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:BillingReference" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:BillingReference</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:BillingReference</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(exists(cac:InvoiceDocumentReference/cbc:ID) and exists(cac:InvoiceDocumentReference/cbc:IssueDate))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-6">
                     <xsl:attribute name="test">exists(cac:InvoiceDocumentReference/cbc:ID) and exists(cac:InvoiceDocumentReference/cbc:IssueDate)</xsl:attribute>
                     <svrl:text>[HR-BR-6] - Svaka referenca prethodnog računa (BG-3) mora imati datum izdavanja prethodnog računa (BT-26)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(xs:date(cac:InvoiceDocumentReference/cbc:IssueDate) &lt;= xs:date('2100-01-01'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-45">
                     <xsl:attribute name="test">xs:date(cac:InvoiceDocumentReference/cbc:IssueDate) &lt;= xs:date('2100-01-01')</xsl:attribute>
                     <svrl:text>[HR-BR-45] - Datum izdavanja prethodnog računa (BT-26) mora biti manji od 01.01.2100.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:AccountingSupplierParty" priority="5" mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:AccountingSupplierParty" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:AccountingSupplierParty</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:AccountingSupplierParty</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(cac:Party/cbc:EndpointID)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-7">
                     <xsl:attribute name="test">cac:Party/cbc:EndpointID</xsl:attribute>
                     <svrl:text>[HR-BR-7] - Elektronička adresa Prodavatelja (BT-34) mora biti navedena</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cac:SellerContact/cbc:Name)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-37">
                     <xsl:attribute name="test">cac:SellerContact/cbc:Name</xsl:attribute>
                     <svrl:text>[HR-BR-37] - Račun mora sadržavati oznaku operatera (HR-BT-4)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(cac:SellerContact/cbc:ID and matches(cac:SellerContact/cbc:ID, '^[0-9]{11}$'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-9">
                     <xsl:attribute name="test">cac:SellerContact/cbc:ID and matches(cac:SellerContact/cbc:ID, '^[0-9]{11}$')</xsl:attribute>
                     <svrl:text>[HR-BR-9] - Račun mora sadržavati OIB operatera (HR-BT-5)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:AccountingCustomerParty/cac:Party"
                 priority="4"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:AccountingCustomerParty/cac:Party" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:AccountingCustomerParty/cac:Party</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:AccountingCustomerParty/cac:Party</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(cbc:EndpointID)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-10">
                     <xsl:attribute name="test">cbc:EndpointID</xsl:attribute>
                     <svrl:text>[HR-BR-10] - Elektronička adresa Kupca (BT-49) mora biti navedena</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:InvoiceLine | cac:CreditNoteLine"
                 priority="3"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:variable name="hasOrderReference" select="../cac:OrderReference/cbc:ID"/>
      <xsl:variable name="hasDespatchDocumentReference"
                    select="../cac:DespatchDocumentReference/cbc:ID"/>
      <xsl:variable name="hasReceiptDocumentReference"
                    select="../cac:ReceiptDocumentReference/cbc:ID"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:InvoiceLine | cac:CreditNoteLine" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:InvoiceLine | cac:CreditNoteLine</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:InvoiceLine | cac:CreditNoteLine</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not((exists(cac:OrderLineReference/cac:OrderReference/cbc:ID) and not($hasOrderReference)) or (not(exists(cac:OrderLineReference/cac:OrderReference/cbc:ID)) and ($hasOrderReference)) or (not(exists(cac:OrderLineReference/cac:OrderReference/cbc:ID)) and not($hasOrderReference)))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-17">
                     <xsl:attribute name="test">(exists(cac:OrderLineReference/cac:OrderReference/cbc:ID) and not($hasOrderReference)) or (not(exists(cac:OrderLineReference/cac:OrderReference/cbc:ID)) and ($hasOrderReference)) or (not(exists(cac:OrderLineReference/cac:OrderReference/cbc:ID)) and not($hasOrderReference))</xsl:attribute>
                     <svrl:text>[HR-BR-17] - Ako se koristi referenca narudžbenice na stavci računa (HR-BT-9), zabranjeno je koristiti BT-13 Referencu narudžbenice na razini računa</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID) and not($hasDespatchDocumentReference)) or (not(exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID)) and ($hasDespatchDocumentReference)) or (not(exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID)) and not($hasDespatchDocumentReference)))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-18">
                     <xsl:attribute name="test">(exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID) and not($hasDespatchDocumentReference)) or (not(exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID)) and ($hasDespatchDocumentReference)) or (not(exists(cac:DespatchLineReference/cac:DocumentReference/cbc:ID)) and not($hasDespatchDocumentReference))</xsl:attribute>
                     <svrl:text>[HR-BR-18] - Ako se koristi referenca otpremnice na stavci računa (HR-BT-10), zabranjeno je koristiti BT-16 Referencu otpremnice na razini računa</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID) and not($hasReceiptDocumentReference)) or (not(exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID)) and ($hasReceiptDocumentReference)) or (not(exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID)) and not($hasReceiptDocumentReference)))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-19">
                     <xsl:attribute name="test">(exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID) and not($hasReceiptDocumentReference)) or (not(exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID)) and ($hasReceiptDocumentReference)) or (not(exists(cac:ReceiptLineReference/cac:DocumentReference/cbc:ID)) and not($hasReceiptDocumentReference))</xsl:attribute>
                     <svrl:text>[HR-BR-19] - Ako se koristi referenca primke na stavci računa (HR-BT-11), zabranjeno je koristiti BT-15 Referencu primke na razini računa</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(not(cac:Price/cbc:BaseQuantity) or xs:decimal(cac:Price/cbc:BaseQuantity) &gt; 0)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-20">
                     <xsl:attribute name="test">not(cac:Price/cbc:BaseQuantity) or xs:decimal(cac:Price/cbc:BaseQuantity) &gt; 0</xsl:attribute>
                     <svrl:text>[HR-BR-20] - Jedinična količina za cijenu artikla, ako je iskazana, MORA biti pozitivan broj veći od nule</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:Price/cbc:BaseQuantity[@unitCode]"
                 priority="2"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:variable name="hasQuantity"
                    select="../../cbc:InvoicedQuantity or ../../cbc:CreditedQuantity"/>
      <xsl:variable name="lineID" select="../../cbc:ID"/>
      <xsl:variable name="quantity"
                    select="           if (/ubl-invoice:Invoice) then             ../../cbc:InvoicedQuantity           else             ../../cbc:CreditedQuantity"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:Price/cbc:BaseQuantity[@unitCode]" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:Price/cbc:BaseQuantity[@unitCode]</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:Price/cbc:BaseQuantity[@unitCode]</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(not($hasQuantity) or @unitCode = $quantity/@unitCode)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-21">
                     <xsl:attribute name="test">not($hasQuantity) or @unitCode = $quantity/@unitCode</xsl:attribute>
                     <svrl:text>[HR-BR-21] - Stavka <xsl:value-of select="$lineID"/>: Jedinica mjere jedinične količine cijene artikla, ako je iskazan, MORA biti jednaka jedinici mjere obračunate količine (BT-130)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="cac:Item" priority="1" mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:variable name="lineID" select="../cbc:ID"/>
      <xsl:variable name="documentTypeCode"
                    select="    if (/ubl-invoice:Invoice) then     ../../cbc:InvoiceTypeCode    else     ../../cbc:CreditNoteTypeCode"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "cac:Item" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:Item</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">cac:Item</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not(((exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) or exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'O'])) and exists(cac:ClassifiedTaxCategory/cbc:Name)) or (exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'E']) and exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'O'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-16">
                     <xsl:attribute name="test">((exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E']) or exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'O'])) and exists(cac:ClassifiedTaxCategory/cbc:Name)) or (exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'E']) and exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'O']))</xsl:attribute>
                     <svrl:text>[HR-BR-16] - Stavka <xsl:value-of select="$lineID"/>: Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati oznaku kategorije PDV-a obračunate stavke HR-BT-12</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(cac:CommodityClassification/cbc:ItemClassificationCode) and (cac:CommodityClassification/cbc:ItemClassificationCode/@listID = 'CG')) or (not(exists(cac:CommodityClassification/cbc:ItemClassificationCode)) and $documentTypeCode[contains(' 386 81 83 261 262 296 308 381 396 420 458 532 ', concat(' ', normalize-space(.), ' '))]) or ($documentTypeCode[contains(' 386 81 83 261 262 296 308 381 396 420 458 532 ', concat(' ', normalize-space(.), ' '))] and (cac:CommodityClassification/cbc:ItemClassificationCode/@listID != 'CG')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-25">
                     <xsl:attribute name="test">(exists(cac:CommodityClassification/cbc:ItemClassificationCode) and (cac:CommodityClassification/cbc:ItemClassificationCode/@listID = 'CG')) or (not(exists(cac:CommodityClassification/cbc:ItemClassificationCode)) and $documentTypeCode[contains(' 386 81 83 261 262 296 308 381 396 420 458 532 ', concat(' ', normalize-space(.), ' '))]) or ($documentTypeCode[contains(' 386 81 83 261 262 296 308 381 396 420 458 532 ', concat(' ', normalize-space(.), ' '))] and (cac:CommodityClassification/cbc:ItemClassificationCode/@listID != 'CG'))</xsl:attribute>
                     <svrl:text>[HR-BR-25] - Stavka <xsl:value-of select="$lineID"/>: Svaki artikl MORA imati identifikator klasifikacije artikla iz sheme Klasifikacija proizvoda po djelatnostima: KPD (CPA) – listID „CG“, osim u slučaju računa za predujam i odobrenja.</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E'] or exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'O'])) and (exists(cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) or exists(cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode))) or ((cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'E']) and (cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'O'])))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-36">
                     <xsl:attribute name="test">(exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'E'] or exists(cac:ClassifiedTaxCategory[normalize-space(cbc:ID) = 'O'])) and (exists(cac:ClassifiedTaxCategory/cbc:TaxExemptionReason) or exists(cac:ClassifiedTaxCategory/cbc:TaxExemptionReasonCode))) or ((cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'E']) and (cac:ClassifiedTaxCategory[normalize-space(cbc:ID) != 'O']))</xsl:attribute>
                     <svrl:text>[HR-BR-36] - Stavka <xsl:value-of select="$lineID"/>: Svaka stavka računa (BG-25) koja ne podliježe PDV-u ili je oslobođena od PDV-a mora imati razlog oslobođenja PDV-a (HR-BT-13) ili kod razloga oslobođenja PDV-a (HR-BT-14)</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not(string-length(cbc:Name) &lt;= 1024)">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-46">
                     <xsl:attribute name="test">string-length(cbc:Name) &lt;= 1024</xsl:attribute>
                     <svrl:text>[HR-BR-46] - Stavka <xsl:value-of select="$lineID"/>: Naziv artikla (BT-153) mora imati manje od 1024 znakova</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((string-length(cbc:Description) &lt;= 4096) or (not(exists(cbc:Description))))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-47">
                     <xsl:attribute name="test">(string-length(cbc:Description) &lt;= 4096) or (not(exists(cbc:Description)))</xsl:attribute>
                     <svrl:text>[HR-BR-47] - Stavka <xsl:value-of select="$lineID"/>: Opis artikla (BT-154) mora imati manje od 4096 znakova</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
            </xsl:next-match>
         </xsl:otherwise>
      </xsl:choose>
   </xsl:template>
   <xsl:template match="ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal"
                 priority="0"
                 mode="d7e25">
      <xsl:param name="schxslt:patterns-matched" as="xs:string*"/>
      <xsl:choose>
         <xsl:when test="$schxslt:patterns-matched[. = 'd7e35']">
            <schxslt:rule pattern="d7e35">
               <xsl:comment xmlns:svrl="http://purl.oclc.org/dsdl/svrl">WARNING: Rule for context "ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal" shadowed by preceding rule</xsl:comment>
               <svrl:suppressed-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal</xsl:attribute>
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
            <schxslt:rule pattern="d7e35">
               <svrl:fired-rule xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
                  <xsl:attribute name="context">ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/hrextac:HRFISK20Data/hrextac:HRTaxTotal/hrextac:HRTaxSubtotal</xsl:attribute>
                  <xsl:variable name="documentUri" as="xs:anyURI?" select="document-uri()"/>
                  <xsl:if test="exists($documentUri)">
                     <xsl:attribute name="document" select="$documentUri"/>
                  </xsl:if>
               </svrl:fired-rule>
               <xsl:if test="not((((exists(hrextac:HRTaxCategory/cbc:ID)) or (hrextac:HRTaxCategory/cbc:ID = 'E') or (hrextac:HRTaxCategory/cbc:ID = 'O')) and (xs:decimal(cbc:TaxAmount) = 0)) or ((hrextac:HRTaxCategory/cbc:ID != 'E') and (hrextac:HRTaxCategory/cbc:ID != 'O')))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-28">
                     <xsl:attribute name="test">(((exists(hrextac:HRTaxCategory/cbc:ID)) or (hrextac:HRTaxCategory/cbc:ID = 'E') or (hrextac:HRTaxCategory/cbc:ID = 'O')) and (xs:decimal(cbc:TaxAmount) = 0)) or ((hrextac:HRTaxCategory/cbc:ID != 'E') and (hrextac:HRTaxCategory/cbc:ID != 'O'))</xsl:attribute>
                     <svrl:text>[HR-BR-28] - Za cac:TaxScheme = „VAT“ i kod porezne kategorije „E“ ili „O“ HR iznos porezne kategorije mora biti 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'S') and (hrextac:HRTaxCategory/cbc:Percent &gt; 0) or (hrextac:HRTaxCategory/cbc:ID != 'S'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-S-10">
                     <xsl:attribute name="test">(exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'S') and (hrextac:HRTaxCategory/cbc:Percent &gt; 0) or (hrextac:HRTaxCategory/cbc:ID != 'S')</xsl:attribute>
                     <svrl:text>[HR-BR-S-10] - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Standard rated" stopa PDV mora biti veća od 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'Z') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'Z'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-Z-10">
                     <xsl:attribute name="test">(exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'Z') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'Z')</xsl:attribute>
                     <svrl:text>[HR-BR-Z-10] - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Zero rated" stopa PDV mora biti 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'E') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'E'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-E-10">
                     <xsl:attribute name="test">(exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'E') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'E')</xsl:attribute>
                     <svrl:text>[HR-BR-E-10] - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Exempted - Oslobodjeno PDV" stopa PDV mora biti 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
               <xsl:if test="not((exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'AE') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'AE'))">
                  <svrl:failed-assert xmlns:svrl="http://purl.oclc.org/dsdl/svrl"
                                      location="{schxslt:location(.)}"
                                      flag="fatal"
                                      id="HR-BR-AE-10">
                     <xsl:attribute name="test">(exists(hrextac:HRTaxCategory/cbc:ID)) and (hrextac:HRTaxCategory/cbc:ID = 'AE') and (hrextac:HRTaxCategory/cbc:Percent = 0) or (hrextac:HRTaxCategory/cbc:ID != 'AE')</xsl:attribute>
                     <svrl:text>[HR-BR-AE-10] - Za svaku HR raspodjelu PDV u kojoj je kategorija PDV-a (HR-BT-18) "Prijenos porezne obveze" stopa PDV mora biti 0</svrl:text>
                  </svrl:failed-assert>
               </xsl:if>
            </schxslt:rule>
            <xsl:next-match>
               <xsl:with-param name="schxslt:patterns-matched"
                               as="xs:string*"
                               select="($schxslt:patterns-matched, 'd7e35')"/>
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
