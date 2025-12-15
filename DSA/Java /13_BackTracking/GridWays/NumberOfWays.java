// import java.util.*;

// public class NumberOfWays {

//   public static int gridWays(int i, int j, int n, int m) {
//     // base case
//     if (i == n - 1 && j == m - 1) {
//       return 1;
//     }
//     if (i == n || j == m) {
//       return 0;
//     }
//     // work
//     int w1 = gridWays(i + 1, j, n, m);
//     int w2 = gridWays(i, j + 1, n, m);
//     return w1 + w2;
//   }

//   public static void main(String args[]) {
//     int n = 5;
//     int m = 5;
//     int result = gridWays(0, 0, n, m);
//     System.out.println(result);
//   }
// }

// ------------------------- using linear time complexity -----------------------------
// import java.util.*;

// public class NumberOfWays {

//   public static long factorial(int n) {
//     if (n == 0) return 1;
//     return n * factorial(n - 1);
//   }

//   public static long gridWays(int n, int m) {
//     long w1 = factorial(n + m - 2);
//     long w2 = factorial(n - 1) * factorial(m - 1);
//     return w1 / w2;
//   }

//   public static void main(String args[]) {
//     int n = 30;
//     int m = 30;
//     long result = gridWays(n, m);
//     System.out.println(result);
//   }
// }

// -------------- for bigger inputs as well -----------------------------
public class NumberOfWays {

  public static long factorial(int n) {
    long fact = 1;
    for (int i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }

  public static long gridWays(int n, int m) {
    int N = n + m - 2;
    int r = Math.min(n - 1, m - 1);
    long res = 1;
    for (int i = 1; i <= r; i++) {
      res = (res * (N - r + i)) / i;
    }
    return res;
  }

  public static void main(String[] args) {
    int n = 30;
    int m = 30;
    System.out.println(gridWays(n, m)); // Output: 6
  }
}

/* 
The logic behind the code you shared is an efficient way to calculate the binomial coefficient  (also called combinations), which represents the number of ways to choose  items from  items without repetition and without order.
Explanation of the code logic:
•	The problem is to count the number of ways to move from the top-left corner to the bottom-right corner of an  grid by moving only right or down.
•	The total number of moves you must make is:
•	Out of these  moves, you must choose  moves to be down (or equivalently right): 

•	The result is the binomial coefficient .
How the code calculates :
The binomial coefficient formula is:
But calculating factorials directly can be inefficient and can overflow quickly. Instead, the code uses an iterative approach that computes the value step-by-step, avoiding unnecessary large intermediate factorials:

This means:
•	Initialize `res = 1`.
•	For  from 1 to :
•	Multiply `res` by  (numerator term)
•	Divide `res` by  (denominator term)
This approach reduces risk of overflow and is more efficient than factorial calculations.
Summary:
•	`N = n + m - 2` total steps.
•	`r = min(n-1, m-1)` down (or right) steps to choose.
•	Compute binomial coefficient  using iterative product-division.
•	This calculates the number of unique paths from top-left to bottom-right of the grid.
The code prints the correct result `6` for a 3x3 grid.  
*/
