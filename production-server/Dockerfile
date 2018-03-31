FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install --save-dev

EXPOSE 9090

ENTRYPOINT npm run start