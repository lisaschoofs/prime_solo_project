myApp.controller('LessonController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  console.log('in LessonController');
  $scope.addLesson = function() {
    console.log('add lesson function running');
  };
}]);
