#!/bin/bash
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <xml-file>"
    exit 1
fi

INPUT_FILE="$1"

# Use original filename from environment variable if set, otherwise use basename of input file
if [ -n "$ORIGINAL_FILENAME" ]; then
    DISPLAY_NAME="$ORIGINAL_FILENAME"
    BASENAME="${ORIGINAL_FILENAME%.xml}"
else
    DISPLAY_NAME=$(basename "$INPUT_FILE")
    BASENAME=$(basename "$INPUT_FILE" .xml)
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "Validating $DISPLAY_NAME:"

# Detect document type (UBL or CII)
# Check CreditNote first, then Invoice (CreditNote docs may reference Invoice namespace)
if grep -q "urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2" "$INPUT_FILE"; then
    DOC_TYPE="UBL"
    UBL_TYPE="CreditNote"
elif grep -q "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" "$INPUT_FILE"; then
    DOC_TYPE="UBL"
    UBL_TYPE="Invoice"
elif grep -q "urn:un:unece:uncefact:data:standard:CrossIndustryInvoice" "$INPUT_FILE"; then
    DOC_TYPE="CII"
else
    echo "  ✗ Could not detect document type (UBL Invoice, UBL CreditNote, or CII)"
    exit 1
fi

# Run XSD validation for UBL documents
if [ "$DOC_TYPE" = "UBL" ]; then
    XSD_FILE="UBL-${UBL_TYPE}-2.1.xsd"
    
    # Run XSD validation using xmllint
    set +e
    XSD_RESULT=$(xmllint --noout --schema "/opt/xsd/ubl/maindoc/$XSD_FILE" "$INPUT_FILE" 2>&1)
    XSD_EXIT=$?
    set -e
    
    # Check if validation failed
    if [ $XSD_EXIT -ne 0 ] || echo "$XSD_RESULT" | grep -q "fails to validate"; then
        # Count validation errors (lines containing "validity error")
        ERROR_COUNT=$(echo "$XSD_RESULT" | grep -c "validity error" || echo "1")
        echo "  ✗ $XSD_FILE - errors ($ERROR_COUNT)"
        exit 1
    else
        echo "  ✓ $XSD_FILE"
    fi
fi

# Run EN16931 validation
if [ "$DOC_TYPE" = "UBL" ]; then
    REPORT_FILE="${TIMESTAMP}_${BASENAME}_EN16931-UBL.report.xml"
    
    java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/xslt/EN16931-UBL-validation.xslt \
        -s:"$INPUT_FILE" \
        -o:/opt/reports/$REPORT_FILE 2>/dev/null
    
    # Check for fatal errors using XSL transform
    VALIDATION_RESULT=$(java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/check-fatal-errors.xsl \
        -s:/opt/reports/$REPORT_FILE 2>/dev/null)
    
    # Count fatal errors
    FATAL_COUNT=$(grep '<svrl:failed-assert' "/opt/reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")
    
    if [ "$VALIDATION_RESULT" = "FATAL" ]; then
        echo "  ✗ EN16931-UBL-validation.xslt - failed asserts ($FATAL_COUNT)"
        java -jar /opt/saxon-he-12.7.jar -xsl:/opt/extract-errors.xsl -s:/opt/reports/$REPORT_FILE 2>/dev/null
        exit 1
    else
        echo "  ✓ EN16931-UBL-validation.xslt"
    fi
    
    # Run HR-specific validation for UBL
    REPORT_FILE="${TIMESTAMP}_${BASENAME}_HR-CIUS.report.xml"
    
    java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/xslt/HR_CIUS_EXT_EN16931_UBL.xslt \
        -s:"$INPUT_FILE" \
        -o:/opt/reports/$REPORT_FILE 2>/dev/null
    
    # Check for fatal errors
    VALIDATION_RESULT=$(java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/check-fatal-errors.xsl \
        -s:/opt/reports/$REPORT_FILE 2>/dev/null)
    
    # Count fatal errors
    FATAL_COUNT=$(grep '<svrl:failed-assert' "/opt/reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")
    
    if [ "$VALIDATION_RESULT" = "FATAL" ]; then
        echo "  ✗ HR_CIUS_EXT_EN16931_UBL.xslt - failed asserts ($FATAL_COUNT)"
        java -jar /opt/saxon-he-12.7.jar -xsl:/opt/extract-errors.xsl -s:/opt/reports/$REPORT_FILE 2>/dev/null
        exit 1
    else
        echo "  ✓ HR_CIUS_EXT_EN16931_UBL.xslt"
    fi

elif [ "$DOC_TYPE" = "CII" ]; then
    REPORT_FILE="${TIMESTAMP}_${BASENAME}_EN16931-CII.report.xml"
    
    java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/xslt/EN16931-CII-validation.xslt \
        -s:"$INPUT_FILE" \
        -o:/opt/reports/$REPORT_FILE 2>/dev/null
    
    # Check for fatal errors
    VALIDATION_RESULT=$(java -jar /opt/saxon-he-12.7.jar \
        -xsl:/opt/check-fatal-errors.xsl \
        -s:/opt/reports/$REPORT_FILE 2>/dev/null)
    
    # Count fatal errors
    FATAL_COUNT=$(grep '<svrl:failed-assert' "/opt/reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")
    
    if [ "$VALIDATION_RESULT" = "FATAL" ]; then
        echo "  ✗ EN16931-CII-validation.xslt - failed asserts ($FATAL_COUNT)"
        java -jar /opt/saxon-he-12.7.jar -xsl:/opt/extract-errors.xsl -s:/opt/reports/$REPORT_FILE 2>/dev/null
        exit 1
    else
        echo "  ✓ EN16931-CII-validation.xslt"
    fi
fi

echo ""
