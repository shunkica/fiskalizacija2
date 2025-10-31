#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

build_hr_xslt() {
  IMAGE_NAME=saxon-he-12-7
  CONTAINER_NAME=saxon-he-12-7
  OUTPUT_FILE=HR_CIUS_EXT_EN16931_UBL.xslt

  docker build -f Dockerfile -t $IMAGE_NAME ../../

  docker create --name $CONTAINER_NAME $IMAGE_NAME

  docker cp $CONTAINER_NAME:/opt/$OUTPUT_FILE ../xslt/

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

build_hr_xslt
download_external "https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/ubl/xslt/EN16931-UBL-validation.xslt" "../xslt/EN16931-UBL-validation.xslt"
download_external "https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/xslt/EN16931-CII-validation.xslt" "../xslt/EN16931-CII-validation.xslt"
