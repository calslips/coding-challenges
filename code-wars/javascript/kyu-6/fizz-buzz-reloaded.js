/*
In this kata you must implement the "fizz buzz reloaded function".
This function takes the following arguments:

start (integer >= 0).
  -> this is the point where we start counting (inclusive).
stop (integer >= 1)
  -> this is the point where we stop counting (inclusive).
step (integer) if step is positive count forwards,
  if count is negative count backwards.

for example:

start = 2, end = 10, step = 2
  sequence: 2 4 6 8 10

start = 10, end = 1, step = -3
  sequence: 10 7 4 1

The final paremeter is a dictionary/Map object of functions
(where the key is the name of the function,
  and the value is the function itself).
  These functions take the following form:

func(x): return bool

For each number in the range, your task is to create a string
where you combine the name of all functions that equate to true
for the number.

for example, suppose the dictionary/Map object looks like this:

new Map([["flash", x => x % 3 === 0], ["bang", x => x % 5 === 0]])

for the number 3, the string ought to be "fizz",
for the number 15 it ought to be "fizzbuzz" (no spaces) because
both of the functions are true. If NO functions equate to true,
return the number

OKay, lets show you a concrete example.

fizzBuzzReloaded(15, 3, -4, new Map([["flash", x => x % 3 === 0], ["bang", x => x % 5 === 0]]))

Our range is starting at 15 and ending at 3, with a step of -4.
Thus we need to look at three numbers (15, 11, 7, 3).

fizz(15) is true, as is buzz(15).
  Thus to the results we append "fizzbuzz"
fizz(11) is false, buzz(11) is false.
  Thus to the results we append "11", the same can be said for "7".
finally, fizz(3) is true but buzz(3) is false.
  Thus we append "fizz" to the results.

Therefore, our final sequence is: "fizzbuzz 11 7 fizz"

NOTES:

Each element in the output should be seperated by a single space.
  e.g: 1 2 3 4 ...
If multiple functions are true for any given x, return them in same
order found in the intial dictionary. (for example, in the case
  above 15 is "fizzbuzz" not "buzzfizz" because "fizz" appears first)
This kata is designed with Python3.6 in mind.
In this version of Python dictionary's are ordered.

Parameters:
   a num
   a num
   a num
   a map of fns
Returns: a str
Examples:
  let funcs1 = new Map([["fizz",x=>true]]);
  fizzBuzzReloaded(1, 3, 1, funcs1), "fizz fizz fizz"

  let funcs2 = new Map([["fizz",x=>false]]);
  fizzBuzzReloaded(1, 3, 1, funcs2), "1 2 3"

  let funcs3 = new Map([["fizz",x=>x%3===0], ["buzz",x=>x%5===0]])
  fizzBuzzReloaded(1, 19, 1, funcs3),
    "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19"
  fizzBuzzReloaded(19, 1, -1, funcs3),
    "19 fizz 17 16 fizzbuzz 14 13 fizz 11 buzz fizz 8 7 fizz buzz 4 fizz 2 1"

  let funcs4 = new Map([["flash",x=>x%3===0], ["bang",x=>x%5===0]])
  fizzBuzzReloaded(15, 3, -4, funcs4), "flashbang 11 7 flash"
Pseudocode:
  initialize a nums array assigned to an empty array
  create a loop to run from start num thru end num
  incrementing/decrementing by step
    push current num to nums array
  map over nums array
    initialize str var assigned to an empty str
    iterate over functions map
      if current function evaluates true for current num
        concat str with fn name
    if str is empty
      concat current num with str
    return str
  return map joined on spaces
*/

function fizzBuzzReloaded(start, stop, step, functions) {
  const nums = [];
  for (let i = start, str = ''; step > 0 ? i <= stop : i >= stop; i += step, str = '')
    functions.forEach((v, k) => v(i) && (str += k)), nums.push(str || i);
  return nums.join(' ');
}

function fizzBuzzReloaded(start, stop, step, functions) {
  const nums = [];
  for (let i = start; step > 0 ? i <= stop : i >= stop; i += step) nums.push(i);
  return nums.map(n => {
    let str = '';
    functions.forEach((v, k) => v(n) && (str += k));
    return str || n;
  }).join(' ');
}