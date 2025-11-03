FROM rockylinux:9

ADD https://github.com/Saxonica/Saxon-HE/releases/download/SaxonHE12-7/SaxonHE12-7J.zip /saxon.zip
ADD https://codeberg.org/SchXslt/schxslt/releases/download/v1.10.1/schxslt-1.10.1-xslt-only.zip /schxslt.zip

RUN dnf install -y unzip java libxml2 && \
    unzip /saxon.zip -d /opt/ && \
    unzip /schxslt.zip -d /opt/ && \
    rm /saxon.zip /schxslt.zip && \
    dnf clean all

COPY docs/HRUBLValidator/HRUBLSchematron/ /opt/
COPY validacija/.build/assets/remove-timestamps.xsl /opt/

RUN java -jar /opt/saxon-he-12.7.jar -s:/opt/HR_CIUS_EXT_EN16931_UBL.sch -xsl:/opt/schxslt-1.10.1/2.0/compile-for-svrl.xsl -o:/opt/HR_CIUS_EXT_EN16931_UBL.timestamps.xslt

RUN java -jar /opt/saxon-he-12.7.jar -s:/opt/HR_CIUS_EXT_EN16931_UBL.timestamps.xslt -xsl:/opt/remove-timestamps.xsl -o:/opt/HR_CIUS_EXT_EN16931_UBL.xslt

COPY validacija/xslt/ /opt/xslt/
COPY validacija/xsd/ /opt/xsd/
COPY validacija/.build/assets/check-fatal-errors.xsl /opt/
COPY validacija/.build/assets/container-validate.sh /opt/validate.sh

RUN chmod +x /opt/validate.sh && \
    mkdir -p /opt/reports

WORKDIR /opt

ENTRYPOINT ["/opt/validate.sh"]
