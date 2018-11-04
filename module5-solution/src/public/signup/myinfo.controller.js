(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['signedUp', 'userInfo', 'SignUpService'];
function MyInfoController(signedUp, userInfo, SignUpService) {
  var $ctrl = this;
  $ctrl.signedUp = signedUp;
  $ctrl.userInfo = userInfo;

}

})();
