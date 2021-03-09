const express = require("express");
const http = require('http');
const path = require('path');
const socketio = require("socket.io")
const app = express();


const server = http.createServer(app);
const io = socketio(server);


//set static folder
app.use(express.static(path.join(__dirname,'public')));

//run when a client connects
io.on('connection',socket => {
    console.log("new WS connection setup....");
    socket.emit('message','Welcome to chatrooms');
    //Broadcast when a user connects
    socket.broadcast.emit('message',"A user has joined the chat");
    socket.on('disconnect',() => {
        io.emit('message','A user has left the chat');
    })

    
    //io.emit()
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT,()=>{
    console.log("server running on",PORT)
})