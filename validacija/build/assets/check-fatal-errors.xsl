<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svrl="http://purl.oclc.org/dsdl/svrl">
    
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        <xsl:choose>
            <!-- Check for failed-assert elements that are NOT warnings -->
            <xsl:when test="//svrl:failed-assert[not(@flag='warning')]">
                <xsl:text>FATAL</xsl:text>
            </xsl:when>
            <!-- Check for successful-report elements that are NOT warnings -->
            <xsl:when test="//svrl:successful-report[not(@flag='warning')]">
                <xsl:text>FATAL</xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>OK</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
</xsl:stylesheet>
