myApp.controller('UserController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.newStudent = function() {
    $location.path('/newstudent');
  };
  $scope.addLesson = function() {
    $location.path('/addlesson');
  };
}]);
