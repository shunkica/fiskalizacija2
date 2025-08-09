#!/bin/bash
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <xml-file>"
    echo "Example: $0 invoice.xml"
    exit 1
fi

XML_FILE="$1"

if [ ! -f "$XML_FILE" ]; then
    echo "Error: File '$XML_FILE' not found"
    exit 1
fi

# Create reports directory if it doesn't exist
mkdir -p reports

# Generate timestamp for report filename
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_FILE="$TIMESTAMP.report.xml"

IMAGE_NAME=schematron-validator
CONTAINER_NAME=schematron-validate-$$

echo "Validating $XML_FILE against HR-BR.sch schematron..."

# Build Docker image if it doesn't exist
if ! docker images | grep -q $IMAGE_NAME; then
    echo "Building Docker image..."
    docker build -t $IMAGE_NAME .
fi

# Run validation in container
docker run --rm \
    --name $CONTAINER_NAME \
    -v "$(pwd)/reports:/opt/reports" \
    -v "$(pwd)/$XML_FILE:/opt/input.xml:ro" \
    -v "$(pwd)/HR-BR.xsl:/opt/HR-BR.xsl:ro" \
    $IMAGE_NAME \
    java -jar /opt/saxon-he-12.7.jar -xsl:/opt/HR-BR.xsl -s:/opt/input.xml -o:/opt/reports/$REPORT_FILE

echo "Validation complete. Report saved to: reports/$REPORT_FILE"
