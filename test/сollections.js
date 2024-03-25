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

  it(`contains_.contains(list, value, [fromIndex]) Aliases: include, includes source
  Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.`, function () {
    assert.deepEqual(_.contains([1, 2, 3, 4, 5, 6], 3), true);
  });

  it(`pluck_.pluck(list, propertyName) source
  A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.`, function () {
    assert.deepEqual(
      _.pluck(
        [
          { name: "moe", age: 40 },
          { name: "larry", age: 50 },
          { name: "curly", age: 60 },
        ],
        "age"
      ),
      [40, 50, 60]
    );
  });

  it(`max_.max(list, [iteratee], [context]) source
  Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be required. This function can currently only compare numbers reliably. This function uses operator < (note).`, function () {
    assert.deepEqual(
      _.max(
        [
          { name: "moe", age: 40 },
          { name: "larry", age: 50 },
          { name: "curly", age: 60 },
        ],
        (el) => el.age
      ),
      { name: "curly", age: 60 }
    );
  });

  it(`min_.min(list, [iteratee], [context]) source
  Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty, so an isEmpty guard may be required. This function can currently only compare numbers reliably. This function uses operator < (note).`, function () {
    assert.deepEqual(
      _.min(
        [
          { name: "moe", age: 40 },
          { name: "larry", age: 50 },
          { name: "curly", age: 60 },
        ],
        (el) => el.age
      ),
      { name: "moe", age: 40 }
    );
  });

  it(`size_.size(list) source
  Return the number of values in the list.`, function () {
    assert.deepEqual(
      _.size([
        { name: "moe", age: 40 },
        { name: "larry", age: 50 },
        { name: "curly", age: 60 },
      ]),
      3
    );
  });

});
