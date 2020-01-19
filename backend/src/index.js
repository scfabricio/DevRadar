const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./webSocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://dev:dev2020@cluster0-qzgp6.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)