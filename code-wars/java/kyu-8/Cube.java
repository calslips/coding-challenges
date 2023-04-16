/*
Create a public class called Cube without a constructor which
gets one single private integer variable Side, a getter GetSide()
and a setter SetSide(int num) method for this property. Actually,
getter and setter methods are not the common way to write this
code in C#. In the next kata of this series, we gonna refactor
the code and make it a bit more professional...

Notes:
There's no need to check for negative values!
initialise the side to 0.

Parameters:
  setSide method takes in an int
Returns:
  getSide method returns an int
Examples:
  Cube c = new Cube();
  c.setSide(3);
  c.getSide() == 3;
Pseudocode:
  declare Cube class
    initialize int instance var side assigned to 0
    define getSide method with int return type
      returns current side value
    define setSide method with void return, takes in an int
      reassigns current side value as int arg
*/

public class Cube {
  private int side = 0;

  public int getSide() {
    return this.side;
  }

  public void setSide(int num) {
    this.side = num;
  }
}