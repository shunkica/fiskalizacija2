#!/bin/bash
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <xml-file>"
    echo "Example: $0 invoice.xml"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

XML_INPUT="$1"

# Handle wildcard case
if [ "$XML_INPUT" = "*" ]; then
    XML_DIR="$SCRIPT_DIR/../../docs/Primjeri_eRacuna"

    if [ ! -d "$XML_DIR" ]; then
        echo "Error: Directory '$XML_DIR' not found"
        exit 1
    fi

    XML_FILES=($(find "$XML_DIR" -name "*.xml" -type f))

    if [ ${#XML_FILES[@]} -eq 0 ]; then
        echo "Error: No XML files found in '$XML_DIR'"
        exit 1
    fi

    echo "Found ${#XML_FILES[@]} XML files to validate..."
    echo ""
else
    if [ ! -f "$XML_INPUT" ]; then
        echo "Error: File '$XML_INPUT' not found"
        exit 1
    fi
    XML_FILES=("$XML_INPUT")
fi

# Create reports directory if it doesn't exist
mkdir -p reports

IMAGE_NAME=saxon-he-12-7

# Build Docker image if it doesn't exist
if ! docker images | grep -q $IMAGE_NAME; then
    echo "Building Docker image..."
    docker build -t $IMAGE_NAME .
fi

# Process each XML file
for XML_FILE in "${XML_FILES[@]}"; do
    # Generate timestamp for report filename
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    BASENAME=$(basename "$XML_FILE" .xml)

    CONTAINER_NAME=saxon-he-12-7

    echo "Validating $(basename "$XML_FILE"):"

    # Detect document type (UBL or CII)
    if grep -q "urn:oasis:names:specification:ubl" "$XML_FILE"; then
        DOC_TYPE="UBL"
    elif grep -q "urn:un:unece:uncefact:data:standard:CrossIndustryInvoice" "$XML_FILE"; then
        DOC_TYPE="CII"
    else
        echo "  ✗ Could not detect document type (UBL or CII)"
        echo ""
        continue
    fi

    # Run EN16931 validation
    if [ "$DOC_TYPE" = "UBL" ]; then
        REPORT_FILE="${TIMESTAMP}_${BASENAME}_EN16931-UBL.report.xml"
        
        docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports:/opt/reports" \
            -v "$XML_FILE:/opt/input.xml:ro" \
            -v "$(pwd)/../xslt/EN16931-UBL-validation.xslt:/opt/validation.xslt:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/validation.xslt -s:/opt/input.xml -o:/opt/reports/$REPORT_FILE 2>/dev/null

        # Check for fatal errors using XSL transform
        VALIDATION_RESULT=$(docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports/$REPORT_FILE:/opt/report.xml:ro" \
            -v "$(pwd)/check-fatal-errors.xsl:/opt/check-fatal-errors.xsl:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/check-fatal-errors.xsl -s:/opt/report.xml 2>/dev/null)

        # Count fatal errors
        FATAL_COUNT=$(grep -c '<svrl:failed-assert' "reports/$REPORT_FILE" | grep -v 'flag="warning"' || echo "0")
        if [ "$FATAL_COUNT" = "0" ]; then
            FATAL_COUNT=$(grep '<svrl:failed-assert' "reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")
        fi

        if [ "$VALIDATION_RESULT" = "FATAL" ]; then
            echo "  ✗ EN16931-UBL-validation.xslt - failed asserts ($FATAL_COUNT)"
            echo ""
            continue
        else
            echo "  ✓ EN16931-UBL-validation.xslt"
        fi

        # Run HR-specific validation for UBL
        REPORT_FILE="${TIMESTAMP}_${BASENAME}_HR-CIUS.report.xml"
        
        docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports:/opt/reports" \
            -v "$XML_FILE:/opt/input.xml:ro" \
            -v "$(pwd)/../xslt/HR_CIUS_EXT_EN16931_UBL.xslt:/opt/validation.xslt:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/validation.xslt -s:/opt/input.xml -o:/opt/reports/$REPORT_FILE 2>/dev/null

        # Check for fatal errors
        VALIDATION_RESULT=$(docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports/$REPORT_FILE:/opt/report.xml:ro" \
            -v "$(pwd)/check-fatal-errors.xsl:/opt/check-fatal-errors.xsl:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/check-fatal-errors.xsl -s:/opt/report.xml 2>/dev/null)

        # Count fatal errors
        FATAL_COUNT=$(grep '<svrl:failed-assert' "reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")

        if [ "$VALIDATION_RESULT" = "FATAL" ]; then
            echo "  ✗ HR_CIUS_EXT_EN16931_UBL.xslt - failed asserts ($FATAL_COUNT)"
        else
            echo "  ✓ HR_CIUS_EXT_EN16931_UBL.xslt"
        fi

    elif [ "$DOC_TYPE" = "CII" ]; then
        REPORT_FILE="${TIMESTAMP}_${BASENAME}_EN16931-CII.report.xml"
        
        docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports:/opt/reports" \
            -v "$XML_FILE:/opt/input.xml:ro" \
            -v "$(pwd)/../xslt/EN16931-CII-validation.xslt:/opt/validation.xslt:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/validation.xslt -s:/opt/input.xml -o:/opt/reports/$REPORT_FILE 2>/dev/null

        # Check for fatal errors
        VALIDATION_RESULT=$(docker run --rm \
            --name $CONTAINER_NAME \
            -v "$(pwd)/reports/$REPORT_FILE:/opt/report.xml:ro" \
            -v "$(pwd)/check-fatal-errors.xsl:/opt/check-fatal-errors.xsl:ro" \
            $IMAGE_NAME \
            java -jar /opt/saxon-he-12.7.jar -xsl:/opt/check-fatal-errors.xsl -s:/opt/report.xml 2>/dev/null)

        # Count fatal errors
        FATAL_COUNT=$(grep '<svrl:failed-assert' "reports/$REPORT_FILE" | grep -v 'flag="warning"' | wc -l || echo "0")

        if [ "$VALIDATION_RESULT" = "FATAL" ]; then
            echo "  ✗ EN16931-CII-validation.xslt - failed asserts ($FATAL_COUNT)"
        else
            echo "  ✓ EN16931-CII-validation.xslt"
        fi
    fi

    echo ""
done

echo "Validation complete."
