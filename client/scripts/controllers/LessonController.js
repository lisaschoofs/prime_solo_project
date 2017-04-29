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

  // console.log('logging studentList in LessonController', $scope.studentList);
console.log('logging student object: ', $scope.studentObject);
//object for form to bind to.
  $scope.lesson = {};

//Creates Lesson when form is submitted on addlesson.html form.
// POST Route to SERVER
  $scope.saveLesson = function(lesson) {
    $scope.lesson = lesson;
    $scope.lesson.date = moment(lesson.date).subtract(10, 'days').calendar();
    console.log('add lesson function running');
    console.log('logging lesson: ', lesson);
    console.log('logging scope.lesson: ', $scope.lesson);

    $http.post('/lesson', lesson).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/user');
      sweetAlert();
      });
    $scope.sendEmail();
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
};

//   $scope.submitForm = function(info){
//     $scope.sendEmail(info);
// };


}]);
