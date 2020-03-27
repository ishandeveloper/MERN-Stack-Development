var http = require('http');
var fs = require('fs');

var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var readstream = fs.createReadStream(__dirname + '\\index.html', 'utf8');
    readstream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening at port 3000');
