// Sum of numbers between two specific numbers

range = (a, b, step) => {
  let arr = [];
  step = step || 1;
  if (a <= b) {
    for (let i = a; i <= b; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = a; i >= b; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

sum = arr => {
  let amount = 0;
  for (let element of arr) {
    amount += element;
  }
  return amount;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
