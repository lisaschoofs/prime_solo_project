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

console.log('logging student object: ', $scope.studentObject);
//object for form to bind to.

  $scope.lesson = {};

$scope.deleteLesson = function(lesson) {
  //DELETE to delete lesson from database
  console.log('in deleteLesson');
  $http.delete('/lesson/' + lesson.id).then(function(response){
    console.log('back from the server with success!', response);
  });

};

//Creates Lesson when form is submitted on addlesson.html form.
// POST Route to SERVER
  $scope.saveLesson = function(lesson) {
    $scope.lesson = lesson;
    // $scope.lesson.date = moment(lesson.date).format("MMM Do, YYYY");
    //reformats date before it's sent to the database
    // $scope.lesson.date = moment(lesson.date).calendar('days');
    // console.log('logging scope.lesson: ', $scope.lesson);

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
};

//
$scope.assignLesson = function(lesson) {
  //POST saves lesson to database
  console.log('logging lesson.id in assignLesson: ', lesson.id);

  $http.put('/lesson/' + lesson.id).then(function(response){
    console.log('back from the server with success!', response);
    $location.path('/user');
    //sweetAlert creates success modal
    sweetAlert();

  });
  // sends email to student
    // $scope.sendEmail(lesson);   
};//ends assignLesson

//   $scope.submitForm = function(info){
//     $scope.sendEmail(info);
// };


}]);
