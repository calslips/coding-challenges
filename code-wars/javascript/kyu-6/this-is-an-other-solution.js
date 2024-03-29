/*
In a previous kata we try to create an object with mutable
properties.

The function NamedOne taken first & last names as parameters,
returned an object with firstName, lastName and fullName
( = firstName + a space + lastName ) properties.
These properties were mutable.

For example, with a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.fullName  // -> "Naomi Wang"
...we were able to change its properties:

namedOne.firstName = "John"
namedOne.lastName = "Doe"
namedOne.fullName  // -> "John Doe"
//..or..
namedOne.fullName = "Bill Smith"
namedOne.firstName // -> "Bill"
namedOne.lastName // -> "Smith"

##Your mission

On the contrary, the purpose of this kata is to create an
OnceNamedOne object with immutable properties.

That means .firstName, .lastName and .fullName are defined
into the Constructor and can't be no more changed.

The properties are still readable using the dot or bracket
notation but there're not writable.

##Examples:

var onceNamed = new OnceNamedOne("Naomi","Wang")

// ...then...
onceNamed.firstName // -> "Naomi"
onceNamed.lastName  // -> "Wang"
onceNamed.fullName // -> "Naomi Wang"

// ...if you try : ...
onceNamed.firstName = "Bill"
// ...or...
onceNamed['lastName'] = "Smith"

// ...then...
onceNamed['firstName'] // -> "Naomi"
onceNamed['lastName']  // -> "Wang"
onceNamed['fullName'] // -> "Naomi Wang"

// ..but you can still create other instances..
var otherOne = new OnceNamedOne("Don","Jones")
otherOne.fullName // -> "Don Jones"

Can you change our function to create such a OnceNamedOne
object ?

Parameters: 2 strs
Returns: an obj
Examples:
  const obj = new OnceNamedOne('first', 'last');
  obj.firstName; // 'first'
  obj.lastName; // 'last'
  obj.fullName; // 'first last'

  obj.firstName = 'change';
  obj.lastName = 'me';
  obj.fullName; // 'first last'
Pseudocode:
  define class
    initialize private vars firstName & lastName
    define constructor to take in first & last
      assign firstName & lastName vars to respective params
    define getters for firstName, lastName & fullName
*/

class OnceNamedOne {
  #firstName;
  #lastName;
  constructor(first, last) {
    this.#firstName = first;
    this.#lastName = last;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}