FROM node:16-alpine

RUN apk add --update bind-tools

WORKDIR /src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN chmod +x ./entrypoint.sh

CMD [ "./entrypoint.sh" ]