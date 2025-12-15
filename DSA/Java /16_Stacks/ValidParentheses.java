// import java.util.*;

// public class ValidParentheses {

//   public static boolean isValid(String str) {
//     Stack<Character> s = new Stack<>();

//     for (int i = 0; i < str.length(); i++) {
//       char ch = str.charAt(i);

//       // opening
//       if (ch == '(' || ch == '{' || ch == '[') {
//         s.push(ch);
//       }
//       // closing
//       else {
//         if (s.isEmpty()) {
//           return false;
//         }

//         if (
//           (s.peek() == '(' && ch == ')') ||
//           (s.peek() == '{' && ch == '}') ||
//           (s.peek() == '[' && ch == ']')
//         ) {
//           s.pop();
//         } else {
//           return false;
//         }
//       }
//     }

//     if (s.isEmpty()) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   public static void main(String args[]) {
//     String str = "]]]]]]";
//     System.out.println(isValid(str));
//   }
// }

// --------------------------------------------------------------------------------------------------------

import java.util.*;

public class ValidParentheses {

  public static boolean isValid(String str) {
    Stack<Character> stack = new Stack<>();

    for (char c : str.toCharArray()) {
      if (c == '(') {
        stack.push(')');
      } else if (c == '{') {
        stack.push('}');
      } else if (c == '[') {
        stack.push(']');
      } else if (stack.isEmpty() || stack.pop() != c) {
        return false;
      }
    }
    return stack.isEmpty();
  }

  public static void main(String args[]) {
    String str = "{{{)(()}}}";
    System.out.println(isValid(str));
  }
}
