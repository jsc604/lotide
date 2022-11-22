const assert = require('chai').assert;
const findKey = require('../findKey');

const constellations = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it('returns "noma" for findKey(constellations, x => x.stars === 2)', () => {
    assert.strictEqual(findKey(constellations, x => x.stars === 2), 'noma');
  });
});