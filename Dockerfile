FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public
COPY src ./src
COPY tailwind.config.js ./tailwind.config.js

EXPOSE 3000

CMD [ "npm","run","dev" ]