/*
HELP! Jason can't find his textbook! It is two days before the
test date, and Jason's textbooks are all out of order! Help him
sort a list (ArrayList in java) full of textbooks by subject,
so he can study before the test.

The sorting should NOT be case sensitive

Parameters: an array list of strings
Returns: an array list of strings
  input sorted alphabetically
Examples:
  List<String> strs1 = new ArrayList<>(Arrays.asList("Algebra", "History", "Geometry", "English"));
  List<String> sortedStrs1 = new ArrayList<>(Arrays.asList("Algebra", "English", "Geometry", "History"));
  sorter.sort(strs1).equals(sortedStrs1)

  List<String> strs2 = new ArrayList<>(Arrays.asList("Algebra", "history", "Geometry", "english"));
  List<String> sortedStrs2 = new ArrayList<>(Arrays.asList("Algebra", "english", "Geometry", "history"));
  sorter.sort(strs2).equals(sortedStrs2)

  List<String> strs3 = new ArrayList<>(Arrays.asList("Alg#bra", "$istory", "Geom^try", "**English"));
  List<String> sortedStrs3 = new ArrayList<>(Arrays.asList("$istory", "**English", "Alg#bra", "Geom^try"));
  sorter.sort(strs3).equals(sortedStrs3)
Pseudocode:
*/

import java.util.ArrayList;
import java.util.Collections;

class sorter {
  public static ArrayList<String> sort(ArrayList<String> textbooks) {
    Collections.sort(textbooks, (a, b) -> a.toLowerCase().compareTo(b.toLowerCase()));
    return textbooks;
  }
}