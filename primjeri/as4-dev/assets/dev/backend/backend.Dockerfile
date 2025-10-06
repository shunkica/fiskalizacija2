FROM node:lts

COPY assets/common/entrypoint.sh /bin/
COPY assets/common/func.sh /bin/

RUN chmod +x /bin/entrypoint.sh

WORKDIR /app

CMD ["/bin/entrypoint.sh"]

