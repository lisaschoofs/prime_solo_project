var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
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
// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/'
    })
);

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
