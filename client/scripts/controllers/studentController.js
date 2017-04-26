myApp.controller('StudentController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('in StudentController');
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.student = {
    name: '',
    username: '',
    password: '',
    instrument: '',
    day: '',
  };

  $scope.addStudent = function(student) {
    console.log('add student function running');
    $http.post('/student', student).then(function(response){
      // $scope.getMessages();
      console.log('logging student within post: ', student);
      console.log('back from the server with success!', response);
      });
    };

}]);
