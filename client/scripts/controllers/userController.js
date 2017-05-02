myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
//things provided by factories:
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = StudentService.getStudents;
  $scope.studentList = StudentService.studentList;
  $scope.studentObject = StudentService.studentObject;
  $scope.studentView = StudentService.studentView;
  $scope.addLesson = StudentService.addLesson;

//controller specifc functions
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };

  //get all students from the database
  $scope.getStudents();

  // $scope.studentView();
}]);
