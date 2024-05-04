const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('is called once with arguments', () => {
    const calcNumSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmt = 100;
    const shippingAmt = 20;
    sendPaymentRequestToApi(totalAmt, shippingAmt);
    assert.equal(calcNumSpy.calledOnce, true);
    assert.equal(calcNumSpy.calledWith('SUM', totalAmt, shippingAmt), true);
    assert.equal(calcNumSpy.calledWith('MINUS', totalAmt, shippingAmt), false);
  });
});
