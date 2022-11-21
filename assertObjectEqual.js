const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(inspect(actual), inspect(expected))) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
