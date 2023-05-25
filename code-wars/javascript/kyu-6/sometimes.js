/*
Implement a function sometimes that takes another funciton as
an argument and returns a new version of that function that
will behave as the following:

// Example function that will be passed as an argument to sometimes
function add (a, b) {
    return a + b;
}

const s = sometimes(add);

// The first 3 tmes we call s it returns add's expected output
s(4, 6) // returns 10
s(3, 6) // returns 9
s(2, 6) // returns 8

// But the 4th time it returns a default message 'hmm, I don't know!'
s(1, 6) // returns 'hmm, I don't know!'

// Each consecutive odd call returns add's expected output
s(1, 5) // returns 6

// Each consecutive even call doesn't work and returns 'hmm, I don't know!'
s(1, 4) // returns 'hmm, I don't know!'

Parameters: a fn
Returns: a fn
  the passed in fn
  fn that returns str when call count is >= 4 and even
    "hmm, I don't know!"
Examples:
  function add (a, b) {
    return a + b;
  }
  const s = sometimes(add);
  s(4, 6), 10
  s(3, 6), 9
  s(2, 6), 8
  s(1, 6), "hmm, I don't know!"
  s(1, 5), 6
  s(1, 4), "hmm, I don't know!"
Pseudocode:
  initialize call count to 1
  use closure
  return inner fn (collect args)
    if call count (post fix increment) is greater than 3 and even
      return str "hmm, I don't know!"
    otherwise
      return outer arg fn called with inner fn args
*/

function sometimes(fn) {
	let calls = 0;
  return (...args) => ++calls > 3 && !(calls % 2) ? "hmm, I don't know!" : fn(...args);
}

function sometimes(fn) {
	let calls = 0;
  return (...args) => calls++ && calls > 3 && !(calls % 2) ? "hmm, I don't know!" : fn(...args);
}

function sometimes(fn) {
	let calls = 1;
  return (...args) => calls++ && calls - 1 > 3 && !((calls - 1) % 2) ? "hmm, I don't know!" : fn(...args);
}