(function () {
'use strict';

angular.module('ShoppingLisCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyController = this;

  buyController.checkOffItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  //buyController.items = ShoppingListCheckOffService.getToBuyItems();

  buyController.getItems = function ()
  {
    return ShoppingListCheckOffService.getToBuyItems();
  }

  buyController.noItems = function()
  {
    return buyController.getItems().length == 0;
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtController = this;

  //boughtController.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  boughtController.getItems = function ()
  {
    return ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  boughtController.noItems = function()
  {
    return boughtController.getItems().length == 0;
  }
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "cookies",
      quantity: 20
    },
    {
      name: "cookies",
      quantity: 30
    },
    {
      name: "cookies",
      quantity: 40
    },
    {
      name: "cookies",
      quantity: 50
    }
  ];

  var alreadyBoughtItems = [];


  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    alreadyBoughtItems.push(item)
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
