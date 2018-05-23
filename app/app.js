// import { TIMEOUT } from 'dns';

// ### Dependencies ###
var express = require('express');
var app = express();
var promise = require('bluebird');
var bodyParser = require('body-parser');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const bcrypt = require('bcryptjs');
var server = require('http').Server(app);
var io = require('socket.io').listen(server);







app.use(require("./routes/random"));

app.use(require("./routes/login"))
app.use(require("./routes/signup"))
app.use(require("./routes/userPage"))
app.use(require('./routes/logout'))
app.use(require('./routes/enemies'))
app.use(require('./routes/highscores'))
app.use(require('./routes/screenshots'))
app.use(require('./routes/howtoplay'))

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.static(__dirname + '/../game/'));

app.get('/play', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
   
   app.get('/test', function (req, res) {
    res.send('hello world')
  });

  function playerstats (data) {
    console.log("Node test", data);
    
  };



   io.on('connection', function (socket) {

    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
        });
      
    socket.on('playerStats', playerstats);
    // socket.on("players", onNewplayer);
 
 });




server.listen(3003, function () {
  console.log(`Listening on ${server.address().port}`);
});