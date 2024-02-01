const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('1 plus 3 equals 4', function() {
    assert.equal(calculateNumber(1, 3), 4);
    });

  it('1 plus 3.7 equals 5', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
    });

  it('1.2 plus 3.7 equals 5', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    });

  it('1.5 plus 3.7 equals 6', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  
  it('-1.5 plus 3.7 equals 3', function() {
    assert.equal(calculateNumber(-1.5, 3.7), 3);
    });

});
