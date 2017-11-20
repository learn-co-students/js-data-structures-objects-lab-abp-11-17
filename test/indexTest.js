const expect = chai.expect;

describe('drivers', function () {
  it('defines a `driver` driver', function () {
    expect(typeof driver).to.equal('object');
  });

  describe('updateDriverWithKeyAndValue(driver, key, value)', function () {
    beforeEach(function () {
      for (const key in driver) {
        delete driver[key];
      }

      driver.name = 'Sam';
    });

    it('returns an driver with the orignal key value pairs and the new key value pair', function () {
      expect(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')).to.eql({
        name: 'Sam',
        address: '11 Broadway'
      });
    });

    it('it does not modify the original driver, but rather returns a clone with the new data', function () {
      updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');

      expect(driver['address']).to.equal(undefined);
    });
  });
});
