import java.util.*;

public class selectionSort {

  public static void sortFunc(int arr[], int n) {
    // Applying selection sort
    for (int i = 0; i <= n - 2; i++) {
      int min = i;
      for (int j = i; j <= n-1; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      int temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
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
