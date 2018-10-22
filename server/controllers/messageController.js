/**
 * Simple example for backend
 */
const fs = require('fs');
let messages = []
let simpleId = 0

export const createMessage = (req, res) => {
    const message = req.body.message || "Empty message"
    
    const logString = new Date().toLocaleString() + ": " + message + "\n"
    fs.appendFileSync('logs.txt', logString);
    const newMessage = {
        id: simpleId++,
        body: message
    }
    messages.push(newMessage)
    res.send(newMessage).end()
}