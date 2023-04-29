/*
You have to write a calculator that receives strings for input.
The dots will represent the number in the equation. There will be
dots on one side, an operator, and dots again after the operator.
The dots and the operator will be separated by one space.

Here are the following valid operators :
+ Addition
- Subtraction
* Multiplication
// Integer Division

Your Work (Task)
You'll have to return a string that contains dots, as many the
equation returns. If the result is 0, return the empty string.
When it comes to subtraction, the first number will always be
greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""

Parameters: a string
Returns: a string
Examples:
  Solution.calc("..... // ."), "....."
  Solution.calc("..... * .."), ".........."
  Solution.calc("..... // .."), ".."
  Solution.calc("..... - ."), "...."
  Solution.calc("..... + ..............."), "...................."
  Solution.calc("..... * ..."), "..............."
  Solution.calc("..... - ..."), ".."
  Solution.calc(". - ."), ""
  Solution.calc(". // .."), ""
Pseudocode:
  split input str into an array of parts, split on space
  if the part at index 1 is "+"
    return "." repeated part at index 0 length PLUS part at index 2 length times
  if the part at index 1 is "-"
    return "." repeated part at index 0 length MINUS part at index 2 length times
  if the part at index 1 is "*"
    return "." repeated part at index 0 length TIMES part at index 2 length times
  if the part at index 1 is "//"
    return "." repeated part at index 0 length DIVIDED BY part at index 2 length times
*/

// original class name Solution
class DotCalculator {
  public static String calc(String txt) {
    String[] parts = txt.split(" ");
    if (parts[1].equals("+")) return ".".repeat(parts[0].length() + parts[2].length());
    if (parts[1].equals("-")) return ".".repeat(parts[0].length() - parts[2].length());
    if (parts[1].equals("*")) return ".".repeat(parts[0].length() * parts[2].length());
    if (parts[1].equals("//")) return ".".repeat(parts[0].length() / parts[2].length());
    return "Invalid operator";
  }
}