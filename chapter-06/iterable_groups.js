// A class that represents a group of unique elements, similar to 'Set'
// This class generate iterable objects

class Group {
  constructor() {
    this.content = [];
  }
  add(element) {
    if (!this.has(element)) {
      this.content.push(element);
    }
  }
  delete(element) {
    if (this.has(element)) {
      delete this.content[this.content.indexOf(element)];
    }
  }
  has(element) {
    return this.content.includes(element);
  }
  static from(iterable) {
    let newGroup = new Group();
    for (let element of iterable) {
      newGroup.add(element);
    }
    return newGroup;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }
  next() {
    if (this.index == this.group.content.length) {
      return {done: true};
    }
    let value = {index: this.index, element: this.group.content[this.index]}
    this.index++
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
