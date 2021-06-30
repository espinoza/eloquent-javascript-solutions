// 'every' method for arrays, writen as a function (2 versions)

every1 = (arr, predicate) => {
  for (let element of arr) {
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}

console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true

every2 = (arr, predicate) => {
  return !(arr.some(value => !predicate(value)));
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
