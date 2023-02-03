/*
You'll implement once, a function that takes another function as
an argument, and returns a new version of that function that can
only be called once.

Subsequent calls to the resulting function should have no effect
(and should return undefined).

Parameters: a fn
Returns:
  if first call
    return result of input fn call
  otherwise
    return undefined
Examples:
  logOnce = once(console.log)
  logOnce("foo"), "foo"
  logOnce("bar"), undefined
Pseudocode:
  initialize a called var assigned to boolean false
  return an inner fn definition (accepts args)
    if not called
      reassign outer called var to true
      call outer fn arg with inner fn args spread
*/

function once(fn) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}