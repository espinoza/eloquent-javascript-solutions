// Convert an array of arrays into a single array

flatten = arr => {
  return arr.reduce((subArr1, subArr2) => subArr1.concat(subArr2), []);
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
