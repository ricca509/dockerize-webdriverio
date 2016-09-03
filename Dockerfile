FROM node:6
ADD . /app
WORKDIR /app
RUN npm i