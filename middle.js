const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let value of arr1) {
    if (arr1[value] !== arr2[value]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let mid = array.length / 2;
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[Math.floor(mid)]];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]