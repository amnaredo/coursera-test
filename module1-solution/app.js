(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.message = "";
  $scope.lunchList = "";

  var countElements = function (text) {
    var stringSplitted = text.split(',');
    var counter = 0;
    var i = 0;
    for (i=0; i < stringSplitted.length; i++)
    {
      if (stringSplitted[i].trim().length > 0)
      {
        counter = counter + 1;
      }
    }
    return counter;
  };

  var  SelectMessage = function (count) {
    if (count == 0)
    {
      return "Please enter data first";
    }
    if (count < 4)
    {
      return "Enjoy!";
    }
    return "Too much!";
  };

  $scope.ShowMessage = function (){
    $scope.message = SelectMessage(countElements($scope.lunchList));
  };
}

})();
