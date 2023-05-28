/*
Write
function evaluate(left, op, right)

that given two operands (left and right) and an operator (op),
will evaluate and return the result.

For example:

var left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
// You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
// then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
// root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
// each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally
// 'divide'.
var right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [1, 2, 3, 4, 5],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
evaluate(left, 'add', right) === -467.0083333333333

Parameters:
  an object
  a str
  an object
Returns: a num
Examples:
  const left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
  };
  const right = {
      'subtract': {
          'add': [1, 2, 3, 4, 5],
          'subtract': [1, 2, 3, 4, 5],
          'multiply': [1, 2, 3, 4, 5],
          'divide': [1, 2, 3, 4, 5]
      }
  };
  evaluate(left,'add',right), -467.0083333333333
  evaluate(left,'subtract',right), -282.9916666666667
  evaluate(left,'multiply',right), 34503.125
  evaluate(left,'divide',right), 4.075717779186667
  evaluate(right,'subtract',left), 282.9916666666667
  evaluate(right,'divide',left), 0.24535555555555558
Pseudocode:
  define a hash for ops
    op str as key, respective fn as value
  convert left/right to an array of entries
  ensure value obj of entries is in proper order
    (add, subtract, multiply, divide)
  map over left/right entry values
    reduce each entry value array into a num
      for 1st value array,
        sum all nums
      for 2nd value array,
        subtract all nums
      for 3rd value array,
        multiply all nums
      for 4th value array,
        divide all nums
  reduce mapped array into a num
    performing entry key operation between each el
  return result of performing op on new left and new right
*/

function evaluate(left, op, right) {
  const ops = {
    'add': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
  },
  [l, r] = [left, right].map(e => {
    let [k, v] = Object.entries(e)[0];
    v = {add: v.add, subtract: v.subtract, multiply: v.multiply, divide: v.divide};
    return Object.entries(v).map(([o, a]) => a.reduce((r, n) => ops[o](r, n))).reduce((r, n) => ops[k](r, n));
  });
  return ops[op](l, r);
}