const express = require('express')
const fs = require('fs')

const app = express()

const logsPath = '../../logs/' + Date.now() + '.log'

/**
 * 5000条200长度字符串：2.8s
 */
app.get('/appendFile', (req, res) => {
    const content = req.query.content
    fs.appendFile(logsPath, content + '\n', 'utf8', (err) => {
        res.send('ok')
    })
})

/**
 * 5000条200长度字符串：3.6s
 */
app.get('/appendFileSync', (req, res) => {
    const content = req.query.content
    fs.appendFileSync(logsPath, content + '\n', 'utf8')
    res.send('ok')
})

/**
 * 5000条200长度字符串：2.7s
 */
const stream = fs.createWriteStream(logsPath)
app.get('/writeStream', (req, res) => {
    stream.write(req.query.content + '\n', (err) => {
        res.send('ok')
    })
})

const server = app.listen(6000)
server.setTimeout(0)