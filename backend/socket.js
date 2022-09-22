/* eslint-disable global-require */
let io;

const cors = {
    origin: ['http://localhost:3000', 'https://blendot.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

module.exports = {
    init: (server) => {
        io = require('socket.io')(server, cors);
        return io;
    },
    get: () => {
        if (!io) {
            throw new Error('Socket is not initialized...');
        }
        return io;
    }
};
