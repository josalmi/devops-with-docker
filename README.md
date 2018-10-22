# frontend-example-docker

This project is created to help learn docker configurations for frontend projects.

# Prerequisites

Install [node](https://nodejs.org/en/download/). 

Install all packages with `npm install`

# Starting in production mode

To build and serve in production mode: `npm start`
This builds the project in dist folder and serves it in port 5000.

You can alternatively build the project with `npm build` and then serve it in any way you want, for example:

To use a npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `npm serve -s -l 5000 dist`

By default the expected path to backend is /api. To manually configure api path run with `API_URL=<url> npm start|build`

Test that the project is running by going to <http://localhost:5000>

