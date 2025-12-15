<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
    
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        <xsl:for-each select="//svrl:failed-assert[not(@flag='warning')] | //svrl:successful-report[not(@flag='warning')]">
            <xsl:text>    - </xsl:text>
            <xsl:value-of select="normalize-space(svrl:text)"/>
            <xsl:text>&#10;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
