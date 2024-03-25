const assert = require("assert");
const _ = require("underscore");

describe("Arrays", function () {
  it(`compact_.compact(list) source
    Returns a copy of the list with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.`, function () {
    assert.deepEqual(_.compact([0, 1, false, 2, "", 3]), [1, 2, 3]);
  });
});
