const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6])', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4 ,5, 6]);
  });
  it('returns [1, 2, 3, "yes", 5, "no"] for flatten([1, [2, 3, "yes"], 5, ["no"]])', () => {
    assert.deepEqual(flatten([1, [2, 3, 'yes'], 5, ['no']]), [1, 2, 3, 'yes', 5, 'no']);
  });
});