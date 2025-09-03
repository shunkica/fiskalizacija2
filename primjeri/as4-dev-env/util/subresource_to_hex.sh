#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_DIR="$(readlink -f "$SCRIPT_DIR/../template")" # Ensure absolute path for base output dir

xxd -p "${TEMPLATE_DIR}/smp/subresources/blue_subresource.xml" | tr -d '\n' | sed 's/^/0x/' > "${TEMPLATE_DIR}/smp/subresources/blue_subresource.hex"
xxd -p "${TEMPLATE_DIR}/smp/subresources/red_subresource.xml" | tr -d '\n' | sed 's/^/0x/' > "${TEMPLATE_DIR}/smp/subresources/red_subresource.hex"
