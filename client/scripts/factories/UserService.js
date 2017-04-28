myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      $http.get('/user').then(function(response) {
        // console.log('logging response.data in get user: ', response.data);
          if(response.data.username) {
              // user has a curret session on the server
              userObject.id = response.data.id;
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName, userObject.id);
          } else {
              // user has no session, bounce them back to the login page
              $location.path('/login');
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path('/login');
        });
    }
  };
}]);
