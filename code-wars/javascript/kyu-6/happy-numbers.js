/*
Math geeks and computer nerds love to anthropomorphize numbers
and assign emotions and personalities to them. Thus there is
defined the concept of a "happy" number. A happy number is
defined as an integer in which the following sequence ends with
the number 1.

Start with the number itself.
Calculate the sum of the square of each individual digit.
If the sum is equal to 1, then the number is happy. If the sum
is not equal to 1, then repeat steps 1 and 2. A number is
considered unhappy once the same number occurs multiple times
in a sequence because this means there is a loop and it will
never reach 1.

For example, the number 7 is a "happy" number:
7^2 = 49 --> 4^2 + 9^2 = 97 --> 9^2 + 7^2 = 130 --> 1^2 + 3^2 + 0^2 = 10 --> 1^2 + 0^2 = 1

Once the sequence reaches the number 1,
it will stay there forever since 12 = 1

On the other hand, the number 6 is not a happy number as the
sequence that is generated is the following:
6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 58, 89

Once the same number occurs twice in the sequence, the sequence
is guaranteed to go on infinitely, never hitting the number 1,
since it repeat this cycle.

Your task is to write a program which will print a list of all
happy numbers between 1 and x (both inclusive), where:
2 <= x <= 10000

Parameters: a num
Returns: an array of nums
  all happy nums from 2 through input num
Examples:
  happyNumbers(10), [1, 7, 10]
  happyNumbers(50), [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49]
  happyNumbers(100), [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100]
Pseudocode:
  initialize a happies var assigned to an empty array
  create a loop to run from 1 through input num, increment by 1 each loop
    initialize a seen obj to hold previously encountered values
    initialize a current var assigned to counter
    create a loop to run as long as current is NOT 1 OR is NOT in seen
      place current as a key in seen
      reassign current to equal its digits squared and summed
    if current is 1
      push counter to happies array
    otherwise
      continue to next iteration
  return happies array
*/

function happyNumbers(x) {
  const happies = [];
  for (let i = 1; i <= x; i++) {
    let seen = {}, current = i;
    while (!(current === 1 || current in seen)) seen[current] = true, current = [...`${current}`].reduce((s, n) => s + n * n, 0);
    if (current === 1) happies.push(i);
  }
  return happies;
}