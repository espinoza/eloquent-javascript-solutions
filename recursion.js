// A program that contains a function to check if a number
// is even or odd recursively

function isEven(number) {
  if (number < 0) number = -number;
  if (number == 0) return true;
  if (number == 1) return false;
  if (number >= 2) return isEven(number - 2);
}

console.log("Testing function isEven:");
console.log("Is 50 even?", isEven(50));
console.log("Is 75 even?", isEven(75));
console.log("Is -1 even?", isEven(-1));
