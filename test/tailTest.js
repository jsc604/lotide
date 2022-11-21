const assert = require('chai').assert;
const tail = require('../tail.js');

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const result = tail(words);

describe('#tail', () => {
  it('returns 3 for words.length', function() {
    assert.strictEqual(words.length, 3);
  });
  it('returns "Lighthouse" for result[0]', () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it('returns "Labs" for result[1]', () => {
    assert.strictEqual(result[1], 'Labs');
  });
  it('returns 2 for result.length', () => {
    assert.strictEqual(result.length, 2);
  });
  it('returns 0 for tail([]).length', () => {
    assert.strictEqual(tail([]).length, 0);
  });
  it('returns 0 for tail(["hello"]).length', () => {
    assert.strictEqual(tail(['hello']).length, 0);
  });
});
