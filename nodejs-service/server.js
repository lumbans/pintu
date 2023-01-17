const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

// health check
app.use('/', function(req, res) {
    res.send('Pong !!! eWelcome to Node JS Apps!!');
});

app.use('/node', function(req, res) {
    res.send('Welcome to Node JS Apps!!');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
