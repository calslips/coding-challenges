/**
 * Write a function reverse which reverses a list (or in clojure's case,
 * any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
 */

reverse = function(array) {
  const reversed = [];
  while (array.length) {
    reversed.push(array.pop());
  }
  return reversed;
}