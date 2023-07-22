/*
Write a function that replaces 'two', 'too' and 'to' with the
number '2'. Even if the sound is found mid word (like in octopus)
or not in lowercase grandma still thinks that should be replaced
with a 2. Bless her.

'I love to text' becomes 'I love 2 text'
'see you tomorrow' becomes 'see you 2morrow'
'look at that octopus' becomes 'look at that oc2pus'

Note that 'too' should become '2', not '2o'

Parameters: a str
Returns: a str
Examples:
  textin('I love to text'), 'I love 2 text'
  textin('see you tomorrow'), 'see you 2morrow'
  textin('look at that octopus'), 'look at that oc2pus'
Pseudocode:
  call replace on input str
    replace any occurrence of two with 2
    replace any occurrence of too with 2
    replace any occurrence of to with 2
    case insensitive
  return modified str
*/

const textin = s => s.replace(/two|too|to/ig, 2);

function textin(s) {
  return s.replace(/two|too|to/ig, 2);
}

function textin(s){
  return s.replace(/two/ig, 2).replace(/too/ig, 2).replace(/to/ig, 2);
}