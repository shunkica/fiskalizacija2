FROM domibus-base AS domibus-dev

COPY assets/dev/bus/security/keystore.p12 /opt/domibus/conf/domibus/keystores/
COPY assets/dev/bus/security/truststore.p12 /opt/domibus/conf/domibus/keystores/
RUN chmod u+w /opt/domibus/conf/domibus/keystores/

