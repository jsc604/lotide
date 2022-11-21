const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;

console.log(without([1, 2, 3, 4, 5, 'hello'], [1, 'hello']));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);