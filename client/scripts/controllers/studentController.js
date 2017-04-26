myApp.controller('StudentController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('in StudentController');
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.addStudent = function() {
    console.log('add student function running');
  };
}]);
