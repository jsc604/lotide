const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: '1', b: '2', c: '3' };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: '1', d: ['2', 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false