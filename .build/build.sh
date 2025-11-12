#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

build_hr_xslt() {
  IMAGE_NAME=saxon-he-12-7
  CONTAINER_NAME=saxon-he-12-7
  OUTPUT_FILE=HR_CIUS_EXT_EN16931_UBL.xslt

  docker build -f Dockerfile -t $IMAGE_NAME ../

  docker create --name $CONTAINER_NAME $IMAGE_NAME

  docker cp $CONTAINER_NAME:/opt/$OUTPUT_FILE ../validacija/xslt/

  docker rm $CONTAINER_NAME
}

download_external() {
    local url="$1"
    local dest="$2"
    local tmp="./temp_download.$RANDOM"

    if ! wget -O "$tmp" "$url"; then
        rm -f "$tmp"
        echo "Download failed"
        return 1
    fi

    local http_code
    http_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [[ "$http_code" =~ ^2 ]]; then
        mv "$tmp" "$dest"
        echo "Downloaded and moved to $dest"
    else
        rm -f "$tmp"
        echo "Server returned $http_code, not moving file"
        return 1
    fi
}

copy_ubl_schemas() {
    local source_dir="../docs/UBL2.1_eRacun/ubl"
    local dest_dir="../validacija/xsd/ubl"

    echo "Copying UBL schemas from $source_dir to $dest_dir..."

    if [ ! -d "$source_dir" ]; then
        echo "Source directory $source_dir not found"
        return 1
    fi

    mkdir -p "$dest_dir"

    if ! cp -r "$source_dir"/* "$dest_dir"/; then
        echo "Failed to copy UBL schemas"
        return 1
    fi

    echo "UBL schemas copied successfully"
}

download_cii_xsd() {
    local base_url="https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/master/cii/schema/D16B%20SCRDM%20(Subset)/uncoupled%20clm/CII/uncefact"
    local dest_dir="../validacija/xsd/cii"

    echo "Downloading CII XSDs to $dest_dir..."

    # Clean up old structure if it exists
    if [ -d "$dest_dir" ]; then
        echo "Removing old CII XSD files..."
        rm -rf "$dest_dir"
    fi

    mkdir -p "$dest_dir/data/standard"

    # Main data schema files (4 files) - using "decoupled" schema approach
    # These schemas define code lists inline and don't reference external codelist/identifierlist XSD files
    echo "Downloading CII schema files (decoupled approach)..."
    local data_files=(
        "CrossIndustryInvoice_100pD16B.xsd"
        "CrossIndustryInvoice_QualifiedDataType_100pD16B.xsd"
        "CrossIndustryInvoice_ReusableAggregateBusinessInformationEntity_100pD16B.xsd"
        "CrossIndustryInvoice_UnqualifiedDataType_100pD16B.xsd"
    )
    for f in "${data_files[@]}"; do
        download_external "$base_url/data/standard/$f" "$dest_dir/data/standard/$f"
    done

    echo "CII XSD download complete (4 files in data/standard/)."
    echo "Note: Using decoupled schema - codelist/identifierlist XSDs not required (saved 50 files)."
}

filter_fatal_only() {
    echo "Filtering EN16931 validation XSLTs to keep only fatal assertions..."

    IMAGE_NAME=saxon-he-12-7
    FILTER_XSL="assets/filter-fatal-only.xslt"
    XSLT_DIR="../validacija/xslt"

    # Ensure Saxon image is built
    if ! docker image inspect $IMAGE_NAME >/dev/null 2>&1; then
        echo "Saxon image not found, building..."
        docker build -f Dockerfile -t $IMAGE_NAME ../
    fi

    # Filter UBL validation XSLT
    echo "Processing EN16931-UBL-validation.xslt..."
    docker run --rm \
        --entrypoint java \
        -v "$PWD/$FILTER_XSL:/opt/filter.xslt:ro" \
        -v "$PWD/$XSLT_DIR:/opt/xslt" \
        $IMAGE_NAME \
        -jar /opt/saxon-he-12.7.jar \
        -s:/opt/xslt/EN16931-UBL-validation.xslt \
        -xsl:/opt/filter.xslt \
        -o:/opt/xslt/EN16931-UBL-fatal.xslt

    # Filter CII validation XSLT
    echo "Processing EN16931-CII-validation.xslt..."
    docker run --rm \
        --entrypoint java \
        -v "$PWD/$FILTER_XSL:/opt/filter.xslt:ro" \
        -v "$PWD/$XSLT_DIR:/opt/xslt" \
        $IMAGE_NAME \
        -jar /opt/saxon-he-12.7.jar \
        -s:/opt/xslt/EN16931-CII-validation.xslt \
        -xsl:/opt/filter.xslt \
        -o:/opt/xslt/EN16931-CII-fatal.xslt

    echo "Fatal-only XSLT files created successfully."
}

convert_spec_md() {
    echo "Converting specification JSON files to Markdown (dockerized Node)..."
    local NODE_IMAGE="node:20-alpine"
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$PWD:/work" \
        -v "$PWD/../specifikacija:/specifikacija" \
        -w /work \
        $NODE_IMAGE \
        sh -c "node assets/json2md.js"
    echo "Markdown conversion complete."
}

# Build HR CIUS XSLT
build_hr_xslt

# Download EN16931 validation XSLTs
download_external "https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/ubl/xslt/EN16931-UBL-validation.xslt" "../validacija/xslt/EN16931-UBL-validation.xslt"
download_external "https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/xslt/EN16931-CII-validation.xslt" "../validacija/xslt/EN16931-CII-validation.xslt"

# Copy UBL schemas from docs and download CII schemas
copy_ubl_schemas
download_cii_xsd

# Create fatal-only versions of EN16931 validation XSLTs
filter_fatal_only

# Convert specification JSON files to Markdown via docker
convert_spec_md
