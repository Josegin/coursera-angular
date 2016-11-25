// (function () {
// 'use strict';
//
// angular.module('LunchCheck', [])
//
//   .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject=["$scope"];
//
//   function LunchCheckController($scope){
//
//     $scope.countDishes = function(){
//
//       if (!$scope.dishes){
//            $scope.msgDishes="Please enter data first";
//            $scope.msgStyle = {'color':'red'};
//            $scope.inputStyle = {'border-color':'red'};
//           return;
//       }
//       var expreg= /[A-Za-z1-9]+/g;
//       var nDis =  $scope.dishes.match(expreg).length;
//
//       if(nDis<=3){
//          $scope.msgDishes="Enjoy!";
//       } else if(nDis>3){
//         $scope.msgDishes="Too much!";
//       }
//         $scope.msgStyle = {'color':'green'};
//         $scope.inputStyle = {'border-color':'green'};
//     }
//
//
// }
//
//
// })();

!function(){"use strict";function e(e){e.countDishes=function(){if(!e.dishes)return e.msgDishes="Please enter data first",e.msgStyle={color:"red"},void(e.inputStyle={"border-color":"red"});var o=/[A-Za-z1-9]+/g,r=e.dishes.match(o).length;3>=r?e.msgDishes="Enjoy!":r>3&&(e.msgDishes="Too much!"),e.msgStyle={color:"green"},e.inputStyle={"border-color":"green"}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
