FROM node:23-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN echo "fake flag" > /flag.txt

EXPOSE 4000



CMD [ "npm","run","server" ]
