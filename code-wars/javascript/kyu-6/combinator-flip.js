/*
Create a combinator function named flip that takes a function as an argument
and returns that function with it's arguments reversed.

For example:

flip(print)(4,5) // returns "5 -> 4"

function print(a,b) {
  return a + " -> " + b;
}

The idea is to reverse any number of arguments using a higher order function,
without any concern for the function being passed into it.

Parameters:
  a fn
  args
Returns:
  return of input fn, but called with args reversed
Examples:
  flip(print)(4,5), '5 -> 4'
Pseudocode:
  return an inner fn definition that collects args
    return input fn called with args reversed
*/

const flip = fn => (...args) => fn(...args.reverse());