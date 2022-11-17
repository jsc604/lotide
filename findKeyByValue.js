const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let genre;
  for (let key in obj) {
    // console.log('key', key);
    // console.log('value', value);
    // console.log(obj[key]);
    if (obj[key] === value) {
      genre = key;
    }
  }
  return genre;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

const superheroes = {
  man: "thor",
  woman: 'captain marvel'
};

assertEqual(findKeyByValue(superheroes, 'thor'), 'man');
assertEqual(findKeyByValue(superheroes, 'captain marvel'), 'woman');
