/*
The code provided has a method hello which is supposed to show
only those attributes which have been explicitly set.
Furthermore, it is supposed to say them in the same order they
were set.
But it's not working properly.

Note: There are 3 attributes
name
age
sex ('M' or 'F')

When the same attribute is assigned multiple times the hello
method shows it only once. If this happens the order depends on
the first assignment of that attribute, but the value is from
the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.

Task: Fix the code so we can all go home early.

Parameters:
  a num for setAge method
  a str for setSex and setName methods
  none for constructor & hello method
Returns: hello returns a str, other methods return 'this' obj
Examples:
  new Dinglemouse().setName("Bob").setAge(27).setSex('M').hello(),
    "Hello. My name is Bob. I am 27. I am male."
  new Dinglemouse().setAge(27).setSex('M').setName("Bob").hello(),
    "Hello. I am 27. I am male. My name is Bob."
  new Dinglemouse().setName("Alice").setSex('F').hello(),
    "Hello. My name is Alice. I am female."
  new Dinglemouse().setName("Batman"),
    "Hello. My name is Batman."
Pseudocode:
  define prop hash as an empty obj in constructor
  method setAge, takes in a num
    set age key in hash to value of str 'I am age.'
    return this
  method setSex, takes in a str
    set sex key in hash to value of str 'I am sex.'
    return this
  method setName, takes in a str
    set name key in hash to value of str 'My name is name.'
    return this
  method hello, no args
    convert hash to an array of values
    reduce array of values into a str (initial str 'Hello.')
      each iteration concat accumulating str with space & current value
    return reduced str
*/

class Dinglemouse {
  constructor() {
    this.hash = {};
  }
  setAge(age) {
    this.hash.age = `I am ${age}.`;
    return this;
  }
  setSex(sex) {
    this.hash.sex = `I am ${sex === 'M' ? 'male' : 'female'}.`;
    return this;
  }
  setName(name) {
    this.hash.name = `My name is ${name}.`;
    return this;
  }
  hello() {
    return Object.values(this.hash).reduce((s, v) => s + ' ' + v, 'Hello.');
  }
}