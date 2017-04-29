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

//gets all lessons from database
router.get('/', function(req, res) {

  pool.connect(function(error, db, done){
    if(error) {
      console.log("error connecting to the database.");
      res.send(500);

    } else {

      db.query('SELECT * FROM "lessons";', function(queryError, result){
        done();
        if (queryError) {
          console.log('Error making query.');
          res.send(500);
        } else {

          console.log(result);
          res.send(result.rows);
          //rows is the array of objects. result would give us more info than we need.
        }//ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router.get


// Handles new lesson post from LessonController's addLesson function
router.post('/', function(req, res) {
  console.log('logging req.body: ', req.body);
  pool.connect(function(error, db, done){
    if(error) {
      console.log("error connecting to the database.");
      res.send(500);

    } else {
        console.log('made it to else in router.post');
// UPDATE DB QUERY BELOW!
      db.query('INSERT INTO "lessons" ("student", "date", "description") VALUES ($1, $2, $3);', [req.body.student, req.body.date, req.body.description], function(queryError, result){
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
