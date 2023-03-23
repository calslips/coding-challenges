/*
Classy Extensions, this kata is mainly aimed at the new JS ES6
Update introducing extends keyword. You will be preloaded with
the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and
replace the speak method to return the cats name + meows.
e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby)
or self.name (Python).

Parameters: str, name of animal
Returns: none
  extend Animal class
  modify speak method for Cat subclass
Examples:
  const cat = new Cat('Mr Whiskers');
  cat.speak(), 'Mr Whiskers meows.'
  cat instanceof Animal, true
  cat instanceof Cat, true
Pseudocode:
  modify speak method to return a str containing name + meows
*/

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}