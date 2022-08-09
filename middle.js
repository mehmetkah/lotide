const middle = function (arr) {
  result = [];
  if (arr.length === 1 || arr.length === 2) {
    return result;
  }
  let mod = arr.length % 2;
  if (mod === 0) {
    let index = arr.length / 2;
    let index2 = arr.length / 2 - 1;
    result.push(arr[index2]);
    result.push(arr[index]);
  } else {
    let index3 = (arr.length - 1) / 2;
    result.push(arr[index3]);
  }
  return result;
};

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3])) 
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))