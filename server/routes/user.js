var express = require('express');
var router = express.Router();
var passport = require('passport');
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

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    console.log('checking /user route ');
    if(req.isAuthenticated()) {
        // send back user object from database
        res.send(req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logout();
  res.sendStatus(200);
});


module.exports = router;
