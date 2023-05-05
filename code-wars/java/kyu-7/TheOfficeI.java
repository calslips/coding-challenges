/*
Your colleagues have been looking over you shoulder. When you
should have been doing your boring real job, you've been using
the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group
that you aren't working. You're in trouble. You quickly have to
gauge the feeling in the room to decide whether or not you should
gather your things and leave.

Given a Person array (meet) containing team members, you need to
assess the overall happiness rating of the group.
If <= 5, return "Get Out Now!". Else return "Nice Work Champ!".

The Person class looks like:

class Person {
  final String name;    // team memnber's name
  final int happiness;  // happiness rating out of 10
}

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth
double it's face value (but they are still just one person!).

Parameters:
  an array of Person objs,
    containing a String name and int happiness
  String boss name (happiness is worth double)
Returns:
  String
    if overall happiness <= 5, "Get Out Now!"
    otherwise "Nice Work Champ!"
Examples:
  Person[] meet = new Person[] {
    new Person("tim", 0),
    new Person("jim", 2),
    new Person("randy", 0),
    new Person("sandy", 7),
    new Person("andy", 0),
    new Person("katie", 5),
    new Person("laura", 1),
    new Person("saajid", 2),
    new Person("alex", 3),
    new Person("john", 2),
    new Person("mr", 0)
  };
  TheOffice.outed(meet, "laura"), "Get Out Now!"
Pseudocode:
  initialize int var sum as 0
  iterate over the Person array
    if current name equals boss
      double current points and add to sum
    otherwise
      add current points to sum
  avg happiness is sum divided by Person array length
  if avg happiness is > 5
    return "Nice Work Champ!"
  otherwise
    return "Get Out Now!"
*/

// original class name TheOffice
public class TheOfficeI {
  public static String outed(Person[] meet, String boss) {
    int sum = 0;
    for (Person colleague : meet) sum += colleague.happiness * (colleague.name.equals(boss) ? 2 : 1);
    return (double) sum / meet.length > 5 ? "Nice Work Champ!" : "Get Out Now!";
  }
}

class Person {
  final String name;    // team memnber's name
  final int happiness;  // happiness rating out of 10

  public Person (String name, int happiness) {
    this.name = name;
    this.happiness = happiness;
  }
}