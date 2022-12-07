/*
Amin and Sam are playing a game in which Amin gives Sam
two binary numbers a and b, written as strings, and asks
him to calculate the minimum number of right rotate of
string a that minimize the Hamming distance between a
and b. Help Sam answer this question for the given a and b.

A Hamming distance between strings of equal length a and b
is defined as the number of positions i, such that a[i] ≠ b[i].

Input
2 strings, a and b,
of the same length consisting of "0" and "1" characters.

Output
The lowest possible number of right-rotations of a required to
minimize the Hamming distance between a and b.

Examples
Example #1:
  for a = "100" and b = "001" the output should be 2.

After 0 rotation, a = 100,
                      | |
                  b = 001
the Hamming distance between a and b is 2.

After 1 rotation, a = 010,
                       ||
                  b = 001
the Hamming distance between a and b is 2.

After 0 rotation, a = 001,

                  b = 001
the Hamming distance between a and b is 0.

0 is the minimum Hamming distance,
so the answer is 2(it means 2nd retation).

Example #2:
  for a = "10010011" and b = "00100101" the output should be 7.

After 0 rotation, a = 10010011,
                      | || ||
                  b = 00100101
the Hamming distance between a and b is 5.

After 1 rotation, a = 11001001,
                      ||| ||
                  b = 00100101
the Hamming distance between a and b is 5.

After 2 rotation, a = 11100100,
                      ||     |
                  b = 00100101
the Hamming distance between a and b is 3.

After 3 rotation, a = 01110010,
                       | | |||
                  b = 00100101
the Hamming distance between a and b is 5.

After 4 rotation, a = 00111001,
                         |||
                  b = 00100101
the Hamming distance between a and b is 3.

After 5 rotation, a = 10011100,
                      | |||  |
                  b = 00100101
the Hamming distance between a and b is 5.

After 6 rotation, a = 01001110,
                       || | ||
                  b = 00100101
the Hamming distance between a and b is 5.

After 7 rotation, a = 00100111,
                            |
                  b = 00100101
the Hamming distance between a and b is 1.

1 is the minimum Hamming distance,
so the answer is 7(it means 7th retation).

Parameters: 2 strs (binary)
Returns: a num
  min num of right rotations of strA
  that result in the min hamming distance
  between strA and strB
Examples:
  hammingRotate("100","001"), 2
  hammingRotate("10010011","00100101"), 7
  hammingRotate("1","1"), 0
  hammingRotate("01","10"), 1
  hammingRotate("0","0"), 0
  hammingRotate("0110010011001101","0111100110110011"), 2
Pseudocode:
  if strA strictly equals strB
    return 0
  initialize ham var assigned to initial difference count
    between strA & strB
  initialize minRotations var assigned to 0
  iterate over the length of strA, starting i at 1
    reassign strA with the last char placed at the start
    count new differences between the two strs
    if diff count is less than ham
      reassign ham to diff count and reassign minRotations to i
  return minRotations
*/

function countDiffs(x, y) {
  return [...x].reduce((c, e, i) => e === y[i] ? c : ++c, 0);
}

function hammingRotate(a, b) {
  if (a === b) return 0;
  let ham = countDiffs(a, b), minRots = 0;
  for (let i = 1; i < a.length; i++) {
    a = a.slice(-1) + a.slice(0, -1);
    if ((d = countDiffs(a, b)) < ham) ham = d, minRots = i;
  }
  return minRots;
}