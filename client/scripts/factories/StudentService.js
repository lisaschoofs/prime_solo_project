myApp.factory('StudentService',['$http', '$location', function($http, $location){

var studentList = {
  students: []
};

//selected student from list
var studentObject = {
  data: '',
};

var lessonList = {
  lessons: []
};

//selected student from list
var lessonObject = {
  data: '',
};


function getStudents() {
  $http.get('/student').then(function(response){
    studentList.students = response.data;
  console.log('response.data in getStudents: ', response.data);
  console.log('studentList in getStudents: ', studentList);
  console.log('studentObject.name', studentObject.name);
}); //end httpget
}// end getStudents


function studentView(student) {
  //need to update the studentObject with the data of the specifc student clicked within the studentList.
  console.log('logging what is passed into studentView: ', student);
  studentObject.data = student;
  console.log('logging studentObject in studentView function', studentObject);
  $location.path('/mystudent');
}

function getLessons() {
  $http.get('/lesson').then(function(response){
    lessonList.lessons = response.data;
    // for (var i = 0; i < lessonList.length; i++) {
    //   lessonList[i].lesson
    // }
  console.log('response.data in getLessons: ', response.data);
  console.log('lessonList in getLessons: ', lessonList);
  // console.log(lesson.student);
}); //end httpget
}

function addLesson() {
  $location.path('/addlesson');
}

return {
  studentList: studentList,
  getStudents: getStudents,
  studentObject: studentObject,
  studentView: studentView,
  lessonList: lessonList,
  lessonObject: lessonObject,
  getLessons: getLessons,
  addLesson: addLesson
};

}]);
