const middle = function(array) {
  let mid = array.length / 2;
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[Math.floor(mid)]];
  }
};

module.exports = middle;
