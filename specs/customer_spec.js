var Customer = require('../customer')
var Record = require('../record')
var assert = require('chai').assert


describe ('Customer', function(){

  beforeEach(function(){
     customer = new Customer({name:'fufu', cash: 200});
     record3 = new Record({artist: 'Nirvana', title:'Unplugged', price: 70})
     })

     it('customer should have a name', function(){
      assert.equal('fufu', customer.name)
     })
    
     it('customer has cash', function(){
      assert.equal(200, customer.cash)
     })
     it('customer can buy records', function(){
      customer.buy(record3);
      assert.equal(130, customer.cash)
     })
     it('customer can sell records', function(){
      customer.sell(record3);
      assert.equal(270, customer.cash)
     })
 
  })