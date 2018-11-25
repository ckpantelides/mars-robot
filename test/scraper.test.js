var scraper = require('../modules/scraper');
var chai = require('chai');

describe('webText', function () {
  it('should be a string', function () {
  chai.expect(scraper.webText).to.be.an('object');
  });
});
