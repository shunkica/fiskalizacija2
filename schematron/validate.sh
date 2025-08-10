#!/bin/bash
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <xml-file>"
    echo "Example: $0 invoice.xml"
    exit 1
fi

XML_INPUT="$1"

# Handle wildcard case
if [ "$XML_INPUT" = "*" ]; then
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    XML_DIR="$SCRIPT_DIR/../docs/Primjeri_eRacuna"
    
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
else
    if [ ! -f "$XML_INPUT" ]; then
        echo "Error: File '$XML_INPUT' not found"
        exit 1
    fi
    XML_FILES=("$XML_INPUT")
fi

# Create reports directory if it doesn't exist
mkdir -p reports

IMAGE_NAME=schematron-validator

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
    REPORT_FILE="${TIMESTAMP}_${BASENAME}.report.xml"
    
    CONTAINER_NAME=schematron-validate-$$
    
    echo "Validating $(basename "$XML_FILE") against HR-BR.sch schematron..."
    
    # Run validation in container
    docker run --rm \
        --name $CONTAINER_NAME \
        -v "$(pwd)/reports:/opt/reports" \
        -v "$XML_FILE:/opt/input.xml:ro" \
        -v "$(pwd)/HR-BR.xsl:/opt/HR-BR.xsl:ro" \
        $IMAGE_NAME \
        java -jar /opt/saxon-he-12.7.jar -xsl:/opt/HR-BR.xsl -s:/opt/input.xml -o:/opt/reports/$REPORT_FILE
    
    echo "Report saved to: reports/$REPORT_FILE"
done

echo "Validation complete."
