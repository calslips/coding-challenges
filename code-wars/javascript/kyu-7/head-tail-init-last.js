/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5

Your job is to implement these functions in your given language.
Make sure it doesn't edit the array; that would cause problems!
Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

Here's how I expect the functions to be called in your language:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]

Most tests consist of 100 randomly generated arrays, each with
four tests, one for each operation. There are 400 tests overall.
No empty arrays will be given. Haskell has QuickCheck tests
*/

/*
Parameters: an array of nums
Returns: a num
Examples:
  head([5,1]), 5
Pseudocode:
  return the 1st value of the array
*/

const head = list => list[0];

/*
Parameters: an array of nums
Returns: an array
Examples:
  tail([1]), []
Pseudocode:
  return the values of the input array
    excluding the 1st value
*/

const tail = list => list.slice(1);

/*
Parameters: an array of nums
Returns: an array
Examples:
  init([1,5,7,9]), [1,5,7]
Pseudocode:
  return the values of the input array
    excluding the last value
*/

const init = list => list.slice(0, -1);

/*
Parameters: an array of nums
Returns: an num
Examples:
  last([7,2]), 2
Pseudocode:
  return the last value of the array
*/

const last = list => list.at(-1);