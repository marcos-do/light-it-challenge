FROM node:lts

WORKDIR /app/backend

COPY ./backend/local-entrypoint.sh /app/backend

COPY ./backend .

RUN npm install

RUN npx prisma generate

RUN npx prisma generate init

RUN chmod +x /app/backend/local-entrypoint.sh

EXPOSE 3001

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]