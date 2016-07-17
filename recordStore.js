var _ = require('lodash');

var Store = function(params){
  this.name = params.name;
  this.city = params.city;
  this.inventory = [];
  this.cash = params.cash;
}


Store.prototype = {
  add: function(record){
    this.inventory.push(record);
  },
  listInventory: function(){
    _.forEach(this.inventory, function(value, key){
      console.log(value, key);
    })
  },
  sell: function(record){
    return this.cash+=record.price;
  },
  financialInventory: function(){
     var totalRecord = 0
    _.forEach(this.inventory, function(value,key){
      console.log(totalRecord+=value.price);
    })
    console.log(this.cash);
  }
}

module.exports = Store;