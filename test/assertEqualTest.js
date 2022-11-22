const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');

describe('#assertEqual', () => {
  it('returns false for assertEqual("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });
  it('returns true for assertEqual(1, 1)', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it('returns true for assertEqual("yes", "yes")', () => {
    assert.strictEqual(assertEqual('yes', 'yes'), true);
  });
  it('returns false for assertEqual("yes", "no")', () => {
    assert.strictEqual(assertEqual('yes', 'no'), false);
  });
  it('returns false for assertEqual(109, 392)', () => {
    assert.strictEqual(assertEqual(109, 392), false);
  });
  it('returns true for assertEqual(789, 789))', () => {
    assert.strictEqual(assertEqual(789, 789), true);
  });
});