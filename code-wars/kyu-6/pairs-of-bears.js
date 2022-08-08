/*
In order to prove it's success and gain funding, the wilderness zoo needs
to prove to environmentalists that it has x number of mating pairs of bears.

Task:
You must check within a string (s) to find all of the mating pairs,
returning a list/array of the string containing valid mating pairs and a
boolean indicating whether the total number of bears is greater than or
equal to x.

Rules for a 'valid' mating pair:
Bears are either 'B' (male) or '8' (female),
Bears must be together in male/female pairs 'B8' or '8B',
Mating pairs must involve two distinct bears each ('B8B' may look fun,
but does not count as two pairs).
Return an array containing a string of the valid mating pairs available
(empty string if there are no pairs), and a boolean indicating whether
the total number of bears is greater than or equal to x. , e.g:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example,
the number of bears(=4) is lesser than the given value of x(=6)

Parameters:
  a number (the goal for # of mating bears)
  a string (containing potential bear pairs 'B8' or '8B')
Returns:
  an array
    1st element a string containing valid mating pairs from input str
    2nd element a boolean, determining if # of mating bears is >= input #
Examples:
  bears(7, '8j8mBliB8gimjB8B8jlB') // ["B8B8B8",false]
  bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd') // ["8BB8B8B88B",true]
  bears(8, '8') // ["",false]
Pseudocode:
  initialize pairs variable as an empty string
  iterate over the length of input string
    if current char is 'B' AND next char is '8'
      concat pairs with 'B8'
      reassign input string to exclude current & next char
      decrement counter variable
    else if current char is '8' AND next char is 'B'
      concat pairs with '8B'
      reassign input string to exclude current & next char
      decrement counter variable
  return array
    1st element is pairs string
    2nd element a conditional; is pairs length / 2 >= # arg

NOT valid
  initialize pairs variable as an empty string
  create a loop to run as long as input string contains 'B8' OR '8B'
    if index of 'B8' >= 0
      concat pairs with char at found index & char at found index + 1
      reassign input string to exclude the chars added to pairs above
    if index of '8B' >= 0
      concat pairs with char at found index & char at found index + 1
      reassign input string to exclude the chars added to pairs above
  return array
    1st element is pairs string
    2nd element a conditional; is pairs length / 2 >= # arg
*/

function bears(x, s) {
  let pairs = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'B' && s[i + 1] === '8' || s[i] === '8' && s[i + 1] === 'B') {
      pairs += s[i] + s[i + 1];
      i++;
    }
  }
  return [pairs, pairs.length / 2 >= x];
}

// could have just incremented count within if body to skip next char
// when condition is satisfied VS s reassignment / manipulation AND
// decrementing count

// function bears(x, s) {
//   let pairs = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'B' && s[i + 1] === '8' || s[i] === '8' && s[i + 1] === 'B') {
//       pairs += s[i] + s[i + 1];
//       s = s.slice(0, i) + s.slice(i + 2);
//       i--;
//     }
//   }
//   return [pairs, pairs.length / 2 >= x];
// }

// NOT valid
// function bears(x, s) {
//   let pairs = '';
//   while (s.includes('B8') || s.includes('8B')) {
//     if ((p1 = s.indexOf('B8')) >= 0) {
//       pairs += s[p1] + s[p1 + 1]
//       s = s.slice(0, p1) + s.slice(p1 + 2)
//     }
//     if ((p2 = s.indexOf('8B')) >= 0) {
//       pairs += s[p2] + s[p2 + 1]
//       s = s.slice(0, p2) + s.slice(p2 + 2)
//     }
//   }
//   return [pairs, pairs.length / 2 >= x];
// }