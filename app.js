const http = require('http');

const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('In the middle war');
    next();
})

app.use((req, res, next) => {
    console.log('Another middle war');
})

const server = http.createServer(app);

server.listen(9000);