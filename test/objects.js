const assert = require("assert");
const _ = require("underscore");

describe("Objects", function () {
  it(`isEmpty_.isEmpty(collection) source
  Returns true if collection has no elements. For strings and array-like objects _.isEmpty checks if the length property is 0. For other objects, it returns true if the object has no enumerable own-properties. Note that primitive numbers, booleans and symbols are always empty by this definition.`, function () {
    assert.deepEqual(_.isEmpty([0, 1, false, 2, "", 3]), false);
    assert.deepEqual(_.isEmpty([]), true);
  });

  it(`isArray_.isArray(object) source Returns true if object is an Array.`, function () {
    assert.deepEqual(_.isArray(() => 1), false);
    assert.deepEqual(_.isArray([]), true);
  });
});
