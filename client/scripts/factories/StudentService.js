myApp.factory('StudentService',['$http', '$location', function($http, $location){

//all student from database
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


function studentView(student) {
  //sets studentObject.data equal to the student that was clicked.
  studentObject.data = student;
  //changes view to go to specific student's details
  $location.path('/mystudent');
}

function getLessons() {
  $http.get('/lesson').then(function(response){
    lessonList.lessons = response.data;
  // console.log('response.data in getLessons: ', response.data);
  // console.log('lessonList in getLessons: ', lessonList);
  // console.log(lesson.student);
}); //end httpget
}

function addLesson() {
  $location.path('/addlesson');
}

function viewDetails(lesson) {
  console.log('inside viewDetails function: ', lesson);
  lessonObject.data = lesson;
  console.log('logging lessonObject: ', lessonObject);
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
