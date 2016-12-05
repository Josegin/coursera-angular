(function () {
'use strict';

angular.module('BuyListApp', [])
  .controller('BuyListController', BuyListController)
  .controller('AlreadyBoughtListController', AlreadyBoughtListController)
  .service('BuyListService',BuyListService);



BuyListController.$inject=["BuyListService"];
  function BuyListController(BuyListService){
      var buylist=this;

      buylist.items = BuyListService.getItemsToBuy();
      // buylist.itemsBought = BuyListService.getItemsBought();
      buylist.buyItem = function(item, index){
          BuyListService.buyItem(item, index);
      }
  }

AlreadyBoughtListController.$inject=["BuyListService"];
  function AlreadyBoughtListController(BuyListService){
      var alreadyboughtlist=this;

      alreadyboughtlist.items = BuyListService.getItemsBought();
  }

  function BuyListService(){
      var service = this;

      var itemsToBuy = [{name:"Jam", qty:3},
                         {name:"Chesse", qty:2},
                         {name:"Wine", qty:6},
                         {name:"Chips", qty:3},
                         {name:"Pizza", qty:2}];

      var itemsBought = [];

      service.getItemsToBuy = function(){
        return itemsToBuy;
      };

      service.getItemsBought = function(){
          return itemsBought;
      };

      service.buyItem = function(item, index){
        itemsBought.push(item);
        itemsToBuy.splice(index,1);

      };
  }

})();
