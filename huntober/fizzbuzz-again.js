// Given a number as an input, print out every integer from 1 to that number.
// However, when the integer is divisible by 2, print out “Fizz”;
// when it’s divisible by 3, print out “Buzz”;
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// always takes in a num (int), always greater than 0?
// no return? print = console log?
// print every num from 1 to the input,
// but if the num is divisible by BOTH 2 & 3, print "Fizz Buzz"
// if the num is only divisible by 2, print "Fizz"
// if the num is only divisible by 3, pring "Buzz"

function fizzBuzz(num) {
  // create a loop to run from 1 to the input num
    // implement some sort of check / conditional
    // if num is divisible by BOTH 2 & 3 (product of 2 & 3 = 6; if divisible by 6)
      // print 'Fizz Buzz' to the console
    // if num is divisible by ONLY 2
      // print 'Fizz' to the console
    // if num is divsible by ONLY 3
      // print 'Buzz' to the console
    // otherwise
      // print the num itself (i) to the console.
  for (let i = 1; i <= num; i++) {
    !(i % (2 * 3)) ? console.log('Fizz Buzz') : !(i % 2) ? console.log('Fizz') : !(i % 3) ? console.log('Buzz') : console.log(i);
  }
}

//examples
console.log(fizzBuzz(10), [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz"]);
console.log(fizzBuzz(15), [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11, "Fizz Buzz", 13, "Fizz", "Buzz"]);
console.log(fizzBuzz(20), [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11, "Fizz Buzz", 13, "Fizz", "Buzz", "Fizz", 17, "Fizz Buzz", 19, "Fizz"]);