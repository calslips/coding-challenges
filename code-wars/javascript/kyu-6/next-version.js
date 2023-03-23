/*
You're fed up about changing the version of your software manually.
Instead, you will create a little script that will make it for you.

Exercice
Create a function nextVersion, that will take a string in parameter,
and will return a string containing the next version number.

For example:
Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"

Rules
All numbers, except the first one, must be lower than 10: if there are,
you have to set them to 0 and increment the next number in sequence.
You can assume all tests inputs to be valid.

Parameters: a str (nums separated by '.'s)
Returns: a str (increment nums to be next version)
Examples:
  nextVersion("1.2.3"), "1.2.4"
  nextVersion("0.9.9"), "1.0.0"
  nextVersion("1"), "2"
  nextVersion("1.2.3.4.5.6.7.8"), "1.2.3.4.5.6.7.9"
  nextVersion("9.9"), "10.0"
Pseudocode:
  convert input into an array of nums, reverse it
  iterate over the nums array
    if current num is less than 9
    OR current num is the last num of array
      increment current value
      break out of loop
    otherwise if current num is 9
    AND not the last num of array
      reassign current num to be 0
      continue to next iteration
  return nums array reversed and joined on '.'s
*/

function nextVersion(version) {
  version = version.split('.').map(Number).reverse();
  for (let i = 0; i < version.length; i++) {
    if (version[i] < 9 || i === version.length - 1) {
      version[i]++;
      break;
    }
    version[i] = 0;
  }
  return version.reverse().join('.');
}