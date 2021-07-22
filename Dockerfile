FROM node:14-alpine AS build

WORKDIR /app

RUN apk add python

COPY package*.json ./

# Installing all dependencies regardless of NODE_ENV value
RUN npm ci --include=dev

COPY . ./

FROM node:14-alpine AS test

WORKDIR /app

COPY --from=build /app ./

CMD ["npm", "run", "test"]

FROM node:14-alpine AS package

ARG NODE_ENV=development
ARG STAGE
ARG REGION
ARG MY_SECRET
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV NODE_ENV=$NODE_ENV
ENV STAGE=$STAGE
ENV REGION=$REGION
ENV MY_SECRET=$MY_SECRET
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

WORKDIR /app

COPY --from=build /app ./

RUN mkdir logs && touch logs/package.log
RUN npm run package | tee logs/package.log

FROM node:14-alpine AS deploy

ARG NODE_ENV=development
ARG STAGE
ARG REGION
ARG MY_SECRET
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV NODE_ENV=$NODE_ENV
ENV STAGE=$STAGE
ENV REGION=$REGION
ENV MY_SECRET=$MY_SECRET
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

WORKDIR /app

COPY --from=package /app ./

CMD ["npm", "run", "deploy"]


FROM node:14-alpine AS local

WORKDIR /app

RUN apk add vim
RUN apk add bash

COPY --from=build /app ./

EXPOSE 4000
EXPOSE 9229
CMD ["npm", "run", "local"]
