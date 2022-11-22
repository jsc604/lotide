const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns [2, 3, 4, 5] for without([1, 2, 3, 4, 5, "hello"], [1, "hello"])', () => {
    assert.deepEqual(without([1, 2, 3, 4, 5, 'hello'], [1, 'hello']), [2, 3, 4, 5]);
  });
  it('returns ["hello", "world"] for without(["hello", "world", "lighthouse"], ["lighthouse"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
});