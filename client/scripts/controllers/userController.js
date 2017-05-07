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

  //sort on page load set to sort by student first name
  $scope.orderByCategory = 'name';

  //changes orderBy category to whatever was clicked on view.
  $scope.changeOrderBy = function(category) {
    $scope.orderByCategory = category;
  };

  //move to 'newstudent' view
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };
  
}]);
