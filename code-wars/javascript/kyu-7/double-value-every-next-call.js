/*
This kata is about static method that should return different
values.
On the first call it must be 1, on the second and others -
it must be a double from previous value.

Parameters: none
Returns: number property
  which doubles each time the method to get
  that number is called
Examples:
  Class.getNumber(), 1
  Class.getNumber(), 2
  Class.getNumber(), 4
  Class.getNumber(), 8
  Class.getNumber(), 16
Pseudocode:
  define class to contain props/methods
    implement a static property on the class to hold current num
    implement a static method to get the number
      initialize a current var to hold current num prop value
      reassign num prop to be itself doubled
      return current var
*/

class Class {
  static #number = 1;
  static getNumber() {
    return (this.#number *= 2) / 2;
  }
}