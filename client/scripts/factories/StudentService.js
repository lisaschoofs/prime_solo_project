myApp.factory('StudentService',['$http', '$location', function($http, $location){

var studentList = {
  students: []
};

function getStudents() {
  $http.get('/student').then(function(response){
    studentList.students = response.data;
  console.log('response.data in getStudents: ', response.data);
  console.log('studentList in getStudents: ', studentList);
}); //end httpget
}// end getStudents

return {
  studentList: studentList,
  getStudents: getStudents
};

}]);
