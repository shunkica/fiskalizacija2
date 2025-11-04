<?xml version="1.0" encoding="UTF-8"?>
<!--
  XSLT Meta-Transformation: Filter Fatal-Only Assertions

  This stylesheet processes Schematron-generated XSLT validation files
  to remove all warning-level assertions, keeping only fatal ones.

  Usage: saxon -xsl:filter-fatal-only.xslt -s:input.xslt -o:output.xslt
-->
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svrl="http://purl.oclc.org/dsdl/svrl">

  <!-- Identity template: copy everything by default -->
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

  <!--
    Remove xsl:choose blocks that contain warning assertions.

    Schematron-generated XSLT wraps each validation rule in an xsl:choose block.
    We match xsl:choose elements that contain a descendant svrl:failed-assert
    or svrl:successful-report with flag="warning", and skip them entirely.
  -->
  <xsl:template match="xsl:choose[
    .//svrl:failed-assert/xsl:attribute[@name='flag' and text()='warning'] or
    .//svrl:successful-report/xsl:attribute[@name='flag' and text()='warning']
  ]">
    <!-- Skip this element entirely (don't copy it) -->
  </xsl:template>

</xsl:stylesheet>
