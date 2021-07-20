class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Solution here
  // A function that wraps primitiveMultiply and just keeps trying
  // until a call succeeds, after which it returns the result
  for (;;) {
    try {
      let product = primitiveMultiply(a, b);
      return product;
    } catch(e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
