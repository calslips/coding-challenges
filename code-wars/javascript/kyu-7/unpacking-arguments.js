/*
You must create a function, spread, that takes a function and a
list of arguments to be applied to that function. You must make
this function return the result of calling the given
function/lambda with the given arguments.

Parameters:
  a fn
  an array of arguments (any type)
Returns: the result of calling the fn arg with args passed in
Examples:
  spread(someFunction, [1, true, "Foo", "bar"] )
    // someFunction(1, true, "Foo", "bar")
Pseudocode:
  return the result of call to fn with args passed in as individual args
*/

function spread(func, args) {
  return func(...args);
}