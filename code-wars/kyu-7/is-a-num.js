/*
isNaN doesn't work very well. We want us to tell us whether the
value or object we're dealing with is a number or not. Instead,
it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number.
If you pass it a value, it will return true if a value is a valid
primitive number or Number object, and false if not.

Parameters: any data type
Returns: a boolean
  whether input is a valid primitive num or num obj
Examples:
  isAN(true), false
  isAN('5'), false
  isAN([]), false
  isAN({}), false
  isAN(5), true
  isAN(new Number(5)), true
Pseudocode:
  if args data type is number OR
  it is an instance of the Number obj AND
  is not NaN
    return true
  otherwise
    return false
*/

function isAN(value) {
  return typeof value === 'number' || value instanceof Number && !isNaN(value);
}