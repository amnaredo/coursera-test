(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', MenuSearchResultDirective);
//.constant("RestaurantEndpoint", "https://davids-restaurant.herokuapp.com/menu_items.json");


function MenuSearchResultDirective()
{
  var ddo = {
    templateUrl: 'foundItems.html',
	controller: NarrowItDownController,
	controllerAs: 'ctrl',
	bindToController: true,
	scope: {
	  found: '<',
      onRemove: '@'
	},
  };
  return ddo;
};


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var controller = this;

  controller.found = [];
  
  controller.NarrowItDown = function () {
    console.log("searchTerm = " + $scope.searchTerm);
    controller.found = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
  };

  controller.onRemove = function (index) {
    controller.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) 
  {
    var promise = $http({
	  method: "GET",
	  url: "https://davids-restaurant.herokuapp.com/menu_items.json"
	});
    
	return promise.then(function (result) 
	{
	  // process result and only keep items that match
      var foundItems = [];
	  var allItems = result.data;
	  var i = 0;
	  for (i=0; i<allItems.length; i++)
	  {
	  
	      var menuItem = allItems[i];
          var menuItemDescription = menuItem.description;
		  var foundTerm = (menuItemDescription.indexOf(searchTerm) >= 0);
		  
		  if (foundTerm)
		  {
		    foundItems.push(menuItem);
		  }
	  }

      // return processed items
      return foundItems;
	
	});
	
  
  };
 
}





})();
