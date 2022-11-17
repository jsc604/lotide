const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
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

const flatten = function(input) {
  let output = [];
  for (let i of input) {
    // console.log('i', i);
    if (Array.isArray(i)) {
      for (let j of i) {
        // console.log('j', j);
        output.push(j);
      }
    } else {
      output.push(i);
    }
  }
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 'yes'], 5, ['no']]), [1, 2, 3, 'yes', 5, 'no']);


