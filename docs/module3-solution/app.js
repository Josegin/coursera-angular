(function () {
'use strict';

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems',foundItems)
  .service('MenuSearchService',MenuSearchService);


function foundItems(){
  var ddo = {
    	templateUrl: 'loader/itemsloaderindicator.template.html',
    	restrict: 'E',
      scope : {
        listaMenus:'<',
        onRemove:'&'
      }

    };
 return ddo;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var nidc = this;
  nidc.menus="";


  nidc.getMenu = function(dish){
    var promise = MenuSearchService.getMatchedMenuItems(dish);
    promise.then(function(response){
      nidc.menus = response;

       console.log('ok');
    }).catch(function(error){
       console.log('error');
    });
  }

  nidc.removeItem = function(index){
    console.log('removing');
    nidc.menus.splice(index,1);
  }

}

MenuSearchService.$inject=['$http', '$q'];
 function MenuSearchService($http,  $q){
   var search=this;

   search.getMatchedMenuItems = function(textFind){
     var deferred = $q.defer();
     var foundItems = [];

     $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
     }).then(function(result) {
  //      $filter('result')
      var items = result.data.menu_items;
        for (var i=0; i<items.length; i++){
          //    console.log('item ' , items[i].description);
               if(items[i].description.indexOf(textFind)>-1){
                 foundItems.push(items[i]);
               }
        }
              deferred.resolve(foundItems);
      }).catch(function(err){
              deferred.reject(err);
      });//http
      return deferred.promise;
   }
 }

})();
