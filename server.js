const express = require("express");
const http = require('http');
const path = require('path');
const socketio = require("socket.io")
const app = express();
const formatMessage = require("./utils/messages");


const server = http.createServer(app);
const io = socketio(server);

const botName = "chatchord bot";


//set static folder
app.use(express.static(path.join(__dirname,'public')));

//run when a client connects
io.on('connection',socket => {
    console.log("new WS connection setup....");
    socket.emit('message',formatMessage(botName,'welcome to chatbot'));
    //Broadcast when a user connects
    socket.broadcast.emit('message',formatMessage(botName,'An user has joined the chat'));
    socket.on('disconnect',() => {
        io.emit('message',formatMessage(botName,'An user has left the chat'));
    })

    //listen for chat message
    socket.on('chatMessage',(msg)=>{
            console.log(msg);
            io.emit('message',formatMessage('USER',msg))
    })

    
    //io.emit()
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT,()=>{
    console.log("server running on",PORT)
})