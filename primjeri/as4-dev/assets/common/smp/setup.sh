#!/bin/sh
set -e

. "$(dirname "$0")/func.sh"


DOMISMP_PROPERTIES="$APP_HOME/config/smp.config.properties"

set_config "$DOMISMP_PROPERTIES" "smp.jdbc.driver" "${DOMISMP_JDBC_DRIVER:-com.mysql.cj.jdbc.Driver}"
if [ -z "${DOMISMP_DB_HOST}" ]; then
  echo "Nije postavljen DOMISMP_DB_HOST"
  exit 1
fi
if [ -z "${MYSQL_DATABASE}" ]; then
  echo "Nije postavljen MYSQL_DATABASE"
  exit 1
fi
set_config "$DOMISMP_PROPERTIES" "smp.jdbc.url" "jdbc:mysql://${DOMISMP_DB_HOST}:${DOMISMP_DB_PORT:-3306}/${MYSQL_DATABASE}?serverTimezone=UTC"
set_config "$DOMISMP_PROPERTIES" "smp.jdbc.user" "${MYSQL_USER}"
set_config "$DOMISMP_PROPERTIES" "smp.jdbc.password" "${MYSQL_PASSWORD}"

# bdmsl integration
if [ -n "${BDMSL_INTEGRATION_ENABLED}" ]; then
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.enabled" "true"
  # eg: test.eracun.local
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.dns.zone" "${BDMSL_DNS_ZONE}"
  # eg: http://domismp:8080/smp/
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.logical.address" "${BDMSL_LOGICAL_ADDRESS}"
  # eg: http://domisml:8080/edelivery-sml
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.url" "${BDMSL_URL}"
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.naptr_service.map" "edelivery-oasis-cppa-3.0-cpp:meta:cppa3"
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.physical.address" "${BDMSL_PHYSICAL_ADDRESS:-0.0.0.0}"
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.tls.disableCNCheck" "false"
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.tls.serverSubjectRegex" ".*"
  set_config "$DOMISMP_PROPERTIES" "bdmsl.integration.tls.useSystemDefaultTruststore" "false"
fi

set_config "$DOMISMP_PROPERTIES" "encryption.key.filename" "${DOMISMP_ENCRYPTION_KEY_FILENAME:-encryptionPrivateKey.private}"
set_config "$DOMISMP_PROPERTIES" "smp.keystore.filename" "${DOMISMP_KEYSTORE_FILENAME:-keystore.p12}"
set_config "$DOMISMP_PROPERTIES" "smp.keystore.password" "{DEC}{${DOMISMP_KEYSTORE_PASSWORD:-test123}}"
set_config "$DOMISMP_PROPERTIES" "smp.keystore.type" "${DOMISMP_KEYSTORE_TYPE:-PKCS12}"
set_config "$DOMISMP_PROPERTIES" "smp.truststore.filename" "${DOMISMP_TRUSTSTORE_FILENAME:-truststore.p12}"
set_config "$DOMISMP_PROPERTIES" "smp.truststore.password" "{DEC}{${DOMISMP_TRUSTSTORE_PASSWORD:-test123}}"
set_config "$DOMISMP_PROPERTIES" "smp.truststore.type" "${DOMISMP_TRUSTSTORE_TYPE:-PKCS12}"

set_config "$DOMISMP_PROPERTIES" "smp.security.folder" "/opt/smp/security"
set_config "$DOMISMP_PROPERTIES" "smp.log.folder" "/opt/smp/logs"
set_config "$DOMISMP_PROPERTIES" "smp.libraries.folder" "/opt/smp/libs"
