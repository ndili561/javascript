var Record = require('../record');
var assert = require('chai').assert

describe ('Record', function(){

  beforeEach(function(){
   record = new Record ({artist:'Rihanna', title:'The bride', price: 50});
   record2 = new Record ({artist:'Elvis', title:'Rock', price: 50});
   record3 = new Record({artist: 'Nirvana', title:'Unplugged', price: 70})
  })

  it('record has a artist', function(){
    assert.equal('Rihanna', record.artist);
  })

  it('record has a title', function(){
    assert.equal('The bride', record.title)
  })

  it('record has a price', function(){
    assert.equal(50, record.price)
  })
})