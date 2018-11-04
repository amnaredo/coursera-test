(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$q', '$http', 'ApiPath'];
function SignUpService($q, $http, ApiPath) {
  var service = this;


  service.userInfo = {};
  service.signedUp = false;

  service.checkSignUp = function () {
    var deferred = $q.defer();
    deferred.resolve(service.signedUp);
    // deferred.resolve(true);

    return deferred.promise;
  };

  service.registerUser = function (user)
  {
    var menuItem  = user.menuitem;
    return $http({
      url: ApiPath + "/menu_items/" + menuItem + ".json"
    }).then(function (response){
      service.userInfo = user;
      service.userInfo.menuItemData = response.data;
      service.signedUp = true;
      return  true;
    }, function (response){
      return false;
    });
  };

  service.getUserInfo = function ()
  {
    var deferred = $q.defer();
    deferred.resolve(service.userInfo);
    // deferred.resolve(true);

    return deferred.promise;

  };
  //
  // service.getCategories = function () {
  //   return $http.get(ApiPath + '/categories.json').then(function (response) {
  //     return response.data;
  //   });
  // };
  //
  //
  // service.getMenuItems = function (category) {
  //   var config = {};
  //   if (category) {
  //     config.params = {'category': category};
  //   }
  //
  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     return response.data;
  //   });
  // };

}



})();
