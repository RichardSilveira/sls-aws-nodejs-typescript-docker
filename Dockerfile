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


FROM node:14-alpine AS deploy

WORKDIR /app

COPY --from=build /app ./

CMD ["npm", "run", "deploy"]


FROM node:14-alpine AS local

WORKDIR /app

RUN apk add vim
RUN apk add bash

COPY --from=build /app ./

EXPOSE 4000
EXPOSE 9229
CMD ["npm", "run", "local"]
