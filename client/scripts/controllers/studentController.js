myApp.controller('StudentController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {

  $scope.userObject = UserService.userObject;
  $scope.daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  $scope.logout = UserService.logout;
  $scope.student = {
    name: '',
    email: '',
    instrument: '',
    day: '',
  };
//
  sweetAlert = function() {
    swal({
    title: 'Success!',
    text: 'Sweet, your student has been added!',
    type: 'success'
    // $location.path('/user')
  });
};

//POST route to add student to the database
  $scope.addStudent = function(student) {
      //adds id of current user/teacher to student
      student.teacher = $scope.userObject.id;
    $http.post('/student', student).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/user');
      sweetAlert();
      });
    };
}]);
