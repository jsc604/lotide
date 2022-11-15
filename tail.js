const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Asserction Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
assertEqual(result.length, 2);
assertEqual(tail([]).length, 0);
assertEqual(tail(['hello']).length, 0);