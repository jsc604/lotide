# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jsc604/lotide`

**Require it:**

`const _ = require('@jsc604/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: prints true or false when comparing if 2 arrays are equal 
* `assertEqual(actual, expected)`: prints true or false when comparing if 2 values are equal
* `assertObjectEqual(actual, expected)`: prints true or false when comparing if 2 objects are equal
* `countLetters(string)`: returns a count of each letter from the input string
* `countOnly(allItems, itemsToCount)`: returns a count of the specified item in an array
* `eqArrays(array1, array2)`: compares 2 arrays and returns true or false
* `eqObjects(object1, object2)`: compares 2 objects and returns true or false
* `findKey(object, callback)`: finds the first key that contains the value specified in the callback
* `findKeyByValue(obj, value)`: finds the first key that contains the value specified
* `flatten(input)`: takes and array with nested arrays and returns an array of the same items in the sameorder
* `head(array)`: returns the first index of an array
* `letterpositions(sentence)`: returns an object with the position of each letter from the input string
* `map(array, callback)`: returns a copy of a new array edited by the callback on each element of the array
* `middle(array)`: returns the middle element of an array. If the array has an even number of elements, it will return both middle elements
* `tail(array)`: returns the last element of an array
* `takeUntil(array, callback)`: returns an array of the same elements in order until the specified value of the callback is triggered
* `without(source, remove)`: removes items specified in remove from the source array
* `index()`: library containing all functions that can be accessed