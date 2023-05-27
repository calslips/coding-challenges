/*
Write a function called multiFilter which receives a variable
number of filter functions. The function should return a
function that receives one element (a compound filter function).

Additional Rules
multiFilter can't be implemented using loops like:
for
while
do while

Parameters: numerous fns
Returns: a fn
Examples:
  function isEven(el) {
    return el % 2 === 0;
  }
  function isGTten(el) {
    return el > 10;
  }
  [1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)), [12, 20, 22]
Pseudocode:
  collect all fn args
  return a fn that takes in 1 arg
    call every method on fn args array
      return result of calling current fn on inner arg
    return result of every method
*/

const multiFilter = (...fns) => e => fns.every(fn => fn(e));