var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool');

//Gets all lessons from database
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

          res.send(result.rows);

        } //ends else
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
      db.query('INSERT INTO "lessons" ("student", "date", "description", "email", "assigned") VALUES ($1, $2, $3, $4, FALSE);', [req.body.student.id, req.body.date, req.body.description, req.body.student.email], function(queryError, result){
        done();
        if (queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(201);

        } //ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router

//Update lesson property of 'assigned' to TRUE once email has been sent to student.
router.put('/assign/:id', function(req, res){
  console.log('logging req.body in router.put: ', req.body);
  console.log('req params in put: ', req.params);
  var lessonId= req.params.id;
  console.log('logging lessonId in put: ', lessonId);

  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      //NEED TO UPDATE QUERY for lesson update
      db.query("UPDATE lessons SET assigned = 'TRUE' WHERE id =" + lessonId, function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(201);
        } //ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router

//Update lesson details in edit mode.
// router.put('/:id', function(req, res){
//   console.log('logging req.body in router.put: ', req.body);
//   console.log('req params in put: ', req.params);
//   var lessonId= req.params.id;
//   console.log('logging lessonId in put: ', lessonId);
//
//   pool.connect(function(errorConnectingToDatabase, db, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to the database.');
//       res.send(500);
//     } else {
//       //NEED TO UPDATE QUERY for lesson update
//       db.query("UPDATE lessons SET assigned = 'TRUE' WHERE id =" + lessonId, function(queryError, result){
//         done();
//         if(queryError) {
//           console.log('Error making query.');
//           res.sendStatus(500);
//         } else {
//           console.log(result);
//           res.sendStatus(201);
//         } //ends else
//       }); //ends db query
//     } //ends else
//   }); //ends pool.connect
// }); //ends router

//Deletes lesson from the database by targeting ID
router.delete('/:id', function(req, res){
  console.log('logging req.body in router.delete: ', req.body);
  console.log('req params: ', req.params);
  var lessonId = req.params.id;

  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      db.query('DELETE FROM lessons WHERE id =' + lessonId, function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result);
          res.sendStatus(201);
        } //ends else
      }); //ends db query
    } //ends else
  }); //ends pool.connect
}); //ends router

module.exports = router;
