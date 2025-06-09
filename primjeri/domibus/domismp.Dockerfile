FROM tomcat:9-jre8

ENV TOMCAT_HOME /usr/local/tomcat

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/edelivery/smp/5.1.1/smp-5.1.1.war ${TOMCAT_HOME}/webapps/smp.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${TOMCAT_HOME}/lib/mysql-connector-j.jar

RUN ln -s ${TOMCAT_HOME}/lib ${TOMCAT_HOME}/libs

RUN echo "export CLASSPATH=/opt/smp/config" >> ${TOMCAT_HOME}/bin/setenv.sh

RUN mkdir -p /opt/smp /opt/smp/config /opt/smp/logs /opt/smp/security /opt/smp/libs

COPY template/smp/smp.config.properties /opt/smp/config/
COPY template/smp/security/encryptionPrivateKey.private /opt/smp/security/
COPY template/smp/security/keystore.p12 /opt/smp/security/
COPY template/smp/security/truststore.p12 /opt/smp/security/


VOLUME /opt/smp/config
