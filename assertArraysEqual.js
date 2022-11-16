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