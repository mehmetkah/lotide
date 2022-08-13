// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
  const  isEqual= eqObjects(actual,expected)
  
    //console.log(`Example label: ${inspect(actual)}`);


};
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
  };//console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' }))

  module.exports= assertObjectsEqual