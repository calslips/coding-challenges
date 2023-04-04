/*
Implement all required functions in order to create the
following sentences by calling those functions:

Adam(has(a(dog())));
  // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam())))))));
  // must return "The name of the dog is also Adam."

Parameters: a fn or nothing
Returns: a str
Examples:
  Adam(has(a(dog()))), 'Adam has a dog.'
  The(name(of(the(dog(is(also(Adam()))))))), 'The name of the dog is also Adam.'
Pseudocode:
  if an arg has been passed into the fn
    return a str containing the fn name with a space and return of arg fn
  otherwise
    return a str containing the fn name with a period at the end
*/

function Adam(f) {
  return f ? `Adam ${f}` : 'Adam.';
}
function has(f) {
  return f ? `has ${f}` : 'has.';
}
function a(f) {
  return f ? `a ${f}` : 'a.';
}
function dog(f) {
  return f ? `dog ${f}` : 'dog.';
}
function The(f) {
  return f ? `The ${f}` : 'The.';
}
function name(f) {
  return f ? `name ${f}` : 'name.';
}
function of(f) {
  return f ? `of ${f}` : 'of.';
}
function the(f) {
  return f ? `the ${f}` : 'the.';
}
function is(f) {
  return f ? `is ${f}` : 'is.';
}
function also(f) {
  return f ? `also ${f}` : 'also.';
}