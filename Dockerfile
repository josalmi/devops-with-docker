FROM node:8.9.4

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm i

RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "-l", "3000", "build"]