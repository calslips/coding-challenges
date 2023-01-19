/*
Get the digits sum of nth number from the Look-and-Say sequence(1-based).
1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

Input/Output
[input] integer n
nth number in the sequence to get where 1 <= n <= 55 and n=1 is "1".

[output] an integer
The sum of digits in nth number from the Look-and-Say sequence.

Example
For n = 2, the output shoule be 2.
"11" --> 1 + 1 --> 2

For n = 3, the output shoule be 3.
"21" --> 2 + 1 --> 3

For n = 4, the output shoule be 5.
"1211" --> 1 + 2 + 1 + 1 --> 5

Parameters: a num
Returns: a num
  the sum of digits from the num
  at the input nums place within
  the look and say sequence
  starting from 1
Examples:
  lookAndSayAndSum(1), 1
  lookAndSayAndSum(2), 2
  lookAndSayAndSum(3), 3
  lookAndSayAndSum(4), 5
  lookAndSayAndSum(5), 8
  lookAndSayAndSum(8), 16
  lookAndSayAndSum(15), 132
Pseudocode:
  initialize a results array containing str 1
  create a loop to run from 1 to input, exclusive
  initialize a str var assigned to prev str num in results
  initialize a result var assigned to an empty str
  increment counter by 1, reassign result to '' each iteration
    iterate over the length of str num
    initialize a count var assigned to 1
      if current value equals next value
        increment count
      otherwise
        concat result with count and current value
        reassign count to 1
    push result to results
  target the last value of results array
  sum all the digits (convert from str to num)
  return sum
*/

// cut it close to execution time out (12000ms)
function lookAndSayAndSum(n) {
  const results = ['1'];
  for (let i = 0, result = ''; i < n; i++, result = '') {
    for (let j = 0, count = 1, str = results[i]; j < str.length; j++) {
      str[j] === str[j + 1] ? count++ : (result += count + str[j]) && (count = 1);
    }
    results.push(result);
  }
  return [...results[n - 1]].reduce((s, n) => s + +n, 0);
}

// memoization reduced execution time to a quarter/third of above
function memoLookAndSayAndSum() {
  const results = ['1'];
  return n => {
    if (!results[n - 1]) {
      for (let i = results.length - 1, result = ''; i < n; i++, result = '') {
        for (let j = 0, count = 1, str = results[i]; j < str.length; j++) {
          str[j] === str[j + 1] ? count++ : (result += count + str[j]) && (count = 1);
        }
        results.push(result);
      }
    }
    return [...results[n - 1]].reduce((s, n) => s + +n, 0);
  };
}

const lookAndSayAndSum = memoLookAndSayAndSum();

// keeping track of sums along with sequences, didn't change execution time much
function memoLookAndSayAndSum() {
  const results = ['1'], sums = [1];
  return n => {
    if (!sums[n - 1]) {
      for (let i = results.length - 1, result = '', sum = 0; i < n; i++, result = '', sum = 0) {
        for (let j = 0, count = 1, str = results[i]; j < str.length; j++) {
          str[j] === str[j + 1] ? count++ : (sum += count + +str[j]) && (result += count + str[j]) && (count = 1);
        }
        results.push(result), sums.push(sum);
      }
    }
    return sums[n - 1];
  };
}

const lookAndSayAndSum = memoLookAndSayAndSum();