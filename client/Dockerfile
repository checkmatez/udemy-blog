FROM node:slim

ENV CI=true

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ ./

CMD ["yarn", "start"]
