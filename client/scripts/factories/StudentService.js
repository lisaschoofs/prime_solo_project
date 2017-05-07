myApp.factory('StudentService',['$http', '$location', function($http, $location){

//all students from database
var studentList = {
  students: []
};

//selected student from list
var studentObject = {
  data: '',
};

//all lessons from database
var lessonList = {
  lessons: []
};

//selected lesson from list
var lessonObject = {
  data: '',
};

//gets all students from the database
function getStudents() {
  $http.get('/student').then(function(response){
    studentList.students = response.data;
  console.log('studentList in getStudents: ', studentList);
}); //end httpget
}// end getStudents

//move to 'mystudent' view
function studentView(student) {
  //sets studentObject.data equal to the student that was clicked.
  studentObject.data = student;
  //changes view to go to specific student's details
  $location.path('/mystudent');
}

//gets all lessons from the database
function getLessons() {
  $http.get('/lesson').then(function(response){
    lessonList.lessons = response.data;
  });
}

//move to 'addlesson' view
function addLesson() {
  $location.path('/addlesson');
}

//move to 'updatelesson' view
function viewDetails(lesson) {
  //save the data of the lesson that was clicked
  lessonObject.data = lesson;
  $location.path('/updatelesson');
}

return {
  studentList: studentList,
  getStudents: getStudents,
  studentObject: studentObject,
  studentView: studentView,
  lessonList: lessonList,
  lessonObject: lessonObject,
  getLessons: getLessons,
  addLesson: addLesson,
  viewDetails: viewDetails
};

}]);
