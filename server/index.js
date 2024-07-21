const http = require('http');
const { Server } = require("socket.io");


const express = require('express');
const { randomPin } = require('./utils');
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    },
});

io.on('connection', (socket) => {
    const pin = randomPin();
    socket.on('create_pin', () => {
        socket.emit('create_pin_success', pin)
        socket.broadcast.emit('recieved_pin_success', pin)
    })
    socket.on('authorize_pin', (userInputPin, pin) => {
        if (userInputPin === pin) {
            socket.emit('authorize_pin_success')
            socket.broadcast.emit('authorize_pin_success')
        }
    })
    socket.on('update_formdata', (formData) => {
        socket.emit('update_formdata_success')
        socket.broadcast.emit('recieved_formdata_success', formData)
    })
  });

  const PORT = process.env.PORT || 4000;
  server.listen(PORT, () => {
    console.log(`Charlie is running on port ${PORT}`);
})