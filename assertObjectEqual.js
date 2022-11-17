const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objectKeysArray1 = Object.keys(object1);
  let objectKeysArray2 = Object.keys(object2);
  if (objectKeysArray1.length !== objectKeysArray2.length) {
    return false;
  }
  for (let key of objectKeysArray1) {
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(inspect(actual), inspect(expected))) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
