// A class that represents a persistent group of unique elements,
// similar to 'Set'.  Copies are created when using add or delete methods.

class PGroup {
  constructor(array) {
    this.content = array;
    Object.freeze(this.content);
  }
  add(element) {
    if (!this.has(element)) {
      return new PGroup(this.content.concat(element));
    } else {
      return this;
    }
  }
  delete(element) {
    if (this.has(element)) {
      return new PGroup(this.content.filter(e => e !== element));
    } else {
      return this;
    }
  }
  has(element) {
    return this.content.includes(element);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
