FROM mysql:8-oraclelinux9

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/eDelivery/eu/domibus/domibus-msh-sql-distribution/1.13/domibus-msh-sql-distribution-1.13.zip /tmp/db.zip

RUN microdnf install -y unzip  \
    && unzip /tmp/db.zip -d /tmp/db  \
    && rm /tmp/db.zip  \
    && microdnf remove -y unzip  \
    && microdnf clean all \
    && cp /tmp/db/sql-scripts/5.1.8/mysql/mysql-5.1.8.ddl /docker-entrypoint-initdb.d/1.sql \
    && cp /tmp/db/sql-scripts/5.1.8/mysql/mysql-5.1.8-data.ddl /docker-entrypoint-initdb.d/2.sql \
    && rm -rf /tmp/db \
    && chown -R mysql:mysql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=domibus \
    MYSQL_DATABASE=domibus \
    MYSQL_USER=edelivery \
    MYSQL_PASSWORD=edelivery
