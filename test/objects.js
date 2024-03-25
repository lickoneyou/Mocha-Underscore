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

  it(`isFinite_.isFinite(object) source
  Returns true if object is a finite Number.`, function () {
    assert.deepEqual(_.isFinite(1), true);
    assert.deepEqual(_.isFinite(Infinity), false);
  });

  it(`isBoolean_.isBoolean(object) source
  Returns true if object is either true or false.`, function () {
    assert.deepEqual(_.isBoolean(true), true);
    assert.deepEqual(_.isBoolean(123), false);
  });

  it(`isDate_.isDate(object) source
  Returns true if object is a Date.`, function () {
    assert.deepEqual(_.isDate(new Date()), true);
    assert.deepEqual(_.isDate(123), false);
  });

  it(`isRegExp_.isRegExp(object) source
  Returns true if object is a RegExp.`, function () {
    assert.deepEqual(_.isRegExp(/qe/), true);
    assert.deepEqual(_.isRegExp(new RegExp()), true);
    assert.deepEqual(_.isRegExp(123), false);
  });

  it(`isError_.isError(object) source
  Returns true if object inherits from an Error.`, function () {
    assert.deepEqual(_.isError(new Error()), true);
    assert.deepEqual(_.isError(123), false);
  });

  it(`isSymbol_.isSymbol(object) source
  Returns true if object is a Symbol.`, function () {
    assert.deepEqual(_.isSymbol(Symbol()), true);
    assert.deepEqual(_.isSymbol(123), false);
  });

  it(`isMap_.isMap(object) source
  Returns true if object is a Map.`, function () {
    assert.deepEqual(_.isMap(new Map()), true);
    assert.deepEqual(_.isMap(123), false);
  });

  it(`isWeakMap_.isWeakMap(object) source
  Returns true if object is a WeakMap.`, function () {
    assert.deepEqual(_.isWeakMap(new Map()), false);
    assert.deepEqual(_.isWeakMap(new WeakMap()), true);
    assert.deepEqual(_.isWeakMap(123), false);
  });

  it(`isSet_.isSet(object) source
  Returns true if object is a Set.`, function () {
    assert.deepEqual(_.isSet(new Map()), false);
    assert.deepEqual(_.isSet(new WeakMap()), false);
    assert.deepEqual(_.isSet(new Set()), true);
    assert.deepEqual(_.isSet(123), false);
  });

  it(`isWeakSet_.isWeakSet(object) source
  Returns true if object is a WeakSet.`, function () {
    assert.deepEqual(_.isWeakSet(new Map()), false);
    assert.deepEqual(_.isWeakSet(new WeakMap()), false);
    assert.deepEqual(_.isWeakSet(new Set()), false);
    assert.deepEqual(_.isWeakSet(new WeakSet()), true);
    assert.deepEqual(_.isWeakSet(123), false);
  });

  it(`isNaN_.isNaN(object) source
  Returns true if object is NaN.
  Note: this is not the same as the native isNaN function, which will also return true for many other not-number values, such as undefined.`, function () {
    assert.deepEqual(_.isNaN(123), false);
    assert.deepEqual(_.isNaN(NaN), true);
    assert.deepEqual(_.isNaN(undefined), false);
  });

  it(`isNull_.isNull(object) source
  Returns true if the value of object is null.`, function () {
    assert.deepEqual(_.isNull(123), false);
    assert.deepEqual(_.isNull(NaN), false);
    assert.deepEqual(_.isNull(undefined), false);
    assert.deepEqual(_.isNull(null), true);
  });

  it(`isUndefined_.isUndefined(value) source
  Returns true if value is undefined.`, function () {
    assert.deepEqual(_.isUndefined(123), false);
    assert.deepEqual(_.isUndefined(NaN), false);
    assert.deepEqual(_.isUndefined(undefined), true);
    assert.deepEqual(_.isUndefined(null), false);
  });
});
