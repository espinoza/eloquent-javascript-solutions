// A class that represents a group of unique elements, similar to 'Set'

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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
