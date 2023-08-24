/*
An infinite number of shelves are arranged one above the other
in a staggered fashion.
The cat can jump either one or three shelves at a time: from
shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf
  directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐
│------5-│
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │
BANG!────┘  ├─────► OK!
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘

Input
Start and finish shelf numbers (always positive integers,
  finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

Parameters: 2 nums
Returns: a num
Examples:
  solution(1, 5), 2
Pseudocode:
  create a loop to run from start through end
  keep track of counter & # of jumps
    if counter equals finish
      return # of jumps
    otherwise if counter + 3 is less than or equal to finish
      add 3 to counter
      add 1 to jumps
    otherwise
      add 1 to counter and jumps
*/

function solution(start, finish) {
  for (let i = start, jumps = 0; i <= finish; jumps++) {
    if (i === finish) return jumps;
    else if (i + 3 <= finish) i += 3;
    else i++;
  }
}