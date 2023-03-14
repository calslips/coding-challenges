/*
In this Kata, you will write a function doubles that will remove
double string characters that are adjacent to each other.

For example:
doubles('abbcccdddda') = 'aca', because, from left to right:
a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters
   that are adjacent.
c) Of the 3 c's, we remove two. We are only removing doubles.
d) The 4 d's all disappear, because we first remove the first
   double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.

Two more examples:
doubles('abbbzz') = 'ab' and doubles('abba') = "".
In the second example, when we remove the b's in 'abba',
the double a that results is then removed.

The strings will contain lowercase letters only.
More examples in the test cases.

Parameters: a str
Returns: a str
  adjacent doubles removed
Examples:
  doubles('abbbzz'), 'ab'
  doubles('zzzzykkkd'), 'ykd'
  doubles('abbcccdddda'), 'aca'
  doubles('vvvvvoiiiiin'), 'voin'
  doubles('rrrmooomqqqqj'), 'rmomj'
  doubles('xxbnnnnnyaaaaam'), 'bnyam'
Pseudocode:
  iterate over input str
    if char at current index equals char at next index
      reassign str to equal str sliced from 0 to current index
        concatted with str sliced from index + 2 to end
      decrement counter by 2
  return str
*/

function doubles(s) {
  for (let i = 0; i < s.length; i++) if (s[i] === s[i + 1]) s = s.slice(0, i) + s.slice(i + 2), i -= 2;
  return s;
}