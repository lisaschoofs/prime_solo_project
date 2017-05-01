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

          // console.log(result);
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
      db.query('INSERT INTO "lessons" ("student", "date", "description", "email") VALUES ($1, $2, $3, $4);', [req.body.student.id, req.body.date, req.body.description, req.body.student.email], function(queryError, result){
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

//Deletes lesson from the database
router.delete('/:id', function(req, res){
  console.log('logging req.body in router.delete: ', req.body);
  console.log('req params: ', req.params);
  var lessonId = req.params.id;
  // console.log('logging lessonId: ', lessonId);

  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      // deletes lesson from database, targeting by id
      db.query('DELETE FROM lessons WHERE id =' + lessonId, function(queryError, result){
      // db.query('DELETE FROM lessons WHERE id = 23', function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(201);
        }
      });
    }
  });
});

module.exports = router;
