// Given a number as an input, print out every integer from 1 to that number.
// However, when the integer is divisible by 3, print out “Fizz”;
// when it’s divisible by 5, print out “Buzz”;
// when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// expected input number data type, be at least 1? can input be <= 0, if so how to handle?
// print up to AND including input num or stop before input num?
// no actual return, only printing to console?
// expected result, want each print to be on its own line or the entire
  // sequence printed on one line?
  // when number to be printed is divisible by 3, print string 'Fizz'
  // when number to be printed is divisible by 5, print string 'Buzz'
  // when number to be printed is divisble by 3 AND 5, print string 'Fizz Buzz'
  // otherwise print number as is

  function fizzBuzz(num) {
    // create a loop runs count of 1 to input, increment count by 1
      // if current count is divisibly by 3 AND 5
        // print 'Fizz Buzz'
      // otherwise if current count is divisible by 3
        // print 'Fizz'
      // otherwise if current count is divisible by 5
        // print 'Buzz'
      // otherwise
        // print current count
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz')
      } else if (i % 3 === 0) {
        console.log('Fizz')
      } else if (i % 5 === 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
  }

  console.log(fizzBuzz(0), 'undefined')
  console.log(fizzBuzz(5), [1, 2, 'Fizz', 4, 'Buzz'])
  console.log(fizzBuzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'])
  console.log(fizzBuzz(15), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'])