/*
The Array's reverse() method has gone missing! Re-write it,
quick-sharp!

When this method is called, it reverses the order of the items
in the original array. Then then it returns that same, original
array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]
  // returned by .reverse()
input;           // == [4, 3, 2, 1]
  // items reordered in the original array

Parameters: no arg, this = called on array
Returns: an array
  same called on array with its elements in reverse order
Examples:
  [1, 2, 3, 4].reverse(), [4,3,2,1]
  ["a", "b", "c"].reverse(), ["c", "b", "a"]
  [].reverse(), []
Pseudocode:
  iterate over this from 2nd to last el to the beginning
    splice out current el and push to this
  return this
*/

Array.prototype.reverse = function() {
  for (let i = 0; i < Math.floor((l = this.length) / 2); i++) [this[i], this[l - 1 - i]] = [this[l - 1 - i], this[i]];
  return this;
};

Array.prototype.reverse = function() {
  return this.reduceRight((a, _, i) => (a.push(...a.splice(i, 1)), a), this);
};

Array.prototype.reverse = function() {
  for (let i = this.length - 2; i >= 0; i--) this.push(...this.splice(i, 1));
  return this;
};