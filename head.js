const assertEqual = require("./assertEqual");

const head = (x) => {
  let result = x[0];
  return result;

  // return x[0]
};

//console.assert(assertEqual(head([5, 6, 7]), 8));
console.assert(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));




module.exports= head ;