const redis = require('redis')
const { REDIS_PORT, REDIS } = require('../config')
const { promisify } = require('util');

let getAsync = async () => { }
let setAsync = async () => { }
try {
  if (REDIS) {
    const client = redis.createClient(REDIS_PORT, REDIS)
    getAsync = promisify(client.get).bind(client);
    setAsync = promisify(client.set).bind(client);
  }
} catch (err) {
  console.log('Problems connecting to redis, make sure you have the correct port')
}
module.exports = {
  getAsync,
  setAsync
}