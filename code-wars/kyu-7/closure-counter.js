/*
Define the function counter that returns a function that returns
an increasing value.
The first value should be 1.
You're going to have to use closures.

Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2

Closure:
A closure is the combination of a function bundled together
(enclosed) with references to its surrounding state (the lexical
  environment). In other words, a closure gives you access to an
  outer function’s scope from an inner function. In JavaScript,
  closures are created every time a function is created, at
  function creation time.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

Parameters: none
Returns: a num
  outer fn returns an inner fn
  that maintains access to its
  lexical scope of counter,
  incrementing each call
Examples:
  const counterFunction = counter();
  counterFunction(), 1
  counterFunction(), 2

  const counterOne = counter();
  const counterTwo = counter();
  counterOne(), 1
  counterOne(), 2
  counterTwo(), 1
  counterTwo(), 2
Pseudocode:
  define outer function
    initialize count var assigned to value of 1
    return inner fn definition
      return & increment outer count var
*/

function counter() {
  let count = 1;
  return () => count++;
}