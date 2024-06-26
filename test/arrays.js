const assert = require("assert");
const _ = require("underscore");

describe("Arrays", function () {
  it(`compact_.compact(list) source
    Returns a copy of the list with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.`, function () {
    assert.deepEqual(_.compact([0, 1, false, 2, "", 3]), [1, 2, 3]);
  });

  it(`without_.without(array, *values) source
  Returns a copy of the array with all instances of the values removed.`, function () {
    assert.deepEqual(_.without([0, 1, false, 2, 3], 1, false), [0, 2, 3]);
  });

  it(`union_.union(*arrays) source
  Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.`, function () {
    assert.deepEqual(
      _.union([0, 1, 2, 3], [1, 2, 3, 4, 5], [10, 2, 50]),
      [0, 1, 2, 3, 4, 5, 10, 50]
    );
  });

  it(`difference_.difference(array, *others) source
  Similar to without, but returns the values from array that are not present in the other arrays.`, function () {
    assert.deepEqual(_.difference([0, 1, 2, 3], [1, 2, 3, 4, 5]), [0]);
  });

  it(`uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique source
  Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurrence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.`, function () {
    assert.deepEqual(_.uniq([0, 1, 2, 3, 1, 2, 3, 0, 0, 0]), [0, 1, 2, 3]);
  });

  it(`zip_.zip(*arrays) source
  Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes.`, function () {
    assert.deepEqual(_.zip(["a", "b", "c"], [1, 2, 3], [true, true, false]), [
      ["a", 1, true],
      ["b", 2, true],
      ["c", 3, false],
    ]);
  });

  it(`unzip_.unzip(array) Alias: transpose source
  The opposite of zip. Given an array of arrays, returns a series of new arrays, the first of which contains all of the first elements in the input arrays, the second of which contains all of the second elements, and so on. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.`, function () {
    assert.deepEqual(
      _.unzip([
        ["a", 1, true],
        ["b", 2, true],
        ["c", 3, false],
      ]),
      [
        ["a", "b", "c"],
        [1, 2, 3],
        [true, true, false],
      ]
    );
  });

  it(`object_.object(list, [values]) source
  Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. Passing by pairs is the reverse of pairs. If duplicate keys exist, the last value wins.`, function () {
    assert.deepEqual(_.object(["a", "b", "c"], [1, 2, 3]), {
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it(`range_.range([start], stop, [step]) source
  A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1 if start is before stop, otherwise -1. Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step.`, function () {
    assert.deepEqual(_.range(3), [0, 1, 2]);
  });
});
