import java.util.*;

public class reversearr {

  // Creating a new array and storing in the decreasing value
  public static int[] revArrUsingNewArray(int arr[]) {
    int[] revArr = new int[arr.length];

    for (int i = 0; i < arr.length; i++) {
      revArr[i] = arr[arr.length - i - 1];
    }
    return revArr;
  }

  // Iterative approach
  public static void revArr(int arr[], int n) {
    int first = 0;
    int last = n - 1;

    while (first < last) {
      int temp = arr[first];
      arr[first] = arr[last];
      arr[last] = temp;

      first++;
      last--;
    }
  }

  // Using Recursion using two pointers
  public static void revUsingRecursion(int first, int last, int arr[]) {
    if (first > last) return;

    int temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;

    revUsingRecursion(first + 1, last - 1, arr);
  }

  // USing Recursion but only using a single pointer
  public static void revUsingRecursionSP(int i, int arr[], int n) {
    if (i >= n / 2) return;

    int temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;

    revUsingRecursionSP(i + 1, arr, n);
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();

    int arr[] = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    System.out.println("Normal Array - ");
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println("\n");

    int revArr[] = revArrUsingNewArray(arr);
    // int revArr[] = revArr(arr, n);
    // int revArr[] = revUsingRecursion(0, n-1, arr);
    // int revArr[] = revUsingRecursionSP(0, arr, n);

    System.out.println("Reversed Array - ");
    for (int i = 0; i < revArr.length; i++) {
      System.out.print(revArr[i] + " ");
    }
  }
}