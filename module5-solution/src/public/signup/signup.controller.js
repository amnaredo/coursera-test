(function () {

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['signedUp', 'userInfo', 'SignUpService'];
function SignUpFormController(signedUp, userInfo, SignUpService) {
  var reg = this;
  reg.signedUp = signedUp;
  reg.userInfo = userInfo;


  reg.submit = function () {
    reg.signedUp = SignUpService.registerUser(reg.user);
    // reg.completed = true;
  };

}

})();
