myApp.factory('MailService', ['$http', function($http){

//function to send lesson email to student
function sendEmail(info) {
  //updates database value of assigned to TRUE in correlation with email.
  info.assigned = "TRUE";
  $http.post('/nodemailer', info).then(function(response){
  });
}
  return {
    sendEmail: sendEmail
  };

}]);
