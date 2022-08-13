const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const head = require("../head");
//const head = (x) => {
  //let result = x[0];
  //return result;

  // return x[0]
//};

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

//console.assert(assertEqual(head([5, 6, 7]), 8));
//console.assert(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
