const express = require('express')
const fs = require('fs')
const { EOL } = require('os')

const app = express()

const logsPath = '../../logs/' + Date.now() + '.log'

/**
 * 5000条200长度字符串：3.0s
 */
app.get('/writeFile', (req, res) => {
    const content = req.query.content
    fs.writeFile(logsPath, content + EOL, { flag: 'a', encoding: 'utf-8' }, (err) => {
        res.send('ok')
    })
})

/**
 * 5000条200长度字符串：2.8s
 * 10000条200长度字符串：炸
 */
app.get('/appendFile', (req, res) => {
    const content = req.query.content
    fs.appendFile(logsPath, content + EOL, 'utf8', (err) => {
        res.send('ok')
    })
})

/**
 * 10000条200长度字符串：8.061s
 */
app.get('/appendFileSync', (req, res) => {
    const content = req.query.content
    fs.appendFileSync(logsPath, content + EOL, 'utf8')
    res.send('ok')
})

/**
 * 10000条200长度字符串：10.238s
 */
const stream = fs.createWriteStream(logsPath, { flags: 'a' })
app.get('/writeStream', (req, res) => {
    stream.write(req.query.content + EOL, (err) => {
        res.send('ok')
    })
})

const server = app.listen(6000)
server.setTimeout(0)