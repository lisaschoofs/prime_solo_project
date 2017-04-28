myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
//things provided by factories:
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = StudentService.getStudents;
  $scope.studentList = StudentService.studentList;
  $scope.studentObject = StudentService.studentObject;

//controller specifc fucntions
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };

  $scope.addLesson = function() {
    $location.path('/addlesson');
  };

  $scope.studentView = function(student) {
    //need to update the studentObject with the data of the specifc student clicked within the studentList.
    console.log('logging what is passed into studentView: ', student);
    $scope.studentObject.id = student.id;
    console.log('logging studentObject', $scope.studentObject);
    $location.path('/mystudent');
  };

  //runs getStudents function to get all students from the database
  $scope.getStudents();
  console.log('logging scope.studentList', $scope.studentList);

}]);
