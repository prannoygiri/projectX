FROM node:lts-alpine as base

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

FROM base as dev

RUN npm install -g pnpm@6.17.2 nodemon

USER node

CMD pnpm config set store-dir /home/node/.pnpm-store && pnpm i --shamefully-hoist && nodemon --trace-warnings
