const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");



const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    return true;
  } else {
    return false;
  }
};

module.exports= assertArraysEqual ;
