FROM node:alpine
WORKDIR /code
COPY ./backend /code
RUN npm i -g @nestjs/cli
RUN npm install
