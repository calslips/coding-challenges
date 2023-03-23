/*
In the morning all the doors in the school are closed. The school
is quite big: there are N doors. Then pupils start coming. It
might be hard to believe, but all of them want to study! Also,
there are exactly N children studying in this school, and they
come one by one.

When these strange children pass by some doors they change their
status (i.e. Open -> Closed, Closed -> Open). Each student has
their number, and each i-th student alters the status of every
i-th door. For example: when the first child comes to the schools,
he changes every first door (he opens all of them). The second one
changes the status of every second door (he closes some doors: the
  2nd, the 4th and so on). Finally, when the last one – the n-th –
  comes to the school, he changes the status of each n-th door
  (there's only one such door, though).

You need to count how many doors are left opened after all the
students have come.

Input:
n – the number of doors and students, n ∈ N, n ∈ [1, 100000]

Output:
o – the number of opened doors, o ∈ N

Parameters: a num (door & student count)
Returns: a num (open door count)
Examples:
  doors(5), 2
  doors(10), 3
  doors(100), 10
Pseudocode:
  Timed out, needed to refactor
    intialize an array the length of input num
      fill the array with false values
    create a loop to run input num times
      iterate over the boolean array
        if inner index + 1 is evenly divisible by outer index + 1
          invert current value
    return count of true values in boolean array

  Improved solution, inner loop only iterates over
  elements to modify vs above iterating over every element
    initialize an array the length of input num
      fill the array with false values
    create an outer loop to run from 0 to n,
    incrementing by 1
      create an inner loop to run from outer counter to n,
      starting at outer counter,
      incrementing by 1 plus outer counter
        invert the boolean at inner counter index of boolean array
    return count of true values in boolean array
*/

function doors(n) {
  const ds = Array(n).fill(false);
  for (let i = 0; i < n; i++) for (let j = i; j < n; j += i + 1) ds[j] = !ds[j];
  return ds.reduce((c, d) => d ? ++c : c, 0);
}