/*
Implement an iterator which receives an array of values,
and returns an object with:

a function next
a number index

A call to the next function should return an object with 2
attributes:
value (the next value in the input array; undefined if the
  value is not present or the array has been fully processed)
done (boolean which specifies whether the input array has
  been fully processed)

Accessing the index attribute should return the index of the
value currently held by the iterator.

Parameters: an array
Returns: an obj
  prop index
  method next
Examples:
  const iterator = createIterator(['One', , 'Two']);

  iterator.index  // 0
  iterator.next() // { value: 'One', done: false }
  iterator.index  // 1

  // A hole in the array - value is undefined
  iterator.next() // { value: undefined, done: false }
  iterator.index  // 2

  iterator.next() // { value: 'Two', done: false }
  iterator.index  // 3

  // Iteration has finished - value is undefined, done becomes true
  iterator.next() // { value: undefined, done: true }
  iterator.index  // 3

  // Subsequent calls to next of a fully processed iterator don't change anything
  iterator.next() // { value: undefined, done: true }
  iterator.index  // 3
Pseudocode:
  store array as a prop on obj
  initialize index prop as 0
  define next method
    define obj
      value prop as el at current index in array
      done prop as result of conditional index equals array length
    if index is less than array length
      increment index by 1
    return obj
*/

const createIterator = array => new Iterator(array);

class Iterator {
  #array;
  #index;
  constructor(array) {
    this.#array = array;
    this.#index = 0;
  }
  next() {
    const obj = {
      value: this.#array[this.#index],
      done: this.#index === this.#array.length,
    };
    if (!obj.done) this.#index++;
    return obj;
  }
  get index() {
    return this.#index;
  }
}