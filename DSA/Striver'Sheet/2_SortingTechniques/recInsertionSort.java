import java.util.*;

public class recBubbleSort {

  public static void sortFun(int arr[], int n, int i) {
    if (i == n) return;

    int j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      int temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
    sortFun(arr, n, i + 1);
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the size of the array - ");
    int n = sc.nextInt();

    int arr[] = new int[n];

    System.out.print("Enter the elements of the array - ");
    for (int.i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    sortFun(arr, n, 0);

    System.out.print("The sorted array is - ");
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}
