var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

var config = {
  user: (process.env.PGUSER || 'lisaschoofs'), //env var: PGUSER
  database: (process.env.PGDATABASE || 'musicnotes'), //env var: PGDATABASE
  password: (process.env.PGPASSWORD || ''), //env var: PGPASSWORD
  port: (process.env.PGPORT || 5000), //env var: PGPORT
  host: (process.env.PGHOST || 'localhost'),
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // 1.5s // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
    name: req.body.name
  };
  console.log('new user:', saveUser);

  pool.connect(function(err, client, done) {
    if(err) {
      console.log('Error connecting: ', err);
      next(err);
    }
    client.query('INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING id',
      [saveUser.username, saveUser.password, saveUser.name],
        function (err, result) {
          client.end();

          if(err) {
            console.log('Error inserting data: ', err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});


module.exports = router;
