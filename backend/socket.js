/* eslint-disable global-require */
const { Server } = require('socket.io');
let io;

module.exports = {
    init: (server) => {
        io = new Server(server, {
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST']
            }
        });
        return io;
    },
    get: () => {
        if (!io) {
            throw new Error('An error occured while starting socket.io...');
        }
    }
};
