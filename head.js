const head = (x) => {
    let result = x[0]
    return result

    // return x[0]
}
const assertEqual = function (actual, expected) {
    let result = actual === expected;
    return result
  };




console.assert(assertEqual(head([5,6,7]), 8));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");