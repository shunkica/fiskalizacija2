FROM mysql:8-oraclelinux9

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/bdmsl/bdmsl-webapp/5.0/bdmsl-webapp-5.0-setup.zip /tmp/db.zip

RUN microdnf install -y unzip  \
    && unzip /tmp/db.zip -d /tmp/db  \
    && rm /tmp/db.zip  \
    && microdnf remove -y unzip  \
    && microdnf clean all \
    && cp /tmp/db/bdmsl-webapp-5.0/database-scripts/mysql.ddl /docker-entrypoint-initdb.d/1.sql \
    && cp /tmp/db/bdmsl-webapp-5.0/database-scripts/mysql-data.sql /docker-entrypoint-initdb.d/2.sql \
    && rm -rf /tmp/db \
    && chown -R mysql:mysql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=domisml \
    MYSQL_DATABASE=domisml \
    MYSQL_USER=domisml \
    MYSQL_PASSWORD=domisml
