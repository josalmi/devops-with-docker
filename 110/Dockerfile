FROM node:10-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ARG API_URL
ENV API_URL ${API_URL:-http://localhost:8000}
COPY . .
RUN npm run build

CMD ["npx", "serve", "-s", "-l", "5000", "dist"]

USER node
EXPOSE 5000
