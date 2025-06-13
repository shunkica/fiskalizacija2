FROM node:lts
WORKDIR /app
COPY client/package*.json ./
RUN npm install --omit=dev
COPY client/ .
EXPOSE 3000
CMD ["npm", "start"]
