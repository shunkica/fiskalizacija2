<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:dct="http://purl.org/dc/terms/"
                version="2.0">

  <xsl:output method="xml" indent="yes"/>

  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="dct:created"/>

  <xsl:template match="dct:Agent[not(* except dct:created)]"/>

</xsl:stylesheet>
