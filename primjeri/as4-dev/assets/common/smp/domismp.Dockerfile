FROM tomcat:9-jre8 AS domismp-base

ENV TOMCAT_HOME=/usr/local/tomcat

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/edelivery/smp/5.1.1/smp-5.1.1.war ${TOMCAT_HOME}/webapps/smp.war
ADD https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.4.0/mysql-connector-j-8.4.0.jar ${TOMCAT_HOME}/lib/mysql-connector-j.jar

RUN ln -s ${TOMCAT_HOME}/lib ${TOMCAT_HOME}/libs
RUN echo "export CLASSPATH=/opt/smp/config" >> ${TOMCAT_HOME}/bin/setenv.sh
RUN mkdir -p /opt/smp /opt/smp/config /opt/smp/logs /opt/smp/security /opt/smp/libs

COPY assets/common/smp/smp.config.properties /opt/smp/config/

COPY assets/common/entrypoint.sh /opt/smp/
COPY assets/common/func.sh /opt/smp/
COPY assets/common/smp/setup.sh /opt/smp/

RUN chmod +x /opt/smp/entrypoint.sh

VOLUME /opt/smp/
CMD ["/opt/smp/entrypoint.sh"]
