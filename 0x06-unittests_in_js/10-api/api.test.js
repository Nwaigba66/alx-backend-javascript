const request = require('request');
const { promisify } = require('util');
const promiseGetReq = promisify(request.get);
const promiseReq = promisify(request);
const { expect } = require('chai');
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

describe('login user', () => {
  it('Respond with user greeting', (done) => {
    const userName = 'idrisoft';
    const data = {
      url: `${url}/login`,
      body: { userName },
      json: true,
      method: 'POST'
    };

    promiseReq(data)
      .then(({ body, statusCode }) => {
        assert.equal(body, `Welcome ${userName}`);
        assert.equal(statusCode, 200);
        done();
      })
      .catch((err) => console.log(err));
  });
});

describe('Available payments', () => {
  it('Responds with payment options', (done) => {
    const expectedData = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    promiseGetReq(`${url}/available_payments`)
      .then(({ body, statusCode }) => {
        assert.equal(statusCode, 200);
        expect(JSON.parse(body)).to.deep.equal(expectedData);
        done();
      })
      .catch((error) => console.log(error));
  });
});
