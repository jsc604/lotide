const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it('returns ["I\'ve", "been", "to", "Hollywood"] for takeUntil(data2, x => x === ",")', () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", 'Hollywood']);
  });
});