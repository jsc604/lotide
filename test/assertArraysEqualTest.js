const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, 3, 'yes', 5, 'no'], [1, 2, 3, 'yes', 5, 'no']);