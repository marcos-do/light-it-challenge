# Fetching the latest node image on apline linux
FROM node:alpine AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /app/frontend

# Installing dependencies
COPY ./frontend/package.json ./
RUN npm install

# Copying all the files in our project
COPY ./frontend .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/frontend/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]