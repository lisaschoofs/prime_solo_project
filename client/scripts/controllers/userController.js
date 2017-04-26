myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = UserService.getStudents;
  $scope.studentList = UserService.studentList;
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };
  $scope.addLesson = function() {
    $location.path('/addlesson');
  };
  
  $scope.getStudents();
  console.log('logging scope.studentList', $scope.studentList);
}]);
