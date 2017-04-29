myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
//things provided by factories:
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = StudentService.getStudents;
  $scope.studentList = StudentService.studentList;
  $scope.studentObject = StudentService.studentObject;
  $scope.studentView = StudentService.studentView;
  $scope.addLesson = StudentService.addLesson;
  
//controller specifc fucntions
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };

  //runs getStudents function to get all students from the database
  $scope.getStudents();
  console.log('logging scope.studentList', $scope.studentList);

  // $scope.studentView();
}]);
