var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool');
//base get for all students from students table in the DB
router.get('/', function(req, res) {

  pool.connect(function(error, db, done){
    if(error) {
      console.log("error connecting to the database.");
      res.send(500);

    } else {

      db.query('SELECT * FROM "students";', function(queryError, result){
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


// Handles new student post from StudentController's addStudent function
router.post('/', function(req, res) {
  console.log('logging req.body: ', req.body);
  pool.connect(function(error, db, done){
    if(error) {
      console.log("error connecting to the database.");
      res.send(500);

    } else {
        console.log('made it to else in router.post');
// UPDATE DB QUERY BELOW!
      db.query('INSERT INTO "students" ("name", "email", "instrument", "day", "teacher") VALUES ($1, $2, $3, $4, $5);', [req.body.name, req.body.email, req.body.instrument, req.body.day, req.body.teacher], function(queryError, result){
        done();
        if (queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          // console.log(result);
          res.sendStatus(201);

        }//ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router



module.exports = router;
