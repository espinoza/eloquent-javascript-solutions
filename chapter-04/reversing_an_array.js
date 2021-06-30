// Reversing an array creating a new array
reverseArray = arr => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Reversing an array without creating a new array
reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// → [6, 5, 4, 3, 2, 1]
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
// → [6, 5, 4, 3, 2, 1]
