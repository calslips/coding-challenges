/*
There are all types of cylons. The trick is, some look like humans.
Using prototypical inheritance, create a prototype for Cylon.
Cylons should have a model, and should have an attack function,
which will return the string "Destory all humans!"

Since some cylons appear human, then make a child object called
HumanSkin. This should have a model, as Cylons do, and should have
the same attack. However, it should also have a function called
infiltrate, which will return the string "Infiltrate the colonies".

Parameters: model value (str, num, etc?)
  for both super/subclass
Returns:
  both super/subclass methods return a str
Examples:
  const cylon = new Cylon("raider")
  cylon.attack(), 'Destroy all humans!'

  const caprica = new HumanSkin(6)
  caprica.infiltrate(), 'Infiltrate the colonies'
Pseudocode:
  initialize Cylon class
    define constructor, takes in model param
      set this model prop to model value
    define attack method, no params
      return str

  initialize HumanSkin subclass of Cylon
    define constructor, takes in model param
      pass param to super constructor to set model prop
    define infiltrate method, no params
      return str
*/

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return 'Destroy all humans!';
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return 'Infiltrate the colonies';
  }
}