FROM tomcat:9-jre8

ENV TOMCAT_HOME /usr/local/tomcat

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/edelivery/smp/5.1.1/smp-5.1.1.war ${TOMCAT_HOME}/webapps/smp.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${TOMCAT_HOME}/lib/mysql-connector-j.jar

RUN ln -s ${TOMCAT_HOME}/lib ${TOMCAT_HOME}/libs

RUN echo "export CLASSPATH=\$CATALINA_HOME/smp" >> ${TOMCAT_HOME}/bin/setenv.sh

RUN mkdir -p ${TOMCAT_HOME}/smp

ADD template/smp.config.properties ${TOMCAT_HOME}/smp/smp.config.properties

VOLUME ${TOMCAT_HOME}/smp
