FROM node:lts

WORKDIR /app/backend

COPY ./backend/local-entrypoint.sh /app/backend

COPY ./backend .

RUN chmod +x /app/backend/local-entrypoint.sh

EXPOSE 3001

ENTRYPOINT ["/app/backend/local-entrypoint.sh", "npm", "run", "dev"]