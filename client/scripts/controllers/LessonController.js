myApp.controller('LessonController', ['$scope', '$http', '$location', 'UserService', 'StudentService', function($scope, $http, $location, UserService, StudentService) {
  console.log('in LessonController');
  $scope.getStudents = StudentService.getStudents;
  $scope.getStudents();
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.studentObject = StudentService.studentObject;
  $scope.studentList = StudentService.studentList;

  console.log('logging studentList', $scope.studentList);

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
