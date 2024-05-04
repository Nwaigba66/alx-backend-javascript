const request = require('request');
const { promisify } = require('util');
const promiseGetReq = promisify(request.get);
const assert = require('assert');

const url = 'http://localhost:7865';
const indexPage = 'Welcome to the payment system';

describe('Index page', () => {
  it('should return Welcome to the payment system', (done) => {
    promiseGetReq(url)
      .then(({ body, statusCode }) => {
        assert.equal(body, indexPage);
        assert.equal(statusCode, 200);
        done();
      })
      .catch(() => {});
  });
});

describe('Cart Route', () => {
  it('should return cart details', (done) => {
    const cartId = 76;
    const expectedBody = `Payment methods for cart ${cartId}`;
    promiseGetReq(`${url}/cart/${cartId}`)
      .then(({ body, statusCode }) => {
        assert.equal(body, expectedBody);
        assert.equal(statusCode, 200);
        done();
      })
      .catch(() => {});
  });

  it('should return 404', (done) => {
    const cartId = '6bcd';
    promiseGetReq(`${url}/cart/${cartId}`)
      .then(({ statusCode }) => {
        assert.equal(statusCode, 404);
        done();
      })
      .catch(() => {});
  });
});
