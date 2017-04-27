myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = StudentService.getStudents;
  $scope.studentList = StudentService.studentList;
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };
  $scope.addLesson = function() {
    $location.path('/addlesson');
  };
  $scope.studentView = function() {
    $location.path('/mystudent');
  };
  $scope.getStudents();
  console.log('logging scope.studentList', $scope.studentList);
}]);
