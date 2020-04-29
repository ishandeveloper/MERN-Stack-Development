var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '\\read.txt', 'utf8');
var writestream = fs.createWriteStream(__dirname + '\\write.txt', 'utf8');

readstream.on('data', (chunk) => {
    console.log("Chunk Recieved");
    writestream.write(chunk);
});
