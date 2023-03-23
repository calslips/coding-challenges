/**
 * Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
 */

// before
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};

// after
const greet_abe = function() {
  const name = 'Abe';
  return "Hello, " + name + '!';
};
const greet_ben = function() {
  const name = 'Ben';
  return "Hello, " + name + '!';
};