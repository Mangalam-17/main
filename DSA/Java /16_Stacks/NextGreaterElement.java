// Monotonically Decreasing 
// this problem is basically nextGreaterElementToRight 

import java.util.*;

public class nextGreaterElement {

  public static void main(String args[]) {
    int arr[] = { 6, 8, 0, 1, 3 };
    Stack<Integer> s = new Stack<>();
    int nextGreaterElement[] = new int[arr.length];

    for (int i = arr.length - 1; i >= 0; i--) {
      //1. while loop
      while (!s.isEmpty() && arr[s.peek()] <= arr[i]) {
        // arr[s.peek()] -> this is the index
        s.pop();
      }

      //2. if-else
      if (s.isEmpty()) {
        nextGreaterElement[i] = -1;
      } else {
        nextGreaterElement[i] = arr[s.peek()];
      }

      //3. push
      s.push(i);
    }

    for (int i = 0; i < nextGreaterElement.length; i++) {
      System.out.print(nextGreaterElement[i] + " ");
    }
    System.out.println();
  }
}

// This problem has various forms
// 1. next Greater Right
// 2. next Greater Left
// 3. next Smaller Right
// 4. next Smaller Left

// Just small change in the loop and it works for every problems . . .