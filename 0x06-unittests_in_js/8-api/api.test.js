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
