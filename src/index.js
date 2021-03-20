var express = require( 'express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection", (socket) => { //socket é o cliente
    socket.on("disconnect", () => {
        console.log("X desconectou: " + socket.id);
    });
});

app.set("view engine", 'ejs');

app.get('/',(req,res) => {
    res.render('index');
})


http.listen(3000, () => {
    console.log("dsaopdksapo");
})