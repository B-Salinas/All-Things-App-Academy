/**
 * It's time to make a stack based on an array!
 *
 * In this file, you will complete the ArrayStack class with the following:
 *
 *   - a constructor that initializes an instance variable named "storage"
 *     to an empty array
 *   - a "push" method that adds a value to the storage
 *   - a "pop" method that removes and returns the "newest" value in
 *     storage, that is, last-in, first-out
 *   - a "peek" method that returns the "newest" value in storage WITHOUT
 *     removing it, that is, last-in, peeky peeky
 *
 * Do not change anything above this line
 ***************************************************************************/


class ArrayStack {
  
  constructor(storage) {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val); // might have to use .unshift()

  }

  pop() {
    if (this.storage.length === 0) {
      return undefined;
    }

    let newest = this.storage.pop();
    return newest;

  }

  peek() {
    if (this.storage.length === 0) {
      return undefined;
    }

    return this.storage[this.storage.length - 1];
  }

}


/****************************************************************************
 * Do not change anything below this line
 */
try {
  module.exports = { ArrayStack };
} catch (e) {
  module.exports = null;
}