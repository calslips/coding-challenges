package leetcode.java.easy;

/*
Parameters: a string
Returns: a boolean
Examples:
  Input: s = "()"
  Output: true

  Input: s = "()[]{}"
  Output: true

  Input: s = "(]"
  Output: false
Pseudocode:
  if the input string length is odd
    return false
  initialize a stack (using deque adt)
  iterate over the brackets of input str
    if stack is empty and the current bracket is a closing bracket
      return false (it will never be valid)
    otherwise if stack is NOT empty AND
    current bracket closes bracket at the top of the stack
      remove bracket from the top of the stack
    otherwise
      add current bracket to the top of the stack
  if bracket is empty
    return true
  otherwise
    return false
*/

import java.util.Deque;
import java.util.ArrayDeque;

// runtime 7 ms beats 6.35%, memory 41 mb beats 9.50%
class Solution {
    public boolean isValid(String s) {
        if (s.length() % 2 == 1) return false;
        Deque<String> stack = new ArrayDeque<>();
        for (String bracket : s.split("")) {
            if (stack.isEmpty() &&
                (bracket.equals(")") ||
                bracket.equals("}") ||
                bracket.equals("]")))
                return false;
            else if (!stack.isEmpty() &&
                (bracket.equals(")") && stack.peek().equals("(") ||
                bracket.equals("}") && stack.peek().equals("{") ||
                bracket.equals("]") && stack.peek().equals("[")))
                stack.pop();
            else stack.push(bracket);
        }
        return stack.isEmpty();
    }
}

// runtime 8 ms beats 6.35%, memory 41.6 mb beats 5.25%
// class Solution {
//     public boolean isValid(String s) {
//         Deque<String> stack = new ArrayDeque<>();
//         for (String bracket : s.split("")) {
//             if (stack.size() > 0 &&
//                 (bracket.equals(")") && stack.peek().equals("(") ||
//                 bracket.equals("}") && stack.peek().equals("{") ||
//                 bracket.equals("]") && stack.peek().equals("[")))
//                 stack.pop();
//             else stack.push(bracket);
//         }
//         return stack.size() == 0;
//     }
// }

// runtime 8 ms beats 6.35%, memory 41 mb beats 9.50%
// import java.util.Map;
// import java.util.Deque;
// import java.util.ArrayDeque;

// class Solution {
//     public boolean isValid(String s) {
//         Deque<String> stack = new ArrayDeque<>();
//         Map<String, String> map = Map.of(")", "(", "}", "{", "]", "[");
//         for (String bracket : s.split("")) {
//             if (map.containsKey(bracket)) {
//                 if (!stack.isEmpty() && stack.peek().equals(map.get(bracket))) stack.pop();
//                 else return false;
//             } else stack.push(bracket);
//         }
//         return stack.isEmpty();
//     }
// }