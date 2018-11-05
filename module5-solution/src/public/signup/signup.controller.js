(function () {

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['signedUp', 'SignUpService'];
function SignUpFormController(signedUp, SignUpService) {
  var reg = this;
  reg.signedUp = signedUp;


  reg.submit = function () {
    reg.signedUp = SignUpService.registerUser(reg.user);
    // reg.completed = true;
  };

}

})();
