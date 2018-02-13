const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')

describe('Park', function (){

  let park;

  beforeEach(function(){
    park = new Park();
  });

  it('should start with an empty enclosure', function(){
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur', function(){
    park.addDinosaur('T-Rex',2);
    const actual = park.enclosure.length;
    assert.strictEqual(actual, 1);
  })

  describe('Dinosaur', function(){

    let dinosaur;

    beforeEach(function(){
      dinosaur = new Dinosaur('Pteradactyl', 3);
    });

    it('should have a type', function(){
      const actual = dinosaur.type;
      assert.strictEqual(actual, 'Pteradactyl');
    });

    it('should have an annualOffspring number', function(){
      const actual = dinosaur.annualOffspring;
      assert.strictEqual(actual, 3)
    });
  });
});
