var http = require('http');
var dateTime = require('./dateTime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Nodejs First Example:</h1>' + dateTime.myDateTime());
    res.end();
}).listen(8080);