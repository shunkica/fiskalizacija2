FROM bellsoft/liberica-runtime-container:jre-11-musl

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-distribution/5.1.8/domibus-msh-distribution-5.1.8-tomcat-full.zip /tmp/domibus.zip

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-distribution/5.1.8/domibus-msh-distribution-5.1.8-sample-configuration-and-testing.zip /tmp/domibus-sample.zip

RUN apk --no-cache add unzip && \
    unzip /tmp/domibus.zip -d /opt/ && \
    unzip /tmp/domibus-sample.zip -d /opt/domibus/ && \
    rm /tmp/domibus.zip /tmp/domibus-sample.zip && \
    apk del unzip

ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar /opt/domibus/lib/mysql-connector-j.jar

WORKDIR /opt/domibus

ENV JAVA_OPTS "${JAVA_OPTS} -Ddomibus.config.location=/opt/domibus/conf/domibus -Dfile.encoding=UTF-8 -Xms128m -Xmx1024m"

COPY template/bus/entrypoint.sh /opt/domibus/bin/
COPY template/bus/logback.xml /opt/domibus/conf/domibus/
COPY template/bus/domibus.properties /opt/domibus/conf/domibus/
COPY template/bus/ws-plugin.properties /opt/domibus/conf/domibus/plugins/config/
COPY template/bus/security/keystore.p12 /opt/domibus/conf/domibus/keystores/
COPY template/bus/security/truststore.p12 /opt/domibus/conf/domibus/keystores/
RUN chmod u+w /opt/domibus/conf/domibus/keystores/

# Make scripts executable and create necessary directories
RUN chmod +x bin/entrypoint.sh bin/catalina.sh && \
    mkdir -p logs temp work webapps conf/Catalina/localhost data

CMD bin/entrypoint.sh
