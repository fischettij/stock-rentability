# The instructions for the first stage
FROM node:13-alpine as builder
# RUN apk --no-cache add python make g++

COPY package*.json ./
RUN yarn install --production

# The instructions for second stage
FROM node:13-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

CMD [ "yarn", "start" ]