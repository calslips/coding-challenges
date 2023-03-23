/*
Here is a rope with a length of x cm. We will cut it in the
following way: each m cm to make a mark, and then each n cm to
make a mark. Finally, We cut the rope from the marked place.
Please calculate that we have a total of several kinds of length
of the rope, and how many of each kind of rope?

For example:

length=10, here is a rope with length of 10 cm, each "-" is 1cm
----------
m=2,       we make marks at each 2cm, "." is the mark
--.--.--.--.--
n=3,       we make marks at each 3cm, "." is the mark
--.-.-.--.--.-.-
cut the rope from these marked place, we got:
--  -  -  --  --  -  -
so the result should be: 1cm rope x 4 and 2cm rope x 3

Task
Complete function cutRope() that accepts three arguments length,
m and n(three positive integer). Their meaning please refer to
the above explanation.
You should return an object that contains all kinds of rope and
its numbers.
Like the example above, should return: {"1cm":4,"2cm":3}

Parameters: 3 nums
Returns: an obj
  containing the resulting lengths of rope
  and their respective count
Examples:
  cutRope(6,2,3), {"1cm":2,"2cm":2}
  cutRope(7,2,3), {"1cm":3,"2cm":2}
  cutRope(10,2,3), {"1cm":4,"2cm":3}
  cutRope(10,2,5), {"1cm":2,"2cm":4}
  cutRope(11,2,5), {"1cm":3,"2cm":4}
  cutRope(10000,3,5), {"1cm":1334,"2cm":1333,"3cm":2000}
  cutRope(1,2,3), {"1cm":1}
  cutRope(2,2,3), {"2cm":1}
  cutRope(3,2,3), {"1cm":1,"2cm":1}
  cutRope(100,100,1), {"1cm":100}
Psuedocode:
  initialize a rope var as a str of dashes equalling length arg
  iterate over rope,
  keep track of count (to count sections),
  increment index by 1 each iteration
    when count equals m
      reassign rope to equal rope sliced from 0 to current index
      concatted with '.'
      concatted with rope sliced from current index to end
      increment index by 1
      reassign count to 0
    if current value is a dash
      increment count by 1
  perform the same loop above, but swap m with n value
  split rope on dots (remove empty sections)
  reduce split rope into an obj
    keys, current section length + 'cm'
    value, count incremented
  return reduced obj
*/

function cutRope(l, m, n, p = 0) {
  return Array(l + 1).fill().reduce((o, _, i) => (i && (!(i % m) || !(i % n) || i === l) && (o[`${i - p}cm`] = ++o[`${i - p}cm`] || 1) && (p = i), o), {});
}

function cutRope(length, m, n) {
  let r = '-'.repeat(length);
  [m, n].forEach(e => {for (let i = 0, c = 0; i < r.length; r[i] === '-' && c++, i++) if (c === e) r = r.slice(0, i) + '.' + r.slice(i++), c = 0;});
  return r.split('.').filter(Boolean).reduce((o, k) => (o[`${k.length}cm`] = ++o[`${k.length}cm`] || 1, o), {});
}