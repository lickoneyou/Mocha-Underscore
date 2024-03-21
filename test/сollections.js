const assert = require("assert");
const _ = require("underscore");

describe("Collections", function () {
  it(`map_.map(list, iteratee, [context]) Alias: collect source
  Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.`, function () {
    assert.deepEqual(
      _.map([1, 2, 3], (el) => el + 1),
      [2, 3, 4]
    );
  });

  it(`find _.find(list, predicate, [context]) Alias: detect source
  Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. predicate is transformed through iteratee to facilitate shorthand syntaxes.`, function () {
    assert.deepEqual(
      _.find([1, 2, 3, 4, 5, 6], (el) => el > 5),
      6
    );
  });
});
