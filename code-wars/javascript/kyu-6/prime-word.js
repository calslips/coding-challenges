/*
X and Y are playing a game. A list will be provided which
contains n pairs of strings and integers. They have to add the
integeri to the ASCII values of the stringi characters. Then
they have to check if any of the new added numbers is prime or
not. If for any character of the word the added number is prime
then the word will be considered as prime word.
Can you help X and Y to find the prime words?

Example:
prime_word({{"Emma",30},{"Liam",30}}) = {1,1};
For the first word "Emma" ASCII values are: 69 109 109 97
After adding 30 the values will be: 99 139 139 127
As 139 is prime number so "Emma" is a Prime Word.

Parameters: an array of arrays (tuples)
  subarray contains a str and a num
Returns: an array of nums
  if the respective word was prime, num will be 1
  otherwise, num will be 0
Examples:
  primeWord([["Emma",30],["Liam",30]]), [1,1]
  primeWord([["Olivia",20],["Noah",45]]), [0,1]
  primeWord([["Ava",75],["William",50]]), [1,1]
  primeWord([["Ava",100],["William",55]]), [1,1]
  primeWord([["Ava",55],["William",17]]), [1,0]
  primeWord([["Ava",51],["William",79]]), [0,0]
Pseudocode:
  map over input array
    for each subarray
      convert str el into an array of associated char codes with num el added to each
      if some of the new nums are prime
        return 1
      otherwise
        return 0
  return mapped array
*/

function primeWord(arr) {
  return arr.map(([s, n]) => +[...s].map(c => c.charCodeAt() + n).some(isPrime));
}
function isPrime(n) {
  for (let i = 2; i <= n ** .5; i++) if (!(n % i)) return false;
  return n > 1;
}