FROM node:10-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV FRONT_URL http://localhost:5000

COPY . .

RUN mkdir -p /app/node_modules/.cache && chown node:node /app/node_modules/.cache

CMD ["npm", "start"]
EXPOSE 8000
USER node
