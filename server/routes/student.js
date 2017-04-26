var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var config = {
  user: 'lisaschoofs', //env var: PGUSER
  database: 'musicnotes', //env var: PGDATABASE
  password: '', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 1500, // 1.5s // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

// Handles new student post from StudentController's addStudent function
router.post('/', function(req, res) {
  console.log(req.body);
  pool.connect(function(error, db, done){
    if(error) {
      console.log("error connecting to the database.");
      res.send(500);

    } else {

// UPDATE DB QUERY BELOW!
      db.query('INSERT INTO "tasks" ("description", "status") VALUES ($1,$2);', [description, status], function(queryError, result){
        done();
        if (queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(201);

        }//ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router

module.exports = router;
