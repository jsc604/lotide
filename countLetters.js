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
assertEqual(countLetters('lighthouse in the house'), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
