(function () {
'use strict';

angular.module('menudata')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject =['$q','$http'];
function MenuDataService ($q, $http){
  var menudata = this;

  menudata.getAllCategories = function (){
    var deferred = $q.defer();

    $http({
           method: "GET",
           url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(result) {
       var items = result.data.menu_items;
       deferred.resolve(items);
     }).catch(function(err){
             deferred.reject(err);
     });//http
     return deferred.promise;
  }

  menudata.getItemsForCategory(category){
    var deferred = $q.defer();

    $http({
           method: "GET",
           url: "https://davids-restaurant.herokuapp.com/menu_items.json",
           params: {'category':category}
    }).then(function(result) {
 //      $filter('result')
      var items = result.data.menu_items;
      deferred.resolve(foundItems);
     }).catch(function(err){
             deferred.reject(err);
     });//http
     return deferred.promise;
  }

}
