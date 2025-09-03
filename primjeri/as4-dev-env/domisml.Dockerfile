FROM tomcat:10-jre21-temurin

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/bdmsl/bdmsl-webapp/5.0/bdmsl-webapp-5.0.war ${CATALINA_HOME}/webapps/edelivery-sml.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${CATALINA_HOME}/lib/mysql-connector-j.jar

RUN mkdir -p /opt/sml/config /opt/sml/security /opt/sml/logs /opt/sml/libs

COPY template/sml/context.xml ${CATALINA_HOME}/conf/Catalina/localhost/edelivery-sml.xml
COPY template/sml/sml.config.properties /opt/sml/config/
COPY template/sml/log4j2.xml /opt/sml/config/

COPY template/sml/security/encryptionPrivateKey.private /opt/sml/security/encriptionPrivateKey.private
COPY template/sml/security/keystore.p12 /opt/sml/security/
COPY template/sml/security/truststore.p12 /opt/sml/security/

RUN echo "export CLASSPATH=/opt/sml/config" >> ${CATALINA_HOME}/bin/setenv.sh

VOLUME /opt/sml/

COPY template/sml/entrypoint.sh /opt/sml/entrypoint.sh
RUN chmod +x /opt/sml/entrypoint.sh
CMD ["/opt/sml/entrypoint.sh"]
