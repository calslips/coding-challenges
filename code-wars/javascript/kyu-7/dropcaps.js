/*
DropCaps means that the first letter of the starting word of
the paragraph should be in caps and the remaining lowercase,
just like you see in the newspaper.

But for a change, let"s do that for each and every word of the
given String. Your task is to capitalize every word that has
length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space
"   space WALK   " => "   Space Walk   "

Note: you will be provided atleast one word and should take
string as input and return string as output.

Parameters: a str
Returns: a str
Examples:
  dropCap('Apple Banana'), "Apple Banana"
  dropCap('Apple'), "Apple"
  dropCap(''), ""
  dropCap('of'), "of"
  dropCap('Revelation of the contents outraged American public opinion, and helped generate'),
    "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
  dropCap('more  than    one space between words'), "More  Than    One Space Between Words"
  dropCap('  leading spaces'), "  Leading Spaces"
  dropCap('trailing spaces   '), "Trailing Spaces   "
  dropCap('ALL CAPS CRAZINESS'), "All Caps Craziness"
  dropCap('rAnDoM CaPs CrAzInEsS'), "Random Caps Craziness"
Pseudocode:
  split input str on spaces
  map over array of strs
    if length of current str is greater than 2
      capitalize the 1st char
      lowercase the remaining chars
    otherwise
      leave the str as is
  join array of strs on spaces
  return modified str
*/

function dropCap(n) {
  return n.split(' ').map(s => s.length > 2 ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s).join(' ');
}