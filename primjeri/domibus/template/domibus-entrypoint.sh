#!/bin/sh

CONF_FILE="/opt/domibus/conf/domibus/domibus.properties"

if [ -z "$DOMIBUS_DB_HOST" ]; then
  echo "Error: DOMIBUS_DB_HOST is not set. Please set it to the database host."
  exit 1
fi

sed -i "s/^domibus.database.serverName=.*/domibus.database.serverName=${DOMIBUS_DB_HOST}/" "$CONF_FILE"
sed -i "s|^domibus.datasource.url=.*|domibus.datasource.url=jdbc:mysql://${DOMIBUS_DB_HOST}:${DOMIBUS_DB_PORT:-3306}/${DOMIBUS_DB_NAME:-domibus}?useSSL=false\&useLegacyDatetimeCode=false\&serverTimezone=UTC\&allowPublicKeyRetrieval=true|" "$CONF_FILE"

[ -n "$DOMIBUS_DB_PORT" ] && sed -i "s/^domibus.database.port=.*/domibus.database.port=${DOMIBUS_DB_PORT}/" "$CONF_FILE"
[ -n "$DOMIBUS_DB_NAME" ] && sed -i "s/^domibus.database.name=.*/domibus.database.name=${DOMIBUS_DB_NAME}/" "$CONF_FILE"
[ -n "$DOMIBUS_DB_USER" ] && sed -i "s/^#domibus.datasource.user=.*/domibus.datasource.user=${DOMIBUS_DB_USER}/" "$CONF_FILE"
[ -n "$DOMIBUS_DB_PASSWORD" ] && sed -i "s/^#domibus.datasource.password=.*/domibus.datasource.password=${DOMIBUS_DB_PASSWORD}/" "$CONF_FILE"
[ -n "$DOMIBUS_KEYSTORE_PASSWORD" ] && sed -i "s/^domibus.security.keystore.password=.*/domibus.security.keystore.password=${DOMIBUS_KEYSTORE_PASSWORD}/" "$CONF_FILE"
[ -n "$DOMIBUS_KEY_ALIAS" ] && sed -i "s/^domibus.security.key.private.alias=.*/domibus.security.key.private.alias=${DOMIBUS_KEY_ALIAS}/" "$CONF_FILE"
[ -n "$DOMIBUS_KEY_PASSWORD" ] && sed -i "s/^domibus.security.key.private.password=.*/domibus.security.key.private.password=${DOMIBUS_KEY_PASSWORD}/" "$CONF_FILE"
[ -n "$DOMIBUS_TRUSTSTORE_PASSWORD" ] && sed -i "s/^domibus.security.truststore.password=.*/domibus.security.truststore.password=${DOMIBUS_TRUSTSTORE_PASSWORD}/" "$CONF_FILE"

[ -n "$DOMIBUS_RED_HOSTNAME" ] && sed -i "s/red_hostname/${DOMIBUS_RED_HOSTNAME}/g" /opt/domibus/conf/pmodes/domibus-gw-sample-pmode-blue.xml
[ -n "$DOMIBUS_BLUE_HOSTNAME" ] && sed -i "s/blue_hostname/${DOMIBUS_BLUE_HOSTNAME}/g" /opt/domibus/conf/pmodes/domibus-gw-sample-pmode-red.xml


exec bin/catalina.sh run
