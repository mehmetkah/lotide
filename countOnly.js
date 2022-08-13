const assertEqual = function (actual, expected) {
  let result = actual === expected;
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countOnly = function (firstNames, itemsToCount) {
  // make variable with empty obj.
  // loop thru all item which gives us the items
  //if condition acces the name variable that we looping from
  //nested if condition check if the name empty obj. if there is add +1. if not print undefined.
  let obj = new Map();
  let selectedkeys = Object.keys(itemsToCount);
  let filteredFirstnames = firstNames.filter((x) => selectedkeys.includes(x));

  filteredFirstnames.forEach((firstName) => {
    let isSelected = itemsToCount[firstName];

    if (isSelected) {
      let count = 0;
      for (let i = 0; i < filteredFirstnames.length; i++) {
        if (filteredFirstnames[i] === firstName) {
          count += 1;
        }
      }

      obj.set(firstName, count);
    }
  });

  return Object.fromEntries(obj);
};

/*console.log(
  countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  })
);*/

(assertEqual(["Jason"], 1));
assertEqual(["Karima"], undefined);
assertEqual(["Fang"], 2);
assertEqual(["Agouhanna"], undefined);

module.exports=countOnly