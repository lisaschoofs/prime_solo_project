myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};

  var studentList = {
    students: []
  };

  function getStudents() {
    $http.get('/student').then(function(response){
      studentList.students = response.data;
    console.log('response.data in getStudents: ', response.data);
    console.log('studentList in getStudents: ', studentList);
  });
}

  return {
    userObject : userObject,
    studentList: studentList,
    getStudents: getStudents,

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName);
          } else {
              // user has no session, bounce them back to the login page
              $location.path('/home');
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path('/home');
        });
    }
  };
}]);
