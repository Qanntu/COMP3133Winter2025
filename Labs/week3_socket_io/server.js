// npm install express socket.io nodemon
// to run the app npx nodemon server.js

const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3000

//import socket Server object from socket.io module
const { Server } = require('socket.io')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})

//associate app server with socket server
const io = new Server(appServer)

//on() function listens to connection event
//when the event occurs , callback is executed
io.on("connection", (socket) => {
    console.log(`Client conected. Client ID : ${socket.id}`);

    //listen for 'ping' event
    socket.on('ping', (data) => {
        console.log(`ping event received from client. data : ${data}`);

        //trigger hello event from server to client
        socket.emit('hello' , 'hello from server')
    })

    //listen for 'chat-message' event
    socket.on('chat-message', (data) => {
        console.log(`Chat message received from client : ${data}`);

        //acknowledge message receipt
        socket.emit('chat-acknowledgement')
    })

    socket.on('send-feedback', (data) => {
        console.log(`Feedback received from client : ${JSON.stringify(data)}`);
        
        // //group all the feedback based on category
        // socket.join(data.category)

        // //trigger event for all members in a group
        // io.to(data.category).emit('new-policy', 'policy updates.')

        socket.emit(
            'feedback-ack', 
            { message: `Thanks for your feedback. We appreciate it.`}
        )
    })

    socket.on("disconnect", () => {
        console.log(`Client disconnected. \nClient Id : ${socket.id}
        \nPerform necessary wind up operations.`);
    })
})