/*
Having created a function NamedOne which takes first & last names
as parameters and returns an object with firstName, lastName and
fullName ( = firstName + a space + lastName ) properties which
should be all accessibles, we discovered that "accessible" also
means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang"
//-- Oh no ! we want fullName == "John Doe" now !

Your mission:
So the purpose of this kata is to create an object with accessible
and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also
  be changed
If .fullName is changed, then .firstName and .lastName should also
  be changed.

Note :
  "input format" to .fullName will be firstName + space+ lastName.
  If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first &
  last names
namedOne.fullName // -> "Bill Smith" (unchanged)

Can you change our function to create such a NamedOne object ?

Parameters: 2 strs
Returns: an obj
Examples:
  const obj = new NamedOne('first', 'last');

  obj.firstName; // 'first'
  obj.lastName; // 'last'
  obj.fullName; // 'first last'

  obj.firstName = 'none';
  obj.lastName = 'ya';

  obj.firstName; // 'none'
  obj.lastName; // 'ya'
  obj.fullName; // 'none ya'
Pseudocode:
  initialize a class NamedOne
    define private var firstName
    define private var lastName
    define private var fullName
    define constructor that takes in 2 strs
      assign firstName to 1st str
      assign lastName to 2nd str
      assign fullName to firstName + space + lastName
    define getters for firstName, lastName and fullName
    define setters for firstName, lastName and fullName
      changes to firstName / lastName reflect in fullName
      change in fullName is reflected in firstName / lastName
        (only when fullName is in valid format)
*/

class NamedOne {
  #firstName;
  #lastName;
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set firstName(first) {
    this.#firstName = first;
  }
  set lastName(last) {
    this.#lastName = last;
  }
  set fullName(full) {
    const [first, last] = full.split(' ');
    if (first && last) {
      this.firstName = first;
      this.lastName = last;
    }
  }
}