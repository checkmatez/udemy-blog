FROM node:slim

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ ./

CMD ["node", "index.js"]
