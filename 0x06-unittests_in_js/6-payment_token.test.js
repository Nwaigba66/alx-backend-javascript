const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('resolves with an object', (done) => {
    const expected = { data: 'Successful response from the API' };
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal(expected.data);
        done();
      });
  });

  it('it does nothing', (done) => {
    expect(getPaymentTokenFromAPI(false)).to.be.an('undefined');
    done();
  });
});
