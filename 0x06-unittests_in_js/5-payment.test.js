const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToAPI = require('./5-payment');

describe('Test sendPaymentRequestToAPI', () => {
  it('test args 100 and 20 prints 120', () => {
    const spy1 = sinon.spy(console, 'log');
    const num1 = 100;
    const num2 = 20;
    sendPaymentRequestToAPI(num1, num2);
    assert.equal(spy1.calledOnceWithExactly('The total is: 120'), true);
  });

  it('test args 10 and 10 prints 20', () => {
    const spy1 = sinon.spy(console, 'log');
    const num1 = 10;
    const num2 = 10;
    sendPaymentRequestToAPI(num1, num2);
    assert.equal(spy1.calledOnceWithExactly('The total is: 20'), true);
  });

  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());
});
