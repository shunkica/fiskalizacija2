FROM domismp-base AS domismp-dev

COPY assets/dev/smp/security/encryptionPrivateKey.private /opt/smp/security/
COPY assets/dev/smp/security/keystore.p12 /opt/smp/security/
COPY assets/dev/smp/security/truststore.p12 /opt/smp/security/
