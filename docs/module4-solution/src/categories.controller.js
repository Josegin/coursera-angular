(function () {
'use strict';

angular.module('MenuData')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {

  this.categories= MenuDataService.getAllCategories();
}

})();
