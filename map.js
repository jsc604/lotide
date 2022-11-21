const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.length);

assertArraysEqual(results1, results2);
assertArraysEqual(results2, results3);
assertArraysEqual(results1, results3);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);