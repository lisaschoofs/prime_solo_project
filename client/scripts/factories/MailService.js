myApp.factory('MailService', ['$http', function($http){

//function to send lesson email to student
function sendEmail(info) {
  console.log('Info in sendEmail function: ', info);
  //updates database value of assigned to TRUE in correlation with email.
  info.assigned = "TRUE";
  console.log('Updated info in sendEmail function: ', info);
  $http.post('/nodemailer', info).then(function(response){
    console.log('Email has been sent: ', response.data);
  });
}

  return {
    sendEmail: sendEmail
  };

}]);
