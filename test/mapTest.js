const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.length);

describe('#map', () => {
  it('returns false for eqArrays(results1, results2)', () => {
    assert.strictEqual(eqArrays(results1, results2), false);
  });
  it('returns false for eqArrays(results1, results2)', () => {
    assert.strictEqual(eqArrays(results2, results3), false);
  });
  it('returns false for eqArrays(results1, results2)', () => {
    assert.strictEqual(eqArrays(results1, results3), false);
  });
  it('returns true for eqArrays(results1, ["g", "c", "t", "m", "t"])', () => {
    assert.strictEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
  });
});