# Etap 1: Budowanie aplikacji Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etap 2: Uruchamianie aplikacji na serwerze HTTP (np. Nginx)
FROM nginx:alpine
COPY --from=build /app/dist/my-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
