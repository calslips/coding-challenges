/*
The Cat In The Hat has cat A under his hat, cat A has cat B under
his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of
one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.

Parameters: a num
Returns: a str
  float fixed to 3 decimal places
Examples:
  height(7), "3331148.800"
  height(0), "2000000.000"
Pseudocode:
  initial cat height is 2,000,000
  each subsequent cat is shorter by 2.5x
  sum all the heights together and return

  initialize sum var assigned to 0
  iterate from 0 through input n,
  (maintain var to hold prev cat size initalized at 2 mil,
  increment counter by 1 each iteration &
  prev size to equal itself divided by 2.5)
    reassign sum to equal itself plus prevs size
  return sum fixed to 3 decimal places
*/

function height(n) {
  let sum = 0;
  for (let i = 0, prev = 2000000; i <= n; i++, prev /= 2.5) sum += prev;
  return sum.toFixed(3);
}
