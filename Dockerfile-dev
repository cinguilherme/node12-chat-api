FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3333

CMD ["node", "app/src/server.ts"]