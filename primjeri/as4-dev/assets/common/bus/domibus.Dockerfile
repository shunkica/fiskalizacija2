FROM bellsoft/liberica-runtime-container:jre-11-musl AS domibus-base

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-distribution/5.1.8/domibus-msh-distribution-5.1.8-tomcat-full.zip /tmp/domibus.zip

RUN apk --no-cache add unzip && unzip /tmp/domibus.zip -d /opt/ && rm /tmp/domibus.zip  && apk del unzip

ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar /opt/domibus/lib/mysql-connector-j.jar

WORKDIR /opt/domibus
VOLUME "/opt/domibus/conf"

ENV JAVA_OPTS "${JAVA_OPTS} -Ddomibus.config.location=/opt/domibus/conf/domibus -Dfile.encoding=UTF-8 -Xms128m -Xmx1024m"

COPY assets/common/entrypoint.sh /opt/domibus/bin/
COPY assets/common/func.sh /opt/domibus/bin/
COPY assets/common/bus/setup.sh /opt/domibus/bin/

# Make scripts executable and create necessary directories
RUN chmod +x bin/entrypoint.sh bin/catalina.sh && \
    mkdir -p logs temp work webapps conf/Catalina/localhost data

CMD bin/entrypoint.sh
