/*
You will be given an array of objects representing data about developers
who have signed up to attend the next web development meetup that you are
organising. Three programming languages will be represented:
Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three
programming languages is ** at most 2 times higher than the number of
developers representing any of the remaining programming languages**;
or false otherwise.
For example, given the following input array:

var list = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3)
is 3 times higher than the number of Python developers (1). It can't be more
than 2 times higher to be regarded as language-diverse.

Notes:
The strings representing all three programming languages will always be
formatted in the same way (e.g. 'JavaScript' will always be formatted with
upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.

Parameters: an array of objects (representing devs and their info)
Returns: Boolean
  if the highest language count is no more than 2x higher than any other
Examples:
  let list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  isLanguageDiverse(list1) // false

  let list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  isLanguageDiverse(list2) // true
Pseudocode:
  initialize a count variable assigned to an empty object
  iterate over input list
    check if current language exits as a key in count obj
      if it does
        increment its value
      if not
        initialize language key assigned to value of 1
  convert count obj to an array of values
  check if max value is less than or equal to min value doubled
    if it is
      return true
    if no
      return false
*/

function isLanguageDiverse(list) {
  return (count = Object.values(list.reduce((o, c) => ({...o, [c.language]: (o[c.language] || 0) + 1}), {}))) && Math.max(...count) <= Math.min(...count) * 2;
}