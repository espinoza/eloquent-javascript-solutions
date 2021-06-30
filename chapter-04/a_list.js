// Converting an array to a nested list

arrayToList = arr => {
  let next = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentList = {
      value: arr[i],
      rest: next
    };
    next = currentList;
  }
  return next;
}

console.log(arrayToList([1, 2, 3]));
// → {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}

// Converting a nested list to an array

listToArray = list => {
  let arr = [];
  let currentList = list;
  while (currentList != null) {
    arr.push(currentList["value"]);
    currentList = currentList["rest"];
  }
  return arr;
}

console.log(listToArray(
  {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  })
);
// → [1, 2, 3]

// Adding an element to the front of a nested list

prepend = (element, list) => {
  return {
    value: element,
    rest: list
  }
}

console.log(prepend(4, arrayToList([1, 2, 3])));
// → {value: 4, rest: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}}

// Find nth element in a nested list

nth = (list, number) => {
  if (list === null) return undefined;
  if (number == 0) return list["value"];
  return nth(list["rest"], number - 1);
}

console.log(nth(arrayToList([2, 4, 6, 8, 10, 12]), 0));
// → 2
console.log(nth(arrayToList([2, 4, 6, 8, 10, 12]), 5));
// → 5
console.log(nth(arrayToList([2, 4, 6, 8, 10, 12]), 7));
// → undefined
