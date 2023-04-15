/**
 * Help! THB has gone missing, and we need you to find him!
 * You will be given a string, and must return a string including
 * only the t's, h's, and b's from the original string.
 * Include both uppercase and lowercase.

Remember, you should return an empty string if you are given an
empty string or a null string. Good luck!

 * @param {String} initial
 * @return {String}
 *
 * Examples:
 *    THB check = new THB;
 *    check.testing("For those of you who would like to test your solution before submitting it.").equals("thhttttbbttt")
 * Pseudocode:
 *    initialize thb string var as an empty string
 *    if input is null
 *      return thb (empty string)
 *    loop over the length of the input string
 *      if current char of string equals t, h, or b case insensitive
 *        concat thb var with current char
 *    return thb var
 */

import java.util.Objects;

public class THB {
  public static String testing(String initial) {
    String thb = "";
    if (Objects.isNull(initial)) return thb;
    for (int i = 0; i < initial.length(); i++) {
      String letter = initial.substring(i, i + 1);
      if (letter.equalsIgnoreCase("t") || letter.equalsIgnoreCase("h") || letter.equalsIgnoreCase("b")) {
        thb += letter;
      }
    }
    return thb;
  }
}

// import java.util.Objects;

// public class THB {
//   public static String testing(String initial) {
//     String thb = "";
//     if (Objects.isNull(initial)) return thb;
//     for (int i = 0; i < initial.length(); i++) {
//       if (Character.toLowerCase(initial.charAt(i)) == 't' ||
//           Character.toLowerCase(initial.charAt(i)) == 'h' ||
//           Character.toLowerCase(initial.charAt(i)) == 'b'
//       ) {
//         thb += initial.charAt(i);
//       }
//     }
//     return thb;
//   }
// }