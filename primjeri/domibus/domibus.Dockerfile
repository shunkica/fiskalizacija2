FROM bellsoft/liberica-runtime-container:jre-11-musl

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-distribution/5.1.8/domibus-msh-distribution-5.1.8-tomcat-full.zip /tmp/domibus.zip

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-distribution/5.1.8/domibus-msh-distribution-5.1.8-sample-configuration-and-testing.zip /tmp/domibus-sample.zip

RUN apk --no-cache add unzip && unzip /tmp/domibus.zip -d /opt/ && unzip /tmp/domibus-sample.zip -d /opt/domibus/ && rm /tmp/domibus.zip /tmp/domibus-sample.zip && apk del unzip

ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar /opt/domibus/lib/mysql-connector-j.jar

WORKDIR /opt/domibus

RUN echo "domibus.datasource.driverClassName=com.mysql.cj.jdbc.Driver" >> conf/domibus/domibus.properties && \
    echo "domibus.datasource.url=" >> conf/domibus/domibus.properties

ENV JAVA_OPTS "${JAVA_OPTS} -Ddomibus.config.location=/opt/domibus/conf/domibus -Dfile.encoding=UTF-8 -Xms128m -Xmx1024m"

ADD template/domibus-entrypoint.sh /opt/domibus/bin/entrypoint.sh

RUN chmod +x bin/entrypoint.sh bin/catalina.sh

CMD bin/entrypoint.sh
