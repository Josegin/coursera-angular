(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
     controller: 'CategoriesController as CatCtrl',
     resolve: {

      items:['MenuDataService', function (MenuDataService) {
          //  return MenuDataService.getAllCategories();
                return [{name:'pavo'}, {name:'anchoa'}];
                // return MenuDataService.getAllCategories().then(function(response){
                //                     return [{name:'pavo'}, {name:'anchoa'}];
                //                     var items= new Array();
                //                     response.forEach(function(i){
                //                          items.push(i);
                //                        })
                //                        console.log('Categorias ok');
                //                        return items;
                //                     }).catch(function(error){
                //                   return error;
                //                    console.log('Categorias error'  + error);
                //                 });
      }]
    }
  })

  // .state('mainList.itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/templates/item-detail.template.html',
  //   controller: "ItemDetailController as itemDetail"
  // });

}

})();
