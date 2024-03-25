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
});
