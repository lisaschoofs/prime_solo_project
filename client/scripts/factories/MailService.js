myApp.factory('MailService', ['$http', function($http){
  return {
    sendEmail: function(info){
      console.log('Info in sendEmail function: ', info);
      info.assigned = "TRUE";
      console.log('Updated info in sendEmail function: ', info);
      $http.post('/nodemailer', info).then(function(response){
        console.log('Email has been sent: ', response.data);
      });
    }
  };
}]);
