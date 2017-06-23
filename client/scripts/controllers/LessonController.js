myApp.controller('LessonController', ['$scope', '$http', '$location', 'UserService', 'StudentService', 'MailService', 'AlertService', function($scope, $http, $location, UserService, StudentService, MailService, AlertService) {

  $scope.getStudents = StudentService.getStudents;
  $scope.getStudents();
  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.studentObject = StudentService.studentObject;
  $scope.studentList = StudentService.studentList;
  $scope.lessonList = StudentService.lessonList;
  $scope.lessonObject = StudentService.lessonObject;
  $scope.getLessons = StudentService.getLessons;
  $scope.addLesson = StudentService.addLesson;
  $scope.sendEmail = MailService.sendEmail;
  $scope.lessonObject = StudentService.lessonObject;
  $scope.viewDetails = StudentService.viewDetails;
  $scope.sweetAlertModal = AlertService.sweetAlertModal;

  //object for form to bind to.
  $scope.lesson = {};

  $scope.editing = {status: 'FALSE'};
  $scope.changeEditing = function() {
    $scope.editing.status = 'TRUE';
    $scope.lesson.id = $scope.lessonObject.data.id;
    $scope.lesson.assigned = 'FALSE';
    $scope.lesson.date = $scope.lessonObject.data.date;
    $scope.lesson.email = $scope.lessonObject.data.email;
    $scope.lesson.student = $scope.lessonObject.data.student;
  };

  //Deletes lesson from database, initiates location move and modal
  $scope.deleteLesson = function(lesson) {
    $http.delete('/lesson/' + lesson.id).then(function(response){
      console.log('back from the server with success!', response);
    });
    $scope.sweetAlertModal('No prob, bob!', 'Just like that, your lesson has been deleted.');
    $location.path('/user');
  };

  //Creates Lesson when form is submitted on addlesson.html form.
  $scope.saveLesson = function(lesson) {
    console.log('logging lesson in save lesson: ', lesson);
    $scope.lesson = lesson;
    //reformats date before it's sent to the database
    lesson.date = moment(lesson.date).calendar('days');
    $http.post('/lesson', lesson).then(function(response){
      console.log(response);
      $location.path('/user');
    });
    if (lesson.notify) {
      $scope.sendEmail(lesson);
      $scope.sweetAlertModal('Success!', 'Sweet, your lesson has been added & ' +
                              'your student has been emailed!', 'success');
    } else {
      $scope.sweetAlertModal('Success!', 'Sweet, your lesson has been added!', 'success');
    }
  }; //ends saveLesson function

  $scope.getLessons();

  //Updates lesson in database to be 'assigned', initiates sending of email
  $scope.assignLesson = function(lesson) {
    $scope.sendEmail(lesson);
    $http.put('/lesson/assign/' + lesson.id).then(function(response){
      $location.path('/user');
      $scope.sweetAlertModal('Success!', 'Sweet, your lesson has been emailed!');
    });
  };//ends assignLesson


//Updates lesson details from 'updatelesson' edit mode
  $scope.updateLesson = function(lesson) {
    lesson.date = moment(lesson.date).calendar('days');
    $http.put('/lesson/update/' + lesson.id, lesson).then(function(response){
      $location.path('/mystudent');
      $scope.sweetAlertModal('Success!', 'Awesome, your lesson has been updated!');
    });
  };//ends updateLesson

}]);
