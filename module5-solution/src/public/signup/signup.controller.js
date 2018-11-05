(function () {

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['signedUp', 'SignUpService'];
function SignUpFormController(signedUp, SignUpService) {
  var reg = this;
  reg.signedUp = signedUp;

  reg.existsItemNumber = true;


  reg.submit = function () {
    SignUpService.registerUser(reg.user)
    .then(function(response) {
      reg.existsItemNumber = reg.signedUp = response;
    });
  };

}

})();
