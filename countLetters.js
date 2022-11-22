const countLetters = function(string) {
  let output = {};
  for (let letters of string) {
    // console.log(letters);
    if (letters !== ' ') {
      if (output[letters]) {
        output[letters] += 1;
      } else {
        output[letters] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;