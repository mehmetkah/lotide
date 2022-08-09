const assertEqual = function (actual, expected) {
  let result = actual === expected;
  return result;
};
const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let x = 0; x < a.length; x++) {
    let isEqual = true;
    for (let i = 0; i < b.length; i++) {
      console.log(a[x]);
      console.log(b[i]);
      if (a[x] !== b[i]) {
        isEqual = false;
      } else {
        isEqual = true;
        break;
      }
    }
    if (!isEqual) {
      return false;
    }
  }
  return true;
};
console.log(eqArrays([2, 1], [1, 2]));

//console.log(assertEqual(eqArrays("2", "2"), true));
//console.assert(assertEqual(3, 2));
//console.assert(assertEqual(2, 2));
