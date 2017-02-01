(function () {
'use strict';

angular.module('MenuData')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
var c =this;
  c.categories = '';
  this.test = 'antes init';

  //  this.$onInit = function(){
      var promise =MenuDataService.getAllCategories();
    //  console.log(promise);
      promise.then(function(response){
            console.log(response);
              c.categories = response;
             }).catch(function(error){
              console.log('Categorias error'  + error);
             });

    // }

}

})();
