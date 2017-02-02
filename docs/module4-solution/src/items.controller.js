(function () {
'use strict';

angular.module('MenuData')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  console.log('items '  + items);
  var c =this;
  c.items = items;
}

})();
