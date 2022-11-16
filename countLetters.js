const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


console.log(countLetters('lighthouse in the house'));