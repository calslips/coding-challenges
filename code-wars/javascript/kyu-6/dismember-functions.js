/*
As a part of this Kata, you need to write a function to dismember functions.
You need to extract the names of all formal arguments of the function from
its definition as an array.

For example, given is a function as shown below:

function add (a, b) {
    return a + b;
}

Running dismember on the function would provide:

dismember(add) => ["a", "b"]

There could be functions that are declared without any explicitly named
variables, for example:

function average () {
    return Array.prototype.slice.apply(arguments).reduce(function (a, c) {
        return a + c;
    }, 0) / arguments.length;
}

I'm sure the above function implementation is not the best, it's not even
great and would run into issues when no arguments are passed. For such
functions, return an empty array.

dismember(average) => []

Please note: The internal implementation of the function holds no importance
in this Kata, one just needs to dismember the arguments and return them in
the sequence in which they are named.

Parameters: a fn
Returns: an array of input fns params
Examples:
  dismember(function () { return 0; }), []
  dismember(function (arg1) { return arg1; }), ["arg1"]
  dismember(function (z, b) { return z + b; }), ["z", "b"]
  dismember(function ( a, c ) { return a + c; }), ["a", "c"]
Pseudocode:
  get input fn definition
  slice fn definition from 1st open parentheses to 1st closing parentheses
  split params str into an array of params
  return array of params
*/

function dismember(func) {
  return (p = `${func}`.slice(`${func}`.indexOf('(') + 1, `${func}`.indexOf(')')).trim()) ? p.split(', ') : [];
}