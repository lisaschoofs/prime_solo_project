myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
//things provided by factories:
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getStudents = StudentService.getStudents;
  $scope.studentList = StudentService.studentList;
  $scope.studentObject = StudentService.studentObject;
  $scope.studentView = StudentService.studentView;
  $scope.addLesson = StudentService.addLesson;

  //get all students from the database
  $scope.getStudents();

  $scope.orderByCategory = 'name';

  $scope.changeOrderBy = function(category) {
    $scope.orderByCategory = category;
    console.log($scope.orderByCategory);
  };

  $scope.newStudent = function() {
    $location.path('/newstudent');
  };



  // $scope.studentView();
}]);
