/*
Given an object with an arbitrary number of properties, any number
of which may be objects or arrays, replace all values which are
strictly equal to the string: "dynamic" with a given string
occurring anywhere in that object or a child object or array.

Your solution should be recursive.

Your solution should be "in place" meaning it return the original
object, not a copy.

Your solution should also include some type safety. If a value that
isn't an object or array is passed as the first argument, it should
just return whatever was passed in.

Parameters:
  an object/array
  a str
Returns: obj/array
  (mutates passed in obj/array in place,
  replace all values of "dynamic with
  passed in str arg")
Examples:
  const data = {
    foo: "dynamic",
    bar: {
      baz: ["dynamic"]
    },
    dynamic: true
  };
  const result = solution(data, "static");
  result.foo === "static"
  result.bar.baz[0] === "static"
Pseudocode:
  if data is not an obj
    return data as is
  if data is an array
    iterate over the length of array
      if current el is an obj
        reassign current el to equal recursive call to fn with current obj and str arg
      otherwise if current el equals str "dynamic"
        replace el with str arg
  if data is an obj
    iterate over the keys of the obj
      if current value is an obj
        reassign value of key to equal recursive call to fn with current obj and str arg
      otherwise if current value equals str "dynamic"
        replace value with str arg
  return data obj
*/

function solution(data, replace) {
  if (typeof data !== 'object') return data;
  if (Array.isArray(data)) {
    data.forEach((e, i, a) => {
      if (typeof e === 'object') solution(e, replace);
      else if (e === 'dynamic') a[i] = replace;
    });
  } else {
    for (let key in data) {
      if (typeof data[key] === 'object') solution(data[key], replace);
      else if (data[key] === 'dynamic') data[key] = replace;
    }
  }
  return data;
}