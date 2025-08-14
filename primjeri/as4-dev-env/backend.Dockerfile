FROM node:lts
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/ .
EXPOSE 3000
CMD ["npm", "start"]
