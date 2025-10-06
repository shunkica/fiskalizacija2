FROM tomcat:10-jre21-temurin AS domisml-dev

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/bdmsl/bdmsl-webapp/5.0/bdmsl-webapp-5.0.war ${CATALINA_HOME}/webapps/edelivery-sml.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${CATALINA_HOME}/lib/mysql-connector-j.jar

RUN mkdir -p /opt/sml/config /opt/sml/security /opt/sml/logs /opt/sml/libs

COPY assets/dev/sml/context.xml ${CATALINA_HOME}/conf/Catalina/localhost/edelivery-sml.xml
COPY assets/dev/sml/sml.config.properties /opt/sml/config/
COPY assets/dev/sml/log4j2.xml /opt/sml/config/

COPY assets/dev/sml/security/encryptionPrivateKey.private /opt/sml/security/encriptionPrivateKey.private
COPY assets/dev/sml/security/keystore.p12 /opt/sml/security/
COPY assets/dev/sml/security/truststore.p12 /opt/sml/security/

RUN echo "export CLASSPATH=/opt/sml/config" >> ${CATALINA_HOME}/bin/setenv.sh

VOLUME /opt/sml/

COPY assets/common/entrypoint.sh /opt/sml/entrypoint.sh
COPY assets/common/func.sh /opt/sml/func.sh

RUN chmod +x /opt/sml/entrypoint.sh
CMD ["/opt/sml/entrypoint.sh"]
