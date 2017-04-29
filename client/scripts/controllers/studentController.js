myApp.controller('StudentController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  // console.log('in StudentController');
  $scope.userObject = UserService.userObject;

  console.log('logging userObject', $scope.userObject);
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

  $scope.addStudent = function(student) {
      console.log('add student function running');
      student.teacher = $scope.userObject.id;
    $http.post('/student', student).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/user');
      sweetAlert();
      });
    };
}]);
