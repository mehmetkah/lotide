const assertEqual = function (actual, expected) {
  let result = actual === expected;
  return result;
};
// console.assert(assertEqual(3, 2));
//console.assert(assertEqual(2, 2));

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key1 of array1) {
    if (!object2[key1]) {
      return false;
    }
    if (Array.isArray(object1[key1])) {
      let isEqual = eqArrays(object1[key1], object2[key1]);
      if (!isEqual) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};
const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let x = 0; x < a.length; x++) {
    let isEqual = true;
    for (let i = 0; i < b.length; i++) {
     
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
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd,cd2));
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };

module.exports=eqObjects