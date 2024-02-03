const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('correctly sum two non negative number', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('subtract two numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('Divide one number by the other', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('Return Error on zero division', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('Return Error if denominator results in zero division', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, -0.09), 'Error');
  });

  it('Return Error on zero division', function () {
    assert.equal(calculateNumber('DIVID', 1.4, 1), 'Error');
  });

  it('Return Error on zero division', function () {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });

});
