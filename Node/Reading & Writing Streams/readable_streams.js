var http = require('http');
var fs = require('fs');

var stream = fs.createReadStream(__dirname + '\\read.txt', 'utf8');

stream.on('data', (chunk) => {
    console.log(chunk);
    console.log("Chunk Recieved");
});
