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