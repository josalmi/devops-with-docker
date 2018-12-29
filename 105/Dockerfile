FROM node:10-alpine
ENV API_URL http://localhost:8000
WORKDIR /app
COPY package*.json ./
RUN npm install --production && npm cache clear --force
COPY . .
CMD ["npm", "start"]
EXPOSE 5000

