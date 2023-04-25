/*
Kevin is noticing his space run out! Write a function that
removes the spaces from the values and returns an array showing
the space decreasing.
For example, running this function on the array
['i', 'have','no','space'] would produce
['i','ihave','ihaveno','ihavenospace']

Parameters: an array of strings
Returns: an array of strings
Examples:
  OutOfSpace.spacey(["i", "have", "no", "space"]),
    ["i", "ihave", "ihaveno", "ihavenospace"]
  OutOfSpace.spacey(["Camel", "Case", "Should", "Remain"]),
    ["Camel", "CamelCase", "CamelCaseShould", "CamelCaseShouldRemain"]
  OutOfSpace.spacey(["Trying!", "Adding2", "Diff3rent", "Comb1nati0ns"]),
    ["Trying!", "Trying!Adding2", "Trying!Adding2Diff3rent", "Trying!Adding2Diff3rentComb1nati0ns"]
Pseudocode:
  initialize a new str arra
  iterate over the length of the input array
    concat previous value with current value
    assign concatted String to current index
  return modified array
*/

public class OutOfSpace {
  public static String[] spacey(String[] array) {
    for (int i = 1; i < array.length; i++) array[i] = array[i - 1] + array[i];
    return array;
  }
}