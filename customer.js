var Customer = function(params){
  this.name = params.name;
  this.cash = params.cash;
}

Customer.prototype = {
 buy: function(record){
  return this.cash-=record.price;
 },
 sell: function(record){
  return this.cash+=record.price;
 }

}

module.exports =Customer;