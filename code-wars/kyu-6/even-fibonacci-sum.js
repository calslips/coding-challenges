/*
Give the summation of all even numbers in a Fibonacci sequence up to, but
not including, the number passed to your function. Or, in other words, sum
all the even Fibonacci numbers that are lower than the given number n (n
  is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the
addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:
fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

Parameters: a number
Returns: a number
  (the sum of all even fibonacci up to, but not including the input number)
Examples:
  fibonacci(2147483647) // 1485607536
  fibonacci(1000000000) // 350704366
  fibonacci(100000000) // 82790070
  fibonacci(1000000) // 1089154
  fibonacci(1000) // 798
  fibonacci(100) // 44
  fibonacci(5) // 2
  fibonacci(8) // 2
  fibonacci(10) // 10
  fibonacci(1) // 0
Pseudocode:
  initialize fibonacci sequence array assigned to an array containing 0 and 1
  initialize counter assigned to value 1
  create a loop that will run as long as the next element to be in fib seq is < input num
    sum the last two elements in fib seq and push the sum to fib seq
  reduce fib seq
    sum only the even numbers in the fib seq
  return reduced result
*/

function fibonacci(max) {
  const seq = [0, 1];
  let i = 1;
  while (seq[i - 1] + seq[i] < max) {
    seq.push(seq[i - 1] + seq[i]);
    i++;
  }
  return seq.reduce((s, n) => !(n % 2) ? s + n : s, 0);
}

// function fibonacci(max, sum = 0) {
//   for (let i = 1, seq = [0, 1], last = seq[i - 1] + seq[i]; last < max; i++, seq.push(last), last = seq[i - 1] + seq[i]) if (!(last % 2)) sum += last;
//   return sum;
// }