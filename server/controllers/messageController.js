import Message from '../models/message'
import fs from 'fs'

export const createMessage = async (req, res) => {
    try {
        const message = req.body.message || "Empty message"
        const logString = new Date().toLocaleString() + ": " + message + "\n"
        fs.appendFileSync('logs.txt', logString);

        if (!Message) return res.status(503).send('No database connection')
        Message.create({
            body: message
        })
        res.sendStatus(201).end()
    } catch (err) {
        console.log(err)
        console.log('Database connection suddenly dropped.')
        res.sendStatus(500).end()
    }
}

export const getMessages = async (req, res) => {
    try {
        if (!Message) return res.status(503).send('No database connection')
        const messages = await Message.findAll()
        res.send(messages).end()
    } catch (err) {
        console.log(err)
        console.log('Database connection suddenly dropped.')
        res.sendStatus(500).end()
    }
}