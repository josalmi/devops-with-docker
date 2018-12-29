import express from 'express'
import bodyParser from 'body-parser'
import { PORT, FRONT_URL } from '../config'
import routes from './routes'

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONT_URL);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use('/', routes)

app.listen(PORT, () => { console.log(`Started on port ${PORT}`) })