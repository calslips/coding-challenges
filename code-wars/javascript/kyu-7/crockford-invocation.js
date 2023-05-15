/*
Write three functions add, subtract, and multiply such that each
require two invocations.

For example:
add(3)(4)      // 7
subtract(3)(4) // -1
multiply(3)(4) // 12

Once you have done this. Write a function apply that takes one of
these functions as an argument and invokes it.

For example:
apply(add)(3)(4)      // 7
apply(subtract)(3)(4) // -1
apply(multiply)(3)(4) // 12
*/

const add = a => b => a + b, subtract = a => b => a - b, multiply = a => b => a * b, apply = fn => fn;

/*
Parameters: a num
Returns: a fn that also takes in a num
  returns sum of outer arg with inner arg
Examples:
  add(3)(4), 7
Pseudocode:
  return fn
    return outer arg plus inner arg
*/

function add(a) { return b => a + b; }
const add = a => b => a + b;

/*
Parameters: a num
Returns: a fn that also takes in a num
  returns difference between outer arg and inner arg
Examples:
  subtract(3)(4), -1
Pseudocode:
  return fn
    return outer arg minus inner arg
*/

function subtract(a) { return b => a - b; }
const subtract = a => b => a - b;

/*
Parameters: a num
Returns: a fn that also takes in a num
  returns product of outer arg and inner arg
Examples:
  multiply(3)(4), 12
Pseudocode:
  return fn
    return outer arg times inner arg
*/

function multiply(a) { return b => a * b; }
const multiply = a => b => a * b;

/*
Parameters: a fn
Returns: a fn (to be curried with subsequent args)
Examples:
  apply(add)(3)(4), 7
  apply(subtract)(3)(4), -1
  apply(multiply)(3)(4), 12
Pseudocode:
  return fn arg
*/

function apply(fn) { return fn; }
const apply = fn => fn;