# Stage 1 - the build process
FROM node:8.11.1 as build-process

WORKDIR /usr/src/app

COPY package.json ./
ENV NODE_ENV production
RUN npm install --only=production

COPY . ./

RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine

COPY --from=build-process /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]