FROM node:10-alpine as dev
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
CMD npm run dev

FROM dev as build-deps
RUN npm run build

FROM fholzer/nginx-brotli:latest as prod
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx/* /etc/nginx/
