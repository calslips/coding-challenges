/*
Lets call a prime number the primiest if all of its digits are also prime.

You are given an integer k. Find the kth (1-based) primiest number.
If k is invalid or the answer is greater than 10000, return -1 instead.

Input/Output
[input] integer k
  The number of the primiest number to find.
  -100 ≤ k ≤ 100
[output] an integer
  The kth primiest number,
  or -1 if k is invalid
  or the answer is greater than 10000.

Example
For k = 2, the output should be 3.
The first primiest number is 2, and the second one is 3, so the answer is 3.

For k = 0, the output should be -1.
k = 0 is an invalid value.

For k = 100, the output should be -1.
The 100th primiest number is greater than 10000.

Parameters: a num
Returns: a num
Examples:
  primiestNumber(2),3
  primiestNumber(3),5
  primiestNumber(4),7
  primiestNumber(5),23
  primiestNumber(6),37
  primiestNumber(7),53
  primiestNumber(23),773
  primiestNumber(32),3253
  primiestNumber(0),-1
  primiestNumber(100),-1
  primiestNumber(-100),-1
Pseudocode:
  define a memo fn
    initialize primiest var assigned to an array containing 2 and 3
    return inner fn takes in k
      if input is greater than last pos of primiest < 10k OR less than 1
        return -1
      if primiest at index input - 1 exists
        return it
      otherwise
        define potential primiest as last value in primiest plus 2
        while primiest at index input - 1 is undefined
          check if potential is a valid primiest
          if potential is a valid primiest
            push to primiest arr
          increment potential by 2
      return primiest at index input - 1
*/

const primiestNumber = primiestNumberMemo();

function primiestNumberMemo() {
  const primiest = [2, 3];
  return k => {
    if (k < 1 || k > 61) return -1;
    for (let p = primiest.at(-1) + 2; !primiest[k - 1]; p += 2) if (isPrimiest(p)) primiest.push(p);
    return primiest[k - 1];
  }
}

function isPrimiest(n) {
  return isPrime(n) && [...`${n}`].every(isPrime);
}

function isPrime(n) {
  for (let i = 2; i <= n ** .5; i++) if (!(n % i)) return false;
  return n > 1;
}