const assertEqual = require("../assertEqual");

const tail = (x) => {
let result = x.slice(1)


console.log('x ==>', x);
console.log(result)
return result


}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
