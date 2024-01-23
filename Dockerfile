FROM node:16.14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ionic build

RUN npm install -g http-server
CMD ["http-server", "/www"]