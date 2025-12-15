import java.util.*;
public class selectionSort {

  public static void sortFunc(int arr[], int n) {
    // Applying Insertion sort
    for (int i = 0; i <= n - 1; i++) {
      int j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        int temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
      }
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