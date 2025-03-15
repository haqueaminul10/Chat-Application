const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log(`user is connected id:${socket.id}`);
});

server.listen(4000, () => {
  console.log('backend server is running');
});
