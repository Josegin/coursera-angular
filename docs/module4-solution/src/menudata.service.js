(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject =['$q','$http'];
function MenuDataService ($q, $http){

  this.getAllCategories = function (){

  //  return [{name:'pavo'}, {name:'anchoa'}];
    var deferred = $q.defer();
    var items;
    $http({
           method: "GET",
           url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(result) {
        items =  result.data;
       deferred.resolve(items);
     }).catch(function(err){
             deferred.reject(err);
     });//http

     return deferred.promise;
  }

  this.test = function(){
    return "test Service";
  }

  this.getItemsForCategory = function(category){
    var deferred = $q.defer();

    $http({
           method: "GET",
           url: "https://davids-restaurant.herokuapp.com/menu_items.json",
           params: {'category':category}
    }).then(function(result) {
 //      $filter('result')
      var items = result.data;
      deferred.resolve(items);
     }).catch(function(err){
             deferred.reject(err);
     });//http
     return deferred.promise;
  }

  this.getItem = function(category, itemId){
    var deferred = $q.defer();

    $http({
           method: "GET",
           url: "https://davids-restaurant.herokuapp.com/menu_items.json",
           params: {'category':category}
    }).then(function(result) {
 //      $filter('result')
      var items = result.data;
      deferred.resolve(items);
     }).catch(function(err){
             deferred.reject(err);
     });//http
     return deferred.promise;
  }
}
})();
