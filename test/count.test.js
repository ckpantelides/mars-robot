var count = require('../modules/count');
var chai = require('chai');

describe('wordCount', function () {
  it('should be an object', function () {
    chai.expect(count.wordCount).to.be.a('function');
  });

  it('should count the word occurences', function () {

    // 1. ARRANGE
    var string = "hello there hello there goodbye"
    var text = string.split(" ");

    // 2. ACT
    var testObject = count.wordCount(text);

    // 3. ASSERT
    chai.expect(testObject["hello"]).to.be.equal(2);
    chai.expect(testObject["goodbye"]).to.be.equal(1);
  });
});
