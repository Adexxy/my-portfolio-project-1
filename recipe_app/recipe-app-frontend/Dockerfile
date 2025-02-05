# FROM node:16 AS builder
# WORKDIR /app 
# COPY package*.json ./
# RUN  npm install
# COPY . .
# RUN npm run build


# FROM nginx:alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;" ]




FROM nginx:alpine
COPY recipe_app/recipe-app-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

