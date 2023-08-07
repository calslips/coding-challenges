/*
The pepe market is on the verge of collapse. In a last ditch
attempt to make some quick cash, you decide to sift through the
thousands of pepes on the Internet in order to identify the
rarest, which are worth more. Since this would be tedious to do
by hand, you decide to use your programming skills to streamline
the process.

Your task in this kata is to implement a function that, given a
list of pepes (pepes), returns the rarest pepe in the list. If
two or more pepes are equally rare, return a list of these pepes,
sorted in alphabetical order. Also, if the rarest pepe (or pepes)
has a frequency of 5 or more, then it is not really a rare pepe,
so your function should return 'No rare pepes!'.

Parameters: an array of strs
Returns: a str or an array of strs
Examples:
  const pepes1 = ['Donald Trump Pepe',
                  'Melania Trump Pepe',
                  'Clown Pepe',
                  'Clown Pepe',
                  'Donald Trump Pepe']
  findRarestPepe(pepes1), 'Melania Trump Pepe'

  const pepes2 = ['Go Pepe',
                 'Deep Learning Pepe',
                 'Machine Learning Pepe',
                 'Machine Learning Pepe',
                 'Machine Learning Pepe'];
  findRarestPepe(pepes2), ['Deep Learning Pepe', 'Go Pepe']

  const pepes = ['Codewars Pepe',
                 'Codewars Pepe',
                 'Codewars Pepe',
                 'Codewars Pepe',
                 'Codewars Pepe'];
  findRarestPepe(pepes), 'No rare pepes!'
Pseudocode:
  create a map to contain pepes and their count
  iterate over the input array of pepes
    if the current pepe already exists in the map
      increment its value
    otherwise
      create a key of current pepe in map with the value of 1
  find the min value within map
  if min value is greater than 4
    return 'No rare pepes!'
  convert map to array of keys
  filter keys array to only include keys with a value equal to min
  if filtered keys array has only 1 value
    return that value
  otherwise
    return the filtered array sorted alphabetically
*/

function findRarestPepe(pepes) {
  const map = pepes.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}),
        min = Math.min(...Object.values(map));
  if (min > 4) return 'No rare pepes!';
  const rarest = Object.keys(map).filter(k => map[k] === min);
  return rarest.length > 1 ? rarest.sort() : rarest[0];
}