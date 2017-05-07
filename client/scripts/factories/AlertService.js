myApp.factory('AlertService', ['$http', '$location', function($http, $location){

function sweetAlertModal(customTitle, customText) {
  swal({
    title: customTitle,
    text: customText,
    type: 'success',
  });
}

return {
  sweetAlertModal: sweetAlertModal
};

}]);
