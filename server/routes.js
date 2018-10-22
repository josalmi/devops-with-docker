import Router from 'express'
import { createMessage } from './controllers/messageController'
const fs = require('fs');
const router = Router()

router.get('/', (req, res) => {
    const logString = new Date().toLocaleString() + ": Connection received in root\n"
    fs.appendFileSync('logs.txt', logString);
    res.send('Port configured correctly, generated message in logs.txt')
})

router.get('/ping', (req, res) => res.send('pong'))
router.post('/messages', createMessage)

module.exports = router
