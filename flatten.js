
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(input) {
  let output = [];
  for (let i of input) {
    if (Array.isArray(i)) {
      for (let j of i) {
        output.push(j);
      }
    } else {
      output.push(i);
    }
  }
  return output;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 'yes'], 5, ['no']]), [1, 2, 3, 'yes', 5, 'no']);


