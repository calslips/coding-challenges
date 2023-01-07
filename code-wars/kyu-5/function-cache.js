/*
If you are calculating complex things or execute time-consuming
API calls, you sometimes want to cache the results. In this case
we want you to create a function wrapper, which takes a function
and caches its results depending on the arguments, that were
applied to the function.

Parameters: a function
Returns: result of calling callback fn
  1st invocation should perform the cb call
  any repeated calls with same arg should reference the cache
  only new args faciliate cb call
Examples:
  const complexFunction = function(arg1, arg2) { complex calculation in here };
  const cachedFunction = cache(complexFunction);
  cachedFunction('foo', 'bar');
    // complex function should be executed
  cachedFunction('foo', 'bar');
    // complex function should not be invoked again, instead the cached result should be returned
  cachedFunction('foo', 'baz');
    // should be executed, because the method wasn't invoked before with these arguments
Pseudocode:
  initialize a cache to store cb results relative to passed in args
  return a fn definition that takes in 2 args
    define str version of args
    if cache does not contain a key equalling the 2 str args concatenated
      create a key equalling the 2 str args concatenated
      with the value being the return of calling cb with both args passed in
    return the value within cache at the key equalling the 2 str args concatenated
*/

function cache(func) {
  const cache = {};
  return (arg1, arg2) => {
    const strArg1 = JSON.stringify(arg1), strArg2 = JSON.stringify(arg2);
    if (!(strArg1 + strArg2 in cache)) cache[strArg1 + strArg2] = func(arg1, arg2);
    return cache[strArg1 + strArg2];
  }
}