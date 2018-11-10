(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['signedUp', 'userInfo', 'ApiPath','SignUpService'];
function MyInfoController(signedUp, userInfo, ApiPath, SignUpService) {
  var $ctrl = this;
  $ctrl.signedUp = signedUp;
  $ctrl.userInfo = userInfo;
  $ctrl.pathImages = ApiPath + "/images";
}

})();
