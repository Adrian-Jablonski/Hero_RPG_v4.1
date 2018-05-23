var express = require("express");
var router = express.Router();
var promise = require('bluebird');
var pgp = require('pg-promise')(options);

var connectionString = 'postgres://localhost:5432/rpg';
var db = pgp(connectionString);

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended :false}));
var fetch = require('node-fetch');
var request = require('request');

var options = {
    promiseLib : promise
}


router.get('/userPage',function(req,res){
    var symbol = req.body.stock_symbol
    
    var user= req.user.username
    if (req.isAuthenticated() === null){
        res.redirect('/login')
    }
    
    db.any('SELECT * FROM users').then(function(data){

        // res.render(page to render, object to pass to the page)
        res.render('userPage',{
            pageTitle: "User's Page",

            
            user : user
            
        });
    })
})


module.exports = router;
