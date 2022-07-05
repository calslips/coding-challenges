/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays,
you must find out if you've won the jackpot.

To do this, you must first count the 'mini-wins' on your ticket. Each subarray
has both a string and a number within it. If the character code of any of the
characters in the string matches the number, you get a mini win. Note you can
only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other
input provided (win). If your total is more than or equal to (win),
return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always
the same length.

Parameters: an array of arrays
  (sub-arrays contain 2 values; a string and a number)
Returns:
  string value of 'Winner!' or 'Loser!'
  based on number of mini wins matching or exceeding win requirement
  (can only have 1 mini win per sub array)
Examples:
  bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) // 'Loser!'
  bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) // 'Winner!'
  bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3) // 'Loser!'
Pseudocode:
  iterate over the input array (filter)
    split string value of subarray into an array of letters
    iterate over array of letters (some)
      check if some of the letters char code equals the number value of subarray
  check if length of filtered array is equal to or greater than win input
    if true
      return 'Winner!'
    otherwise
      return 'Loser!'
*/

function bingo(ticket, win) {
  return ticket.filter(([s, n]) => [...s].some(l => l.charCodeAt() === n)).length >= win ? 'Winner!' : 'Loser!';
}

// function bingo(ticket, win) {
//   return ticket.filter(m => [...m[0]].some(l => l.charCodeAt() === m[1])).length >= win ? 'Winner!' : 'Loser!';
// }