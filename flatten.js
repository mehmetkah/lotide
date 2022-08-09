const flatten = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let nestArr = arr[i];
      for (let x = 0; x < nestArr.length; x++) {
        result.push(nestArr[x]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
