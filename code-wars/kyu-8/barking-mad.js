/**
 * Teach snoopy and scooby doo how to bark using object methods.
 * Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
 */

class Dog {
  constructor(breed) {
    breed;
  }
  bark() {
    return 'Woof';
  }
}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");
