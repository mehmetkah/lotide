const assertEqual = function(actual, expected) {
  let result = actual === expected;
  return result;
};
const eqArrays = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};
console.log(assertEqual(eqArrays("2", "2"), true));



const assertArraysEqual = function(a,b) {
  if (eqArrays(a,b)) {
    return true;
  } else {
    return false;
  }
};
console.log(assertArraysEqual([1,2],[1,2]))






//console.log(assertArraysEqual());
//console.assert(assertArraysEqual());

