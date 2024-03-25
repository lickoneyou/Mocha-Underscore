const assert = require("assert");
const _ = require("underscore");

describe("Objects", function () {
  it(`isEmpty_.isEmpty(collection) source
  Returns true if collection has no elements. For strings and array-like objects _.isEmpty checks if the length property is 0. For other objects, it returns true if the object has no enumerable own-properties. Note that primitive numbers, booleans and symbols are always empty by this definition.`, function () {
    assert.deepEqual(_.isEmpty([0, 1, false, 2, "", 3]), false);
    assert.deepEqual(_.isEmpty([]), true);
  });

  it(`isArray_.isArray(object) source Returns true if object is an Array.`, function () {
    assert.deepEqual(
      _.isArray(() => 1),
      false
    );
    assert.deepEqual(_.isArray([]), true);
  });

  it(`isObject_.isObject(value) source
  Returns true if value is an Object. Note that JavaScript arrays and functions are objects, while (normal) strings and numbers are not.`, function () {
    assert.deepEqual(_.isObject(1), false);
    assert.deepEqual(_.isObject({ a: 1 }), true);
  });

  it(`isFunction_.c(object) source
  Returns true if object is a Function.`, function () {
    assert.deepEqual(_.isFunction(1), false);
    assert.deepEqual(_.isFunction({ a: 1 }), false);
    assert.deepEqual(_.isFunction(_), true);
    assert.deepEqual(
      _.isFunction(() => 2),
      true
    );
  });

  it(`isString_.isString(object) source
  Returns true if object is a String.`, function () {
    assert.deepEqual(_.isString(1), false);
    assert.deepEqual(_.isString({ a: 1 }), false);
    assert.deepEqual(_.isString(_), false);
    assert.deepEqual(
      _.isString(() => 2),
      false
    );
    assert.deepEqual(_.isString("123"), true);
  });

  it(`isNumber_.isNumber(object) source
  Returns true if object is a Number (including NaN).`, function () {
    assert.deepEqual(_.isNumber(1), true);
    assert.deepEqual(_.isNumber({ a: 1 }), false);
    assert.deepEqual(_.isNumber(_), false);
    assert.deepEqual(
      _.isNumber(() => 2),
      false
    );
    assert.deepEqual(_.isNumber("123"), false);
  });
});
