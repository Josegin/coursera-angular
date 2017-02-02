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
     controller: 'CategoriesController as CatCtrl'
    //  resolve: {
    //
    //   items:['MenuDataService', function (MenuDataService) {
    //       //  return MenuDataService.getAllCategories();
    //             return [{name:'pavo'}, {name:'anchoa'}];
    //             // return MenuDataService.getAllCategories().then(function(response){
    //             //                     return [{name:'pavo'}, {name:'anchoa'}];
    //             //                     var items= new Array();
    //             //                     response.forEach(function(i){
    //             //                          items.push(i);
    //             //                        })
    //             //                        console.log('Categorias ok');
    //             //                        return items;
    //             //                     }).catch(function(error){
    //             //                   return error;
    //             //                    console.log('Categorias error'  + error);
    //             //                 });
    //   }]
    // }
  })

  .state('items', {
    url: '/category/{categoryName}',
    templateUrl: 'src/templates/items.template.html',
    controller: "ItemsController as ItemCtrl",
    resolve:{
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                      return  MenuDataService.getItemsForCategory($stateParams.categoryName)
                              .then(function (response) {
                                  // console.log(response.menu_items);
                                  return response.menu_items;
                              })
                         ;
                      }]
        }
  }).state('item', {
    url: '/category/{categoryName}/{itemid}',
    templateUrl: 'src/templates/item.template.html',
    controller: "SingleItemController as SingleItemCtrl",
    resolve:{
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                      return  MenuDataService.getItem ($stateParams.itemid)
                              .then(function (response) {
                                  // console.log(response.menu_items);
                                  return response;
                              })
                         ;
                      }]
        }
  });


}

})();
