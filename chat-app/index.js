const http = require('http')
const express = require('express')
const { Server } = require('socket.io')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('A new user has connected', socket.id)

    socket.on('user-message', message => {
        io.emit('message', message)
    })
})



app.use(express.static("D:/NodejsProjects/nodejsProject/chat-app/public"))

app.get('/', (req, res) => {
    return res.sendFile("D:/NodejsProjects/nodejsProject/chat-app/public/index.html")
})


server.listen(8000, (req, res) => {
    console.log('server is running')
})