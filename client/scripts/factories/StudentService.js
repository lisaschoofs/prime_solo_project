myApp.factory('StudentService',['$http', '$location', function($http, $location){

var studentList = {
  students: []
};

//selected student from list
var studentObject = {
  data: '',
};

function getStudents() {
  $http.get('/student').then(function(response){
    studentList.students = response.data;
  console.log('response.data in getStudents: ', response.data);
  console.log('studentList in getStudents: ', studentList);
}); //end httpget
}// end getStudents

function studentView(student) {
  //need to update the studentObject with the data of the specifc student clicked within the studentList.
  console.log('logging what is passed into studentView: ', student);
  studentObject.data = student;
  console.log('logging studentObject', studentObject);
  $location.path('/mystudent');
}

return {
  studentList: studentList,
  getStudents: getStudents,
  studentObject: studentObject,
  studentView: studentView
};

}]);
