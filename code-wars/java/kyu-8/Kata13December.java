/**
 * The method is supposed to remove even numbers from the list and
 * return a list that contains the odd numbers.

However, there is a bug in the method that needs to be resolved.

 * @param {List<Integer>} listOfNumbers
 * @return {List<Integer>}
 *
 * Examples:
 *    List<Integer> listOfNumbers1 = new LinkedList<>(Arrays.asList(1, 2, 2, 2, 4, 3, 4, 5, 6, 7));
 *    List<Integer> expectedResult1 = new LinkedList<>(Arrays.asList(1, 3, 5, 7));
 *    Kata13December.filterOddNumber(listOfNumbers1) == expectedResult1;
 *
 *    List<Integer> listOfNumbers2 = new LinkedList<>(Arrays.asList( 1, 2, 2, 2, 4, 3, 4 ));
 *    List<Integer> expectedResult2 = new LinkedList<>(Arrays.asList( 1, 3 ));
 *    Kata13December.filterOddNumber(listOfNumbers2) == expectedResult2;
 * Pseudocode:
 *    Bug
 *      when an even int was removed,
 *      the implementation did NOT account for the remaining values shifting left to fill the space
 *      and ended up skipping the true next int whenever an even int was removed
 *    Fix
 *      decrement index when an even int is removed
 *      now the true next int will be evaluated as intended
 */

import java.util.List;

public class Kata13December {
  public static List<Integer> filterOddNumber(List<Integer> listOfNumbers) {
    for (int i = 0; i < listOfNumbers.size(); i++) {
      if (listOfNumbers.get(i) % 2 == 0) {
        listOfNumbers.remove(i);
        i--;
      }
    }
    return listOfNumbers;
  }
}