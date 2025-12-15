import java.util.*;

public class recBubbleSort {

  public static void sortFun(int arr[], int n) {
    if (n == 1) return;

    for (int j = 0; j <= n - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    sortFun(arr, n - 1);
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the size of the array - ");
    int n = sc.nextInt();

    int[] arr = new int[n];

    System.out.print("Enter the elements of the array - ");
    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    sortFun(arr, n);

    System.out.print("The sorted array is - ");
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}
