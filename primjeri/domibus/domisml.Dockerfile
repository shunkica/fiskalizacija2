FROM tomcat:10-jre21-temurin

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/bdmsl/bdmsl-webapp/5.0/bdmsl-webapp-5.0.war ${CATALINA_HOME}/webapps/bdmsl.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${CATALINA_HOME}/lib/mysql-connector-j.jar

ADD template/context.xml ${CATALINA_HOME}/conf/Catalina/localhost/bdmsl.xml
ADD template/sml.config.properties ${CATALINA_HOME}/classes/sml.config.properties

RUN mkdir -p ${CATALINA_HOME}/classes ${CATALINA_HOME}/keystores ${CATALINA_HOME}/logs ${CATALINA_HOME}/domisml-libs \
    && echo "export CLASSPATH=\$CATALINA_HOME/classes" >> ${CATALINA_HOME}/bin/setenv.sh

VOLUME /opt/smlconf/
