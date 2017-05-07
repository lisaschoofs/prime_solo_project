myApp.controller('LoginController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {

    $scope.user = {
      username: '',
      password: '',
      name: ''
    };

    $scope.message = '';

    //logs in existing application user
    $scope.login = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = 'Please enter your username and password.';
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/user');
          } else {
            console.log('failure: ', response);
            $scope.message = 'Invalid Credentials - Please try again!';
          }
        });
      }
    };

    //registers new application user
    $scope.registerUser = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = 'Please Choose a username and password';
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/register', $scope.user).then(function(response) {
          console.log('success');
          $location.path('/home');
        },
        function(response) {
          console.log('error');
          $scope.message = 'Please try again';
        });
      }
    }
}]);
