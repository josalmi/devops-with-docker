const redis = require('redis')
const { REDIS_PORT, REDIS } = require('../config')
const { promisify } = require('util');

let getAsync = async () => { }
let setAsync = async () => { }
if (REDIS) {
  try {
    console.log('Redis connection, initating..')
    const client = redis.createClient(REDIS_PORT, REDIS)
    getAsync = promisify(client.get).bind(client);
    setAsync = promisify(client.set).bind(client);
    console.log('Trying to set cache')
    setAsync("slow", "pong")
    console.log('Cache set successfully')
  } catch (err) {
    console.log('Problems connecting to redis, make sure you have the correct port!')
  }
}
module.exports = {
  getAsync,
  setAsync
}