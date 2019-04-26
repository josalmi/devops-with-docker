FROM node:10-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV FRONT_URL http://localhost:5000

COPY . .
CMD ["npm", "start"]

EXPOSE 8000
