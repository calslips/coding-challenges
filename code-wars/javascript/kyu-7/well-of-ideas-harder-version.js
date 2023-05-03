/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array
(x) for good ideas 'good' and bad ideas 'bad'. If there are one
or two good ideas, return 'Publish!', if there are more than 2
return 'I smell a series!'. If there are no good ideas, as is
often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd
  all count as a good idea). All inputs may not be strings.

Parameters: a 2d array of strs
Returns: a str
Examples:
  well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!'
  well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!'
  well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!'
Pseudocode:
  reduce the input array, accumulator set to 0
    iterate over each sub array
      if current str equals good, case insensitive
        increment accumulator
    return accumulator
  if num from reducing array is 0
    return 'Fail'
  otherwise if its less than 3
    return 'Publish!'
  otherwise
    return 'I smell a series!'
*/

function well(x) {
  const count = x.flat().filter(e => typeof e === 'string' && e.toLowerCase() === 'good').length;
  return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}

function well(x) {
  const count = x.reduce((c, a) => (a.forEach(e => typeof e === 'string' && e.toLowerCase() === 'good' && c++), c), 0);
  return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}