/*
You will be given an array of objects (associative arrays in PHP)
representing data about developers who have signed up to attend
the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed
up: teens, twenties, thirties, forties, fifties, sixties, seventies,
eighties, nineties, centenarian (at least 100 years young).
false otherwise.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.

Parameters: an array of objs
  each obj is a person's info
  this problem focuses on their age prop
Returns: a boolean
  whether all age groups are represented in the passed in arr
Examples:
  const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];

  const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];

  const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
  ];

  isAgeDiverse(list1), true
  isAgeDiverse(list2), false
  isAgeDiverse(list3), false
Pseudocode:
  create a loop with min initialized as 100 and max as 200
  run as long as min is greater than or equal to 10
  after each iteration set max to min and min to itself minus 10
    if all devs have an age value outside of current min & max
      return false
  if the above conditional is never triggered,
  that means all age groups exist within the input
  return true
*/

function isAgeDiverse(list) {
  for (let min = 100, max = 200; min >= 10; max = min, min -= 10) {
    if (list.every(dev => dev.age < min || dev.age >= max)) return false;
  }
  return true;
}