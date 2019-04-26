import Router from 'express'
import { createMessage, getMessages } from './controllers/messageController'
import redis from './redis'
const fs = require('fs');
const router = Router()

router.get('/', (req, res) => {
    const logString = new Date().toLocaleString() + ": Connection received in root\n"
    fs.appendFileSync('logs.txt', logString);
    res.send('Port configured correctly, generated message in logs.txt')
})

router.get('/ping', (req, res) => res.send('pong'))

const reallySlowApi = async () => new Promise((resolve, reject) => setTimeout(() => resolve("pong"), 11 * 1000))

router.get('/slow', async (req, res) => {
    let response = await redis.getAsync("slow")
    console.log('Got from redis', response)
    if (!response) {
        response = await reallySlowApi()
        redis.setAsync("slow", response)
    }
    res.send(response)
})

router.post('/messages', createMessage)
router.get('/messages', getMessages)

module.exports = router
