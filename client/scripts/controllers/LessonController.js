myApp.controller('LessonController', ['$scope', '$http', '$location', 'UserService', 'StudentService', 'MailService', function($scope, $http, $location, UserService, StudentService, MailService) {
  // console.log('in LessonController');
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

  $scope.editing = {status: 'FALSE'};
  $scope.changeEditing = function() {
    $scope.editing.status = 'TRUE';
  };

  console.log('logging userObject: ', $scope.userObject);
  console.log('logging student object: ', $scope.studentObject);
  //object for form to bind to.

  $scope.lesson = {};

  $scope.deleteLesson = function(lesson) {
    //DELETE to delete lesson from database
    console.log('in deleteLesson');
    $http.delete('/lesson/' + lesson.id).then(function(response){
      console.log('back from the server with success!', response);
    });
    swal({
      title: 'No prob, bob!',
      text: 'Just like that, your lesson has been deleted.',
      type: 'success',
    });
    $location.path('/user');
  };

  //Creates Lesson when form is submitted on addlesson.html form.
  // POST Route to SERVER
  $scope.saveLesson = function(lesson) {
    $scope.lesson = lesson;
    // $scope.lesson.date = moment(lesson.date).format("MMM Do, YYYY");
    //reformats date before it's sent to the database
    lesson.date = moment(lesson.date).calendar('days');
    console.log('logging scope.lesson: ', $scope.lesson);
    console.log('logging lesson before it goes to DB: ', lesson);

    //POST saves lesson to database
    $http.post('/lesson', lesson).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/user');
      //sweetAlert creates success modal
      sweetAlert();
    });
    //function that sends email to student with lesson information
    // $scope.sendEmail(lesson);
  }; //ends addLesson function

  $scope.getLessons();

  // pop-up success alert once lesson has been added
  sweetAlert = function() {
    swal({
      title: 'Success!',
      text: 'Sweet, your lesson has been added!',
      type: 'success',
    });
    $location.path('/user');
  };//ends saveLesson

  //
  $scope.assignLesson = function(lesson) {
    //POST saves lesson to database
    console.log('logging lesson.id in assignLesson: ', lesson.id);
    $scope.sendEmail(lesson);

    $http.put('/lesson/' + lesson.id).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/user');
      //sweetAlert creates success modal
      swal({
        title: 'Success!',
        text: 'Sweet, your lesson has been emailed!',
        type: 'success',
      });
    });
    // sends email to student
    // $scope.sendEmail(lesson);
  };//ends assignLesson

}]);
