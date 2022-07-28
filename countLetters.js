const assertEqual = function (actual, expected) {
  let result = actual === expected;
  return result;
};
// console.assert(assertEqual(3, 2));
//console.assert(assertEqual(2, 2));

const countLetters = function (sentence) {
  let obj = new Map();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let count = 0;
      for (let x = 0; x < sentence.length; x++) {
        if (sentence[i] === sentence[x]) {
          count += 1;
        }
      }
      obj.set(sentence[i], count);
    }
  } return Object.fromEntries(obj);
}; console.log(countLetters("lighthouse in the house"))

// "ali ata bak"
