// A program that contains a function to obtain the minimum
// between two numbers

function min(a, b) {
  if (a - b < 0) {
    return a;
  } else {
    return b;
  }
}

console.log("Testing function min:")
console.log("min(4, 5) =", min(4, 5))
console.log("min(-2, -7) =", min(-2, -7))
console.log("min(10, 10) =", min(10, 10))
