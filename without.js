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