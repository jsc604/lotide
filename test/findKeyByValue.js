const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const superheroes = {
  man: "thor",
  woman: 'captain marvel'
};

describe('#findKeyByValue', () => {
  it('returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it('returns undefined for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('returns "sci_fi" for findKeyByValue(bestTVShowsByGenre, "The Expanse")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
  });
  it('returns "comedy" for findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
  });
  it('returns "man" for findKeyByValue(superheroes, "thor")', () => {
    assert.strictEqual(findKeyByValue(superheroes, 'thor'), 'man');
  });
  it('returns "woman" for findKeyByValue(superheroes, "captain marvel")', () => {
    assert.strictEqual(findKeyByValue(superheroes, 'captain marvel'), 'woman');
  });
});