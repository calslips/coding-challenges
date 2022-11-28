/*
This function is supposed to take a string input containing 0 or
more names as well as some text. It should locate all of the names
and return them in the form of an array.

Each person's name will be listed in the form
"Name: sub-name1 sub-name2 sub-name3;".
There will be between 1 and 3 sub-names for each person's "Name:"
and the final subname will always be followed by a ";".

##A person's Name:

Can be located in the input text by: "Name: name-here;"

A name is made up of 1 to 3 subnames

A sub-name is made up of one or more upper or lowercase letters

However, a sub-name may be double barralled and can therefore
contain a dash "-" between two sub-strings of alphabetic characters
only. So "Name: Tony-Joe anDy robERT;" has first sub-name "Tony-Joe"
and last sub-name "Robert"

If a sub-name begins or ends with a dash "-", it should be considered
a mistake and removed from the returned name.
So "Name: -barack -obaMa-;" has first sub-name "Barack" and
last sub-name "Obama"

##To be returned: An array whose elements correspond to each person's
first sub-name and, if they have more than one sub-name,
then also their last sub-name.

One array element represents one person's name
Each element should be of the form: "Last sub-name, first sub-name"
If a person's name is made up of just one sub-name,
  the element should simply be "first sub-name"
Capitalize first letter of each sub-name including double barralled names
The rest of the letters should be lower case
If there are no legitimate names in the input,
  then an empty array should be returned

##Some examples:

getNames("Here is one person. Name: MarilYN MONroe;")
=> ["Monroe, Marilyn"]

getNames("Now we have 2 people.. Name: john fitzgerald kennedy; Name: STING;")
=> ["Kennedy, John", "Sting"]

getNames("Here is one name. Name: -voldemort-; and then we can add two more names. Name: ian BAKER-finch; Name: -Tara -jess -Palmer-Thompkinson;")
=> ["Voldemort", "Baker-Finch, Ian", "Palmer-Thompkinson, Tara"]

Parameters: a string
  (a sentence containing potential names)
Returns: an array of strings
  (names in the expected format)
Examples:
  getNames("a list of names: Name: jay raay Okocha; Name: -jay-;"), ["Okocha, Jay", "Jay"]
  getNames("Name: -jay- -raay- -Okocha-; Name: -jay-;"), ["Okocha, Jay", "Jay"]
  getNames("Hello this is a list of names Name: -FRANK-fURTER -raay-MAY -dank-Durtur-; Name: simon-cowell jeff jack-jones-; Name: frank ocean; yes that is all the names")
    , ["Dank-Durtur, Frank-Furter", "Jack-Jones, Simon-Cowell", "Ocean, Frank"]
  getNames("Hello this is a list of names Name: Jack Murphy; Name: jack- -murphy; Name: -jack- --murphy; Name: jack- tho- -murphy; Name: jack- -thomas- -murphy; Name: -jack- mor- -murphy-; Name: jack- franc-fro- -murphy; yes that is all the names")
    , ["Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack"]
  getNames("Here is no names."), []
  getNames("Still no names. Name: ;"), []
  getNames("Again no legitimate names. Name: -;"), []
Pseudocode:
  isolate the portion of the input str that contains the names
  split the isolated portion into an array of names
  iterate over each name (map)
    split the names on spaces
    isolate the 1st &/ last names
    remove -'s from start/end of 1st &/ last names
    uppercase 1st letter and lowercase remaining letters of both names
      (account for hypehnated name)
    return name str in new format of last, 1st
  return mapped name arr or empty arr (if it doesn't contain actual names)
*/

function getNames(input) {
  const names = [];
  for (let s = input.indexOf('Name:'), e = input.indexOf(';'); s > -1; input = input.slice(e + 1), s = input.indexOf('Name:'), e = input.indexOf(';')) {
    names.push(input.slice(s + 6, e));
  }
  if (names.every(n => !n || n.toUpperCase() === n.toLowerCase())) return [];
  return names.map(n => {
    let name = n.split(' '), first = name[0], last = name[name.length - 1];
    while (first.startsWith('-')) first = first.slice(1);
    while (first.endsWith('-')) first = first.slice(0, -1);
    while (last.startsWith('-')) last = last.slice(1);
    while (last.endsWith('-')) last = last.slice(0, -1);
    first = first[0].toUpperCase() + first.slice(1).toLowerCase();
    last = last[0].toUpperCase() + last.slice(1).toLowerCase();
    if ((d = first.indexOf('-')) > -1) first = first.slice(0, d + 1) + first[d + 1].toUpperCase() + first.slice(d + 2);
    if ((d = last.indexOf('-')) > -1) last = last.slice(0, d + 1) + last[d + 1].toUpperCase() + last.slice(d + 2);
    return first === last ? first : `${last}, ${first}`;
  });
}