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

const without = function(source, remove) {
  let newArr = [];
  for (let value of source) {
    newArr.push(value);
    for (let j of remove) {
      if (value === j) newArr.pop();
    }
  }
  return newArr;
};

console.log(without([1, 2, 3, 4, 5, 'hello'], [1, 'hello']));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);