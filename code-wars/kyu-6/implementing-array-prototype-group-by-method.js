/*
Parameters: none or a function
Returns:
  if no args
    an object, grouping elements of called on array by their respective value
  if fn passed in
    an object, greouping elements of the called on array by their respective
    return values after passing the element into the fn arg
Examples:
  [1,2,3,2,4,1,5,1,6].groupBy() //
    '{"1":[1,1,1],"2":[2,2],"3":[3],"4":[4],"5":[5],"6":[6]}'

  [1,2,3,2,4,1,5,1,6].groupBy(
    function(_) {return _ % 3;}
  ) //
    '{"0":[3,6],"1":[1,4,1,1],"2":[2,2,5]}'

  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'].groupBy(
    function(_) {return _.length;}
  ) //
    '{"3":["one","two","six","ten"],"4":["four","five","nine"],"5":["three","seven","eight"]}'
Pseudocode:
  initialize groups variable assigned to an empty object
  check for args
    if no arg
      place elements into groups obj
        key equals the elements value
        value equals an array of every occurrence of this value in the called on array
    if fn for arg
      pass each element into the fn
        place the returns into groups obj
          key is the result of calling the fn on the element
          values equals an array of the elements in the called on array that return the key value
*/

Array.prototype.groupBy = function(fn = e => e) {
  return this.reduce((o, c) => (k = fn(c), o[k] = (o[k] || []).concat(c)) && o, {});
}

// Array.prototype.groupBy = function(fn) {
//   return fn
//     ? this.reduce((o, c) => (o[fn(c)] ? o[fn(c)].push(c) : o[fn(c)] = [c]) && o, {})
//     : this.reduce((o, c) => (o[c] ? o[c].push(c) : o[c] = [c]) && o, {});
// }