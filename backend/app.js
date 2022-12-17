const http = require('http')

const express = require('express')

const server = http.createServer()

const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res, next) => {
    res.send(<h1>Can you see me?</h1>)
})

server.listen(5000)

