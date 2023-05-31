/*
I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again?
Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient.
We are required to use Object Literal Notation.

Parameters: none
Returns: object
Examples:
  myFunction().objMethod(), 'string'
Pseudocode:
  correct naming conventions
  add commas
  return object instead of object method call
*/

function myFunction() {
  return {
    objProperty: 'string',
    objMethod: function() { return this.objProperty },
  }
}

function myFunction() {
  const myObject = {
    objProperty: 'string',
    objMethod: function() {
      return myObject.objProperty;
		},
  };
  return myObject;
}