var http = require('http');
var fs = require('fs');

var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var object = {
        name: 'Ishan',
        job: 'Developer',
        age: '19'
    };
    res.end(JSON.stringify(object));
});

server.listen(3000, '127.0.0.1');
console.log('Listening at port 3000');
