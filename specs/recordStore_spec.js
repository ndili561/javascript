var Store = require('../recordStore');
var Record =  require('../record');
var Customer = require('../customer')
var assert = require('chai').assert


describe ('RecordStore', function(){

  beforeEach(function(){
    recordstore = new Store({name:'record',city:'Glasgow', cash: 5000});
     record = new Record ({artist:'Rihanna', title:'The bride', price: 50});
     record2 = new Record ({artist:'Elvis', title:'Rock', price: 50});
     record3 = new Record({artist: 'Nirvana', title:'Unplugged', price: 70});
     customer = new Customer({name:'fufu', cash: 200})
    
  })

  it('recordStore has a name', function(){
    assert.equal('record', recordstore.name)
  })

  it('Store has a city', function(){
    assert.equal('Glasgow', recordstore.city)
  })
  it('Store has empty inventory', function(){
    assert.equal(0,recordstore.inventory.length)
  })

  it('store has a balance', function(){
    assert.equal(5000, recordstore.cash)
  })
  it('add record to store', function(){
    recordstore.add(record);
    assert.equal(1, recordstore.inventory.length)
  })
  it('list the inventory', function(){
    recordstore.add(record);
    assert.equal( recordstore.listInventory())
  })
  it('sell a record', function(){
    recordstore.sell(record);
    assert.equal(5050, recordstore.cash)
  })
  it('report the financial situation of the store', function(){
    recordstore.add(record);
    recordstore.sell(record);
    assert.equal(recordstore.financialInventory())
  })





})