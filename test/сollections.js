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
});
