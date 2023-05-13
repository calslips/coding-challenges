/*
When a function is called by itself it is bound to the global
context; the this variable of the function will be bound to the
global object.

When the getNameFunc function is called on the alpha object the
value of the name variable outside of the object is returned:
"The Window".

We do not want this, we want the value of the name property
inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.

Parameters: none
Returns: str
  the alpha obj's name prop
Examples:
  alpha.getNameFunc()(), 'My Alpha'
Pseudocode:
  replace returning this obj's name prop with alpha's
*/

const alpha = {
  name: 'My Alpha',
  getNameFunc: function() {
    return function() {
      return alpha.name;
    };
  },
};