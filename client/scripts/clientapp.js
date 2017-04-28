var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
      // controllerAs: 'login'
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController',
      // controllerAs: 'login'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      // controllerAs: 'user',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/newstudent', {
      templateUrl: '/views/templates/newstudent.html',
      controller: 'StudentController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/addlesson', {
      templateUrl: '/views/templates/addlesson.html',
      controller: 'LessonController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/mystudent', {
      templateUrl: '/views/templates/mystudent.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
