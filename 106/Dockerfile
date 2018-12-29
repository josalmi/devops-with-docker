FROM node:10-alpine
ENV FRONT_URL http://localhost:5000
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clear --force
COPY . .
CMD ["npm", "start"]
EXPOSE 8000

