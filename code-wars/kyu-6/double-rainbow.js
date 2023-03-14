/*
You've gone out hunting for double rainbows!

Given a random string of letters, create a function that will
determine if the string contains all the letters necessary to
construct (without spaces) the seven colours of the rainbow:
Red, Orange, Yellow, Green, Blue, Indigo, Violet.

Some strings may not contain all the letters to construct the
rainbow, some strings may simply be too short and some strings
may even contain the coveted Double Rainbow!

**OUTPUT**
* If there are enough letters to fully construct one rainbow,
return ```Look! A rainbow!```

Example (all 36 letters can be found in both):
```REDORANGEYELLOWGREENBLUEINDIGOVIOLET```
```EKPREINEFZGSEQDNROEMBXGIROUOMONGTYALBVLUWVDHGSEALGOAILLKEEIDNRJTLTVYEHIBC```

If the string is too short to possibly contain all necessary
letters, return Too short for a rainbow!

If the string is long enough, but the letters to construct the
rainbow cannot be found within, return No rainbow to be found!

If there are enough letters to fully construct two whole
rainbows, return Double rainbow all the way!

Example (2x all 36 letters can be found in both):
```REDORANGEYELLOWGREENBLUEINDIGOVIOLETREDORANGEYELLOWGREENBLUEINDIGOVIOLET```
```WGVGEYETILNRTEEBRJOGNKLISNYWVNMGELEOEQLKENIOFPUUDGNAZDENLVBLOYTXANOGAIQCRIOOOOJIMOERLLBEEDRDEUAIHLRFREUDEDGX```

NOTES
* The only characters the string will contain are upper-case
letters (A-Z) * The string will always be at least one character
in length, and may be longer than 200 characters

Parameters: a str
Returns: a str
  varies depending on presence of rainbow chars in input & their count
  input too short
    return 'Too short for a rainbow!'
  input is correct length, but missing chars
    return 'No rainbow to be found!'
  input contains correct chars & quantity for 1 rainbow
    return 'Look! A rainbow!'
  input contains correct chars & quantity for 2 rainbows
    return 'Double rainbow all the way!'
Examples:
  willThereEverBeARainbow('REDORANGEYELLOWGREENBLUEINDIGOVIOLET'), 'Look! A rainbow!'
  willThereEverBeARainbow('EDORANGEYELLOWGREENBLUEINDIGOVIOLET'), "Too short for a rainbow!"
  willThereEverBeARainbow('EORECDIDSEPYKWNTQVAZIESJKEOOBCCQNHQEJOXJRGLULRPGEGSN'), "No rainbow to be found!"
  willThereEverBeARainbow('REDORANGEYELLOWGREENBLUEINDIGOVIOLETREDORANGEYELLOWGREENBLUEINDIGOVIOLET'), 'Double rainbow all the way!'
  willThereEverBeARainbow('JDOIDNRETNMLLEFLORAUOHIIVLTRZRAYBEENGESCGUDEPKOENGIVYWLGBQXOE'), 'Look! A rainbow!'
  willThereEverBeARainbow('LQUEXEEARELNEPOIEBWVTYNIVEGZOLELDOIEOEAADLDTGSDREOORYNGNRNEGRENELROLYNVUODBOKCWILEUFHIGIBIJGMGTLR'), 'Double rainbow all the way!'
Pseudocode:
  if length of input str is less than rainbow length
    return 'Too short for a rainbow!'
  create a rainbow var to equal rainbow str
  create a hash for input str, chars as keys, count as value
  if every char in rainbow is contained as a key in hash
    if every rainbow char value is greater than 1
      return 'Double rainbow all the way!'
    otherwise
      return 'Look! A rainbow!'
  return 'No rainbow to be found!'
*/

function willThereEverBeARainbow(string) {
  if (string.length < 36) return 'Too short for a rainbow!';
  const rainbow = [...'REDORANGEYELLOWGREENBLUEINDIGOVIOLET'].reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map()),
        map = [...string].reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map()),
        min = Math.min(...[...rainbow.keys()].map(k => Math.floor(map.get(k) / rainbow.get(k))));
  return min > 1 ? 'Double rainbow all the way!' : min ? 'Look! A rainbow!' : 'No rainbow to be found!';
}

function willThereEverBeARainbow(string) {
  if (string.length < 36) return 'Too short for a rainbow!';
  const rainbow = [...'REDORANGEYELLOWGREENBLUEINDIGOVIOLET'].reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map()),
        map = [...string].reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map());
  if ([...rainbow.keys()].every(k => map.get(k) >= rainbow.get(k))) {
    if ([...rainbow.keys()].every(k => map.get(k) >= 2 * rainbow.get(k))) return 'Double rainbow all the way!';
    return 'Look! A rainbow!';
  }
  return 'No rainbow to be found!';
}