FROM node:10-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npx", "serve", "-s", "-l", "5000", "dist"]

EXPOSE 5000
