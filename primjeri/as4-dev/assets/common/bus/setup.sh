#!/bin/sh
set -e

. "$(dirname "$0")/func.sh"

DOMIBUS_PROPERTIES="$APP_HOME/conf/domibus/domibus.properties"

set_config "$DOMIBUS_PROPERTIES" "domibus.database.serverName" "$DOMIBUS_DB_HOST"
set_config "$DOMIBUS_PROPERTIES" "domibus.database.port" "${DOMIBUS_DB_PORT:-3306}"
set_config "$DOMIBUS_PROPERTIES" "domibus.database.schema" "$MYSQL_DATABASE"
set_config "$DOMIBUS_PROPERTIES" "domibus.datasource.user" "$MYSQL_USER"
set_config "$DOMIBUS_PROPERTIES" "domibus.datasource.password" "$MYSQL_PASSWORD"
set_config "$DOMIBUS_PROPERTIES" "domibus.datasource.driverClassName" "com.mysql.cj.jdbc.Driver"
set_config "$DOMIBUS_PROPERTIES" "domibus.datasource.url" "jdbc:mysql://\${domibus.database.serverName}:\${domibus.database.port}/\${domibus.database.schema}?useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true"

# Keystore/truststore configuration
set_config "$DOMIBUS_PROPERTIES" "domibus.security.keystore.location" "${DOMIBUS_KEYSTORE_LOCATION:-"\${domibus.config.location}/keystores/keystore.p12"}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.keystore.type" "${DOMIBUS_KEYSTORE_TYPE:-PKCS12}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.keystore.password" "${DOMIBUS_KEYSTORE_PASSWORD:-test123}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.key.private.alias" "${DOMIBUS_KEY_ALIAS}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.key.private.password" "${DOMIBUS_KEY_PASSWORD:-test123}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.truststore.location" "${DOMIBUS_TRUSTSTORE_LOCATION-"\${domibus.config.location}/keystores/truststore.p12"}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.truststore.type" "${DOMIBUS_TRUSTSTORE_TYPE:-PKCS12}"
set_config "$DOMIBUS_PROPERTIES" "domibus.security.truststore.password" "${DOMIBUS_TRUSTSTORE_PASSWORD:-test123}"

# Dynamic discovery configuration
set_config "$DOMIBUS_PROPERTIES" "domibus.dynamicdiscovery.useDynamicDiscovery" "true"
# eg: dev: hr.test.eracun.local demo: demo.ams.porezna-uprava.hr
set_config "$DOMIBUS_PROPERTIES" "domibus.smlzone" "$DOMIBUS_SMLZONE"
set_config "$DOMIBUS_PROPERTIES" "domibus.dynamicdiscovery.client.specification" "OASIS"
set_config "$DOMIBUS_PROPERTIES" "domibus.dynamicdiscovery.oasisclient.partyid.type" "urn:oasis:names:tc:ebcore:partyid-type:unregistered"
set_config "$DOMIBUS_PROPERTIES" "domibus.dynamicdiscovery.client.dns.lookup.types" "NAPTR"
set_config "$DOMIBUS_PROPERTIES" "domibus.dynamicdiscovery.transportprofileas4" "eracun-transport-as4-v1_0"

# Disable password generation for default admin user (INSECURE - for development purposes only)
set_config "$DOMIBUS_PROPERTIES" "domibus.passwordPolicy.checkDefaultPassword" "false"
set_config "$DOMIBUS_PROPERTIES" "domibus.passwordPolicy.defaultUser.autogeneratePassword" "false"

WSPLUGIN_CONF_FILE="$APP_HOME/conf/domibus/plugins/config/ws-plugin.properties"

if [ -n "$BACKEND_URL" ]; then
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.enabled" "true"
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.alert.active" "true"
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.rules.backend" "Default backend"
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.rules.backend.recipient" "" 1
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.rules.backend.endpoint" "$BACKEND_URL"
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.rules.backend.retry" "60;5;CONSTANT"
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.rules.backend.type" "RECEIVE_SUCCESS,RECEIVE_FAIL,SEND_SUCCESS,SEND_FAILURE,MESSAGE_STATUS_CHANGE,SUBMIT_MESSAGE,DELETED,DELETED_BATCH"
else
    set_config "$WSPLUGIN_CONF_FILE" "wsplugin.push.enabled" "false"
fi
