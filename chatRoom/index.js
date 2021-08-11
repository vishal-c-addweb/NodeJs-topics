const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/message');
const { userJoin, getCurrentUser,userLeave,getRoomUsers } = require('./utils/users');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

//ser static folder
app.use(express.static(path.join(__dirname,'public')));

const botName = 'Admin';

//Run when a client connect
io.on('connection',socket => {
    //console.log('New Ws Connection...');


    socket.on('joinRoom',({ username, room }) => {
        
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        
        //Welcome current user
        
        socket.emit('message', formatMessage(botName,'Welcome to ChatRoom!'));
        //Broadcast when a user connect.
        
        socket.broadcast.to(user.room).emit('message',
            formatMessage(botName,`${user.username} has joined the chatRoom`)
        );

        //sends users and room info
        io.to(user.room).emit('roomUsers',{
            room: user.room,
            users: getRoomUsers(user.room)
        });

    });

     //listen chat message
    socket.on('chatMessage',msg => {

        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message',
            formatMessage(user.username,msg)
        );

    });

    //Runs when client disconnect
    socket.on('disconnect',() => {

        const user = userLeave(socket.id);
        if(user){
            io.to(user.room).emit('message',
                formatMessage(botName,`${user.username} has left the chatRoom`)
            );

            //sends users and room info
            io.to(user.room).emit('roomUsers',{
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });

});

const PORT = 3000 || process.env.PORT;

server.listen(PORT,() => console.log(`server running on ${PORT}`));


