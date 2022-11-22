const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) results.push(item);
    else break;
  }
  return results;
};
module.exports = takeUntil;