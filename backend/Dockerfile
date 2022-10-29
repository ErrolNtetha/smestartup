FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn", "run", "devStart"]
