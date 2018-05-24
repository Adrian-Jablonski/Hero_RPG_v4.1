var express = require("express");
var router = express.Router();

var myDatabase = require('../util/database.js');

var db = myDatabase.database;

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended :false}));
var fetch = require('node-fetch');
var request = require('request');

router.get('/screenshots', function(req, res) {
    if (req.isAuthenticated() === null){
        res.redirect('/login')
    }
    
    db.any('SELECT * FROM users').then(function(data){
        var user= req.user.username
        // res.render(page to render, object to pass to the page)
        res.render('screenshots',{
            pageTitle: "Highscores page",

            
            user : user
            
        });
    })
})


module.exports = router;