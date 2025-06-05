FROM mysql:8-oraclelinux9

ADD https://ec.europa.eu/digital-building-blocks/artifact/repository/public/eu/europa/ec/edelivery/smp/5.1.1/smp-5.1.1-setup.zip /tmp/db.zip

RUN microdnf install -y unzip  \
    && unzip /tmp/db.zip -d /tmp/db  \
    && rm /tmp/db.zip  \
    && microdnf remove -y unzip  \
    && microdnf clean all \
    && cp /tmp/db/smp-5.1.1/database-scripts/mysql5innodb.ddl /docker-entrypoint-initdb.d/1.sql \
    && cp /tmp/db/smp-5.1.1/database-scripts/mysql5innodb-data.sql /docker-entrypoint-initdb.d/2.sql \
    && rm -rf /tmp/db \
    && chown -R mysql:mysql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=domismp \
    MYSQL_DATABASE=domismp \
    MYSQL_USER=domismp \
    MYSQL_PASSWORD=domismp
