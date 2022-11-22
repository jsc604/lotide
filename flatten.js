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