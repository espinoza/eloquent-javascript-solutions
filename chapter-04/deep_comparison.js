// Deep comparison, useful even for objects and their properties

deepEqual = (object1, object2) => {

  // Check if both are objects
  if (typeof object1 == "object" && typeof object2 == "object"
      && object1 != null && object2 != null) {

    // Check if both have the same number of properties
    if (Object.keys(object1).length != Object.keys(object2).length) {
      return false;
    }

    // Go over the properties
    for (let prop of Object.keys(object1)) {

      // This property has to exist in object2
      if (object2[prop] === undefined) {
        return false;
      }

      // All properties must be deep equal
      if (!deepEqual(object1[prop], object2[prop])) {
        return false;
      };

    }

    // Passed all tests
    return true;

  } else {

    // Comparison for non-object values
    return object1 === object2;

  }

}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
// → true
console.log(deepEqual([3, 2, 1], [1, 2, 3]));
// → false
console.log(deepEqual(1, "1"));
// → false
console.log(deepEqual(null, null));
// → true
