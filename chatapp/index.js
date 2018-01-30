//express initializes app to be function handler
var app = require('express')();

//initialze socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//listen connection and disconnect event and output to console
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});


//http server should listen on following port
http.listen(3000, function(){
    console.log('listening on *:3000');
});

