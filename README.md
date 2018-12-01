# backend-example-docker

This project is created to help learn docker configurations for backend projects.

# Prerequisites

Install [node](https://nodejs.org/en/download/). 

Example node install instructions for LTS node 10.x:
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
sudo apt install -y nodejs
```

Install all packages with `npm install`

# Starting in production mode

The following are needed from exercise 1.5 onward. Notice, that not everything is necessary for all the exercises.

## Exercise 1.5 onwards

To start the server in production mode: `npm start`

Test that the project is running by going to <http://localhost:8000>

## Exercise 1.6 and beyond

If your frontend is not running in the same origin, run the server with `FRONT_URL=<front-url> npm start` to allow cross-origin requests.

# Using redis - Part 2 onwards

Use redis by running the server with environment variable `REDIS=<hostname>`. For example `REDIS=localhost`. You can also define port with `REDIS_PORT=<port-number>`, defaults to 6379.

# Using database for messages

Use postgres database with environment variables
- `DB_USERNAME=<database user username>`
- `DB_PASSWORD=<database user password>`
- `DB_NAME=<database-name>` defaults to DB_USERNAME if not set.
- `DB_HOST=<hostname>` defaults to "localhost" if not set.
