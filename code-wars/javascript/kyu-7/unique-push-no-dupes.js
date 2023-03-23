/*
Write a function that will take an array and a person object as
parameters. The function will only push a "person" object onto
the end of an array if someone with that phone number doesn't
already exist in that array.

- A "person" is a javascript object with a name and a phoneNumber:
  {name:'SomeName', phoneNumber:1234567890}
- A duplicate person object is an object with the same phoneNumber
  as someone else

If the person object is unique,
  push them onto the end of the array, and return true.
If the person object is NOT unique,
  don't push them to the array and return false;
If the person doesn't have a phoneNumber,
  don't add them to the array and return false.

Parameters:
  an array of person objs
  an obj (person)
Returns: a boolean
  if input obj has no phoneNumber
    false
  if input obj is not unique
    false
  if input obj is unique
    true
    (also add the unique person to the input array)
Examples:
  const persons = [
    {name:'bob', phoneNumber:1234},
    {name:'joe', phoneNumber:12345}
  ]
  uniquePush(persons, {name:'I am duped', phoneNumber:12345}), false
  uniquePush(persons, {name:'Missing Number', phoneNumber:}), false
  uniquePush(persons, {name:'Add me', phoneNumber:5555555}), true
Pseudocode:
  if input obj does not have a phone number
    return false
  initialize a unique var to hold the result of checking if
    input obj phone number does NOT already exist in input array
  if unique is true
    push input obj to input array
  return unique
*/

function uniquePush(arr, obj) {
  if (!obj.phoneNumber) return false;
  return arr.every(o => o.phoneNumber !== obj.phoneNumber) && arr.push(obj);
}

function uniquePush(arr, obj) {
  if (!obj.phoneNumber) return false;
  const unique = arr.every(o => o.phoneNumber !== obj.phoneNumber);
  if (unique) arr.push(obj);
  return unique;
}