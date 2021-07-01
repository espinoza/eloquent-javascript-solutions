// If a map has the word "hasOwnProperty",
// how it is possible to use the object method "hasOwnProperty"?
let map = {one: true, two: true, hasOwnProperty: true};

// Usually it would be called like this:
// console.log(map.hasOwnProperty("one"));
// but it gets an error because "hasOwnProperty¨ is not a function here

// The alternative way to refer to the method explicitly is
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
