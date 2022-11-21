const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
assertEqual(result.length, 2);
assertEqual(tail([]).length, 0);
assertEqual(tail(['hello']).length, 0);