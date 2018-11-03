(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsCategoryController', ItemsCategoryController);

ItemsCategoryController.$inject = ['items'];

function ItemsCategoryController(items)
{
  var $ctrl = this;
  $ctrl.items = items;
}

})();
