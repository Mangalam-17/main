import java.util.*;
public class selectionSort {
  public static void sortFunc(int arr[], int n) {
    // Applying bubble sort
    for (int i = n - 1; i >= 0; i--) {
      int didSwap = 0;
      for (int j = 0; j <= i; j++) {
        if (arr[j] > arr[j + 1]) {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          didSwap = 1;
        }
      }
      if (didSwap == 0) {
        break;
      }
      System.out.println("running. . .");
    }
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter value of n : ");
    int n = sc.nextInt();
    int[] arr = new int[n];

    System.out.print("Enter the array you want to sort : ");
    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    sortFunc(arr, n);

    System.out.print("Your sorted array is : ");
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}