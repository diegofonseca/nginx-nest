FROM ubuntu:20.04 as ubuntu

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

FROM node:alpine

COPY --from=ubuntu /usr/bin/wait-for /usr/bin/wait-for

WORKDIR /code

COPY ./backend /code

RUN chmod +x 

RUN npm i -g @nestjs/cli
