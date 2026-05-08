# مرحله 1: build React app
FROM node:20-alpine AS builder

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .

# expose port 5000 for the Express server
EXPOSE 5000

