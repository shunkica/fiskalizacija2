#!/bin/bash

# Configuration
STOREPASS="test123"
KEYPASS="test123"
DEFAULT_DN="OU=Dev,O=Company,L=City,ST=State,C=HR"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_BASE_DIR="$(readlink -f "$SCRIPT_DIR/../template")" # Ensure absolute path for base output dir

# Function to generate a P12 keystore with a private key
# Args: alias, CN, keystore_path
generate_keystore_entry() {
    local alias="$1"
    local cn="$2"
    local keystore_path="$3"
    local dname="CN=$cn, $DEFAULT_DN"

    mkdir -p "$(dirname "$keystore_path")" # Ensure directory exists
    echo "Generating key pair for alias '$alias' (CN: $cn) in $keystore_path..."
    keytool -genkeypair -alias "$alias" -keyalg RSA -keysize 2048 -validity 3650 \
            -keystore "$keystore_path" -storepass "$STOREPASS" -keypass "$KEYPASS" \
            -dname "$dname" -storetype PKCS12
    if [ $? -ne 0 ]; then
        echo "Error generating key pair for $alias."
        exit 1
    fi
}

# Function to export a certificate from a keystore
# Args: alias, keystore_path, output_cert_path
export_cert() {
    local alias="$1"
    local keystore_path="$2"
    local output_cert_path="$3"

    mkdir -p "$(dirname "$output_cert_path")" # Ensure directory exists for cert export
    echo "Exporting certificate for alias '$alias' from $keystore_path to $output_cert_path..."
    keytool -exportcert -alias "$alias" -file "$output_cert_path" \
            -keystore "$keystore_path" -storepass "$STOREPASS" -rfc
    if [ $? -ne 0 ]; then
        echo "Error exporting certificate for $alias."
        exit 1
    fi
}

# Function to import a certificate into a truststore
# Args: alias, input_cert_path, truststore_path
import_cert_to_truststore() {
    local alias="$1"
    local input_cert_path="$2"
    local truststore_path="$3"

    mkdir -p "$(dirname "$truststore_path")" # Ensure directory exists
    echo "Importing certificate '$input_cert_path' as alias '$alias' into $truststore_path..."
    keytool -importcert -alias "$alias" -file "$input_cert_path" \
            -keystore "$truststore_path" -storepass "$STOREPASS" -noprompt -storetype PKCS12
    if [ $? -ne 0 ]; then
        echo "Error importing certificate $alias."
        exit 1
    fi
}

# Function to create an empty P12 truststore
# Args: truststore_path
create_empty_truststore() {
    local truststore_path="$1"

    mkdir -p "$(dirname "$truststore_path")" # Ensure directory exists
    echo "Creating empty truststore at $truststore_path..."
    # Create a dummy entry then delete it to ensure an empty but valid P12 truststore
    keytool -genkeypair -alias dummy -keyalg RSA -keysize 2048 -validity 1 \
            -keystore "$truststore_path" -storepass "$STOREPASS" -keypass "$KEYPASS" \
            -dname "CN=dummy, OU=Dev, O=Company, L=City, ST=State, C=HR" -storetype PKCS12
    if [ $? -ne 0 ]; then
        echo "Error creating dummy entry for empty truststore."
        exit 1
    fi
    keytool -delete -alias dummy -keystore "$truststore_path" -storepass "$STOREPASS"
    if [ $? -ne 0 ]; then
        echo "Error deleting dummy entry from truststore."
        exit 1
    fi
}

# --- Domismp Configuration ---
setup_domismp() {
    echo "--- Setting up Domismp ---"
    local smp_output_dir="$OUTPUT_BASE_DIR/smp/security"
    local keystore="$smp_output_dir/keystore.p12"
    local truststore="$smp_output_dir/truststore.p12"

    # 1. Keystore
    echo "Creating Domismp Keystore: $keystore"
    # Generate Root CA
    generate_keystore_entry "ca-smp-test" "CA_SMP_TEST" "$keystore"

    # Generate smp-test key pair
    generate_keystore_entry "smp-test" "SMP_TEST" "$keystore"

    # Create CSR for smp-test
    local smp_test_csr="$OUTPUT_BASE_DIR/tmp_smp-test.csr" # Use absolute path for temporary file
    echo "Generating CSR for smp-test..."
    keytool -certreq -alias smp-test -file "$smp_test_csr" -keystore "$keystore" -storepass "$STOREPASS"
    if [ $? -ne 0 ]; then echo "Error generating smp-test CSR."; exit 1; fi

    # Self-sign smp-test certificate with ca-smp-test
    local smp_test_signed_cert="$OUTPUT_BASE_DIR/tmp_smp-test.cer" # Use absolute path for temporary file
    echo "Signing smp-test certificate with ca-smp-test..."
    keytool -gencert -alias ca-smp-test -sigalg SHA256withRSA \
            -keystore "$keystore" -storepass "$STOREPASS" \
            -infile "$smp_test_csr" -outfile "$smp_test_signed_cert" -validity 3650
    if [ $? -ne 0 ]; then echo "Error signing smp-test cert."; exit 1; fi

    # Import the signed smp-test certificate back into the keystore
    echo "Importing signed smp-test certificate back into keystore..."
    keytool -importcert -alias smp-test -file "$smp_test_signed_cert" \
            -keystore "$keystore" -storepass "$STOREPASS" -storetype PKCS12 -noprompt
    if [ $? -ne 0 ]; then echo "Error importing signed smp-test cert."; exit 1; fi

    # Clean up temporary files
    rm -f "$smp_test_csr" "$smp_test_signed_cert"

    # 2. Truststore (empty)
    echo "Creating Domismp Truststore (empty): $truststore"
    create_empty_truststore "$truststore"
    echo "Domismp setup complete."
    echo ""
}

# --- Domisml Configuration ---
setup_domisml() {
    echo "--- Setting up Domisml ---"
    local sml_output_dir="$OUTPUT_BASE_DIR/sml/security"
    local keystore="$sml_output_dir/keystore.p12"
    local truststore="$sml_output_dir/truststore.p12"

    # 1. Keystore
    echo "Creating Domisml Keystore: $keystore"
    generate_keystore_entry "bdmsl" "BDMSL" "$keystore"

    # 2. Truststore (trusts Domismp)
    echo "Creating Domisml Truststore: $truststore"
    create_empty_truststore "$truststore"

    # Export Domismp certificates from their respective keystore
    local smp_keystore_path="$OUTPUT_BASE_DIR/smp/security/keystore.p12"
    local ca_smp_test_cert_tmp="$OUTPUT_BASE_DIR/tmp_ca-smp-test.cer" # Use absolute path for temporary file
    local smp_test_cert_tmp="$OUTPUT_BASE_DIR/tmp_smp-test.cer"     # Use absolute path for temporary file

    export_cert "ca-smp-test" "$smp_keystore_path" "$ca_smp_test_cert_tmp"
    export_cert "smp-test" "$smp_keystore_path" "$smp_test_cert_tmp"

    # Import Domismp certificates into Domisml truststore
    import_cert_to_truststore "ca-smp-test" "$ca_smp_test_cert_tmp" "$truststore"
    import_cert_to_truststore "smp-test" "$smp_test_cert_tmp" "$truststore"

    # Clean up temporary certs
    rm -f "$ca_smp_test_cert_tmp" "$smp_test_cert_tmp"
    echo "Domisml setup complete."
    echo ""
}

# --- Domibus (Blue & Red combined) Configuration ---
setup_domibus() {
    echo "--- Setting up Domibus (Blue & Red Combined) ---"
    local bus_output_dir="$OUTPUT_BASE_DIR/bus/security"
    local keystore="$bus_output_dir/keystore.p12"
    local truststore="$bus_output_dir/truststore.p12"

    # 1. Keystore
    echo "Creating Domibus Keystore: $keystore"
    generate_keystore_entry "blue_gw" "blue_gw" "$keystore"
    generate_keystore_entry "red_gw" "red_gw" "$keystore"

    # 2. Truststore (trusts Domismp, blue_gw, and red_gw)
    echo "Creating Domibus Truststore: $truststore"
    create_empty_truststore "$truststore"

    # Export Domismp certificates from their respective keystore for Domibus truststore
    local smp_keystore_path="$OUTPUT_BASE_DIR/smp/security/keystore.p12"
    local ca_smp_test_cert_for_domibus_tmp="$OUTPUT_BASE_DIR/tmp_domibus_ca-smp-test.cer" # Unique temp name
    local smp_test_cert_for_domibus_tmp="$OUTPUT_BASE_DIR/tmp_domibus_smp-test.cer"     # Unique temp name

    export_cert "ca-smp-test" "$smp_keystore_path" "$ca_smp_test_cert_for_domibus_tmp"
    export_cert "smp-test" "$smp_keystore_path" "$smp_test_cert_for_domibus_tmp"

    # Export Domibus gateway certificates from the *same* keystore (current domibus keystore)
    local blue_gw_cert_tmp="$OUTPUT_BASE_DIR/tmp_blue_gw.cer"
    local red_gw_cert_tmp="$OUTPUT_BASE_DIR/tmp_red_gw.cer"
    export_cert "blue_gw" "$keystore" "$blue_gw_cert_tmp"
    export_cert "red_gw" "$keystore" "$red_gw_cert_tmp"

    # Import all necessary certificates into Domibus truststore
    import_cert_to_truststore "ca-smp-test" "$ca_smp_test_cert_for_domibus_tmp" "$truststore"
    import_cert_to_truststore "smp-test" "$smp_test_cert_for_domibus_tmp" "$truststore"
    import_cert_to_truststore "blue_gw" "$blue_gw_cert_tmp" "$truststore"
    import_cert_to_truststore "red_gw" "$red_gw_cert_tmp" "$truststore"

    # Clean up temporary certs
    rm -f "$ca_smp_test_cert_for_domibus_tmp" "$smp_test_cert_for_domibus_tmp" "$blue_gw_cert_tmp" "$red_gw_cert_tmp"
    echo "Domibus setup complete."
    echo ""
}

# --- Main execution ---
echo "Starting certificate and keystore generation script..."
echo "Output base directory: $OUTPUT_BASE_DIR"
echo "Common password: $STOREPASS"
echo ""

# Run setup functions in order
setup_domismp
setup_domisml
setup_domibus

echo "All keystores and truststores have been generated in the '$OUTPUT_BASE_DIR' directory, structured as follows:"
echo "  - $OUTPUT_BASE_DIR/smp/security/keystore.p12"
echo "  - $OUTPUT_BASE_DIR/smp/security/truststore.p12"
echo "  - $OUTPUT_BASE_DIR/sml/security/keystore.p12"
echo "  - $OUTPUT_BASE_DIR/sml/security/truststore.p12"
echo "  - $OUTPUT_BASE_DIR/bus/security/keystore.p12"
echo "  - $OUTPUT_BASE_DIR/bus/security/truststore.p12"
echo ""
echo "Script finished."
