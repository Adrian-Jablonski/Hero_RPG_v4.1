var express = require("express");
var router = express.Router();
var promise = require('bluebird');
var bcrypt = require('bcryptjs')

var options = {
    promiseLib : promise
}
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/rpg';
//might need to change database name in order to merge
var db = pgp(connectionString);
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended :false}));

router.post('/characterStats', function (req, res) { // Creates an API so that our front end can access our database
    let user = req.user.username;

    db.any(`SELECT * FROM users WHERE (username = '${user}')`).then(function (userData) {
        res.json({'userData': userData});
    })
})

module.exports = router;