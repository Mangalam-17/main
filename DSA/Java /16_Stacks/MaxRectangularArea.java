// Monotonic

import java.util.*;

public class MaxRectangularArea {

  public static void maxArea(int heights[]) {
    int maxArea = 0;
    int nsr[] = new int[heights.length];
    int nsl[] = new int[heights.length];

    // next smaller right --- same code as ngr, just condition becomes greater and values assign changes
    Stack<Integer> s = new Stack<>();

    for (int i = heights.length - 1; i >= 0; i--) {
      while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
        s.pop();
      }
      if (s.isEmpty()) {
        nsr[i] = heights.length;
      } else {
        nsr[i] = s.peek();
      }
      s.push(i);
    }

    // next smaller left --- same code as nsr, just forward loop, further -1 and top value assign
    s = new Stack<>();

    for (int i = 0; i < heights.length; i++) {
      while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
        s.pop();
      }
      if (s.isEmpty()) {
        nsl[i] = -1;
      } else {
        nsl[i] = s.peek();
      }
      s.push(i);
    }

    // current area
    // width = j - i - 1 = nsr[i] - nsl[i] - 1
    for (int i = 0; i < heights.length; i++) {
      int height = heights[i];
      int width = nsr[i] - nsl[i] - 1;
      int currArea = height * width;
      maxArea = Math.max(currArea, maxArea);
    }

    System.out.println("Maximum Area in my histogram is = " + maxArea);
  }

  public static void main(String args[]) {
    int heights[] = { 2, 1, 5, 6, 2, 3 }; // heights in histogram
    int heights2[] = { 2, 4 }; // heights in histogram
    maxArea(heights);
    maxArea(heights2);
  }
}
