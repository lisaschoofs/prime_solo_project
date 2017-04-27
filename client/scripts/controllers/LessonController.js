myApp.controller('LessonController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  console.log('in LessonController');
  $scope.addLesson = function() {
    console.log('add lesson function running');
    sweetAlert();
  };

// pop-up success alert once lesson has been added
  sweetAlert = function() {
    swal({
    title: 'Success!',
    text: 'Sweet, your lesson has been added!',
    type: 'success',
  });
    $location.path('/user');
};

}]);
