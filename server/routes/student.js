var express = require('express');
var router = express.Router();
//took out passport
var path = require('path');
var pg = require('pg');

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
