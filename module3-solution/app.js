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
      onRemove: '&'
	},
  };
  return ddo;
}


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var controller = this;

  //controller.found = [];
  
  controller.NarrowItDown = function () {
    //console.log("searchTerm = " + $scope.searchTerm);
	
    MenuSearchService.getMatchedMenuItems($scope.searchTerm).then( function (result){
	  controller.found = result;
	  //console.log ("Found "  + controller.found.length + " items: " + controller.found);
	});
	
  };

  controller.onRemove = function (index) {
    //console.log ("llamada a onRemove");
    controller.found.splice(index, 1);
  };
  
  controller.notFound = function () {
    return controller.found && controller.found.length == 0;
	//console.log(controller.found.length + " AAAA");
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
    
	return promise.then(function (response) 
	{
	  // process result and only keep items that match
      var foundItems = [];
	  
	  if (searchTerm && searchTerm.length > 0)
	  {
	  var allItems = response.data.menu_items;
	  var i = 0;
	  for (i=0; i<allItems.length; i++)
	  {
	  
	      var menuItem = allItems[i];
          var menuItemDescription = menuItem.description;
		  var foundTerm = menuItemDescription.indexOf(searchTerm) >= 0;
		  
		  if (foundTerm)
		  {
		    //console.log(menuItem);
		    foundItems.push(menuItem);
		  }
	  }
	  }
      //console.log ("Found "  + foundItems.length + "  items: " + foundItems);
      // return processed items
      return foundItems;
	});
	
  
  };
 
}

})();
