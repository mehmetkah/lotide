const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

  console.assert(assertArraysEqual(middle([1]),[]))
  //console.log(middle([1, 2]))
  //console.log(middle([1, 2, 3])) 
  console.assert(assertArraysEqual(middle([1, 2, 3, 4, 5]),[2]))
  console.assert(assertArraysEqual(middle([1, 2, 3, 4]),[2,3]))
  //console.log(middle([1, 2, 3, 4, 5, 6]))