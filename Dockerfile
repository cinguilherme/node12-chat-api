FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build

EXPOSE 8080

CMD ["node", "dist/server.js"]