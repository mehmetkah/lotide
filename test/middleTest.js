const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const { assert } = require("chai");

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(["5"]), []);
  });
});
