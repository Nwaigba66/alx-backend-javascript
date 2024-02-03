const expect = require('chai').expect;
const calculateNumber  = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  it('check sum of 1.4 and 4.5', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('check subtraction of 1.4 from 4.5', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('check division of 1.4 by 4.5', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('check division of 1.4 by zero', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('check division of 1.4 by -0.09', function () {
    expect(calculateNumber('DIVIDE', 1.4, -0.09)).to.equal('Error');
  });

  it('check that wrong description return Error', function () {
    expect(calculateNumber('DIVID', 1.4, 1)).to.equal('Error');
  });

  it('check division of zero by zero', function () {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
});
