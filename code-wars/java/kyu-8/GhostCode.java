/*
Trollencio changed my code! can you fix it? My name is not "dumb!" o( TT_TT )o

Instructions: Fix the code

Parameters: String or null
Returns: a String
Examples:
  GhostCode.helloName("Insert Name Here"), "Hello my name is Insert Name Here"
  GhostCode.helloName(""), "Hello world!"
Pseudocode:
  originally contained "commented out" code that reassigned name var to "dumb"
    // \u000d name="dumb";
    causing fn call to always return "Hello my name is dumb"
  fix was to simply remove the line of code reassigning the name var
*/

public class GhostCode {
  public static String helloName(final String name) {
    return name == null || name.equals("") ? "Hello world!" : "Hello my name is " + name;
  }
}