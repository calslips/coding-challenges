/*
You are the owner of a box making company.

Your company can produce any equal sided polygon box, but plenty
of your customers want to transport circular objects in these
boxes. Circles are a very common shape in the consumer industry.
Tin cans, glasses, tyres and CD's are a few examples of these.

As a result you decide to add this information on your boxes:
The largest (diameter) circular object that can fit into a given
box.

Parameters: none
Returns: a double
Examples:
  Polygon poly=new Polygon(4, 5);
  poly.circleDiameter(), 5.0

  Polygon poly=new Polygon(8, 9);
  poly.circleDiameter(), 21.728

  Polygon poly=new Polygon(3, 4);
  poly.circleDiameter(), 2.309
Pseudocode:
  define circleDiameter method, takes in no args, returns a double
    calculate the inradius of the polygon
      side length / (2 * tan(180 / side count * pi / 180))
    double the inradius to get the diameter
    return diameter
*/

public class Polygon {
  int sides;
  int sideLength;

  public Polygon(int sides, int sideLength) {
    this.sides = sides;
    this.sideLength = sideLength;
  }

  public double circleDiameter() {
    return this.sideLength / Math.tan(180.0 / this.sides * Math.PI / 180);
  }
}