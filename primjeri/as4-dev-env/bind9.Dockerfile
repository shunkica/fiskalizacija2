FROM ubuntu:24.10

RUN apt-get update  \
    && apt-get install -y bind9 bind9utils  dnsutils \
    && rm -rf /var/lib/apt/lists/*

COPY template/bind/db.test.eracun.local /etc/bind/
COPY template/bind/named.conf /etc/bind/
COPY template/bind/named.conf.local /etc/bind/

EXPOSE 53/udp 53/tcp

CMD ["named", "-f", "-g", "-c", "/etc/bind/named.conf"]
