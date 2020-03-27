var http = require('http');
var fs = require('fs');

var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    console.log('Request was made at : ' + req.url);
    if (req.url === '/home' || req.url === '/') 
    {

        fs.createReadStream(__dirname + '\\index.html', 'utf8').pipe(res);
        
    } else if (req.url === '/api') {
        var name = [{
            name: 'Ishan',
            age: 19
        }, {
            name: 'John',
            age: 19
        }];
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(name));
    } else {
        fs.createReadStream(__dirname + '\\404.html', 'utf8').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening at port 3000');
