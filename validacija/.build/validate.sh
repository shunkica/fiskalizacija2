#!/bin/bash
set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <xml-file|--primjeri>"
    echo "Example: $0 invoice.xml"
    echo "Example: $0 --primjeri"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

XML_INPUT="$1"

# Handle --primjeri flag
if [ "$XML_INPUT" = "--primjeri" ]; then
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
    # Get original filename for display
    ORIGINAL_FILENAME=$(basename "$XML_FILE")
    
    # Run validation in container
    docker run --rm \
        -e ORIGINAL_FILENAME="$ORIGINAL_FILENAME" \
        -v "$(pwd)/reports:/opt/reports" \
        -v "$XML_FILE:/opt/input.xml:ro" \
        $IMAGE_NAME \
        /opt/input.xml || true
done

echo "Validation complete."
