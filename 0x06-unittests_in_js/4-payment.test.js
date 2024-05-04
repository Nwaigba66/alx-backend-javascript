const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('is returns a specific value', () => {
    sinon.stub(Utils, 'calculateNumber').returns(10);
    const calcNumSpy = sinon.spy(console, 'log');
    const totalAmt = 100;
    const shippingAmt = 20;
    sendPaymentRequestToApi(totalAmt, shippingAmt);
    assert.equal(calcNumSpy.calledOnceWithExactly('The total is: 10'), true);
  });

  afterEach(() => sinon.restore());
});
