FROM rockylinux:9

ADD https://github.com/Saxonica/Saxon-HE/releases/download/SaxonHE12-7/SaxonHE12-7J.zip /saxon.zip
ADD https://codeberg.org/SchXslt/schxslt/releases/download/v1.10.1/schxslt-1.10.1-xslt-only.zip /schxslt.zip

RUN dnf install -y unzip java  && \
    unzip /saxon.zip -d /opt/ && \
    unzip /schxslt.zip -d /opt/ && \
    rm /saxon.zip /schxslt.zip && \
    dnf clean all 

COPY HR-BR.sch /opt/

RUN java -jar /opt/saxon-he-12.7.jar -s:/opt/HR-BR.sch -xsl:/opt/schxslt-1.10.1/2.0/compile-for-svrl.xsl -o:/opt/HR-BR.xsl
