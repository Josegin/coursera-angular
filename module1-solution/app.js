(function () {
'use strict';

angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=["$scope"];

  function LunchCheckController($scope){

    $scope.countDishes = function(){
      console.log($scope.dishes);
      if (!$scope.dishes){
           $scope.msgDishes="Please enter data first";
          return;
      }
      var nDis = String($scope.dishes).split(",").length;

      if(nDis<=3){
         $scope.msgDishes="Enjoy!";
      } else if(nDis>3){
        $scope.msgDishes="Too much!";
      }
    }
}


})();
