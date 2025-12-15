import java.util.*;

public class FirstandLastPos {

  private static int lowerBound(int[] arr, int target) {
    int low = 0,
      high = arr.length;
    while (low < high) {
      int mid = (low + high) / 2;
      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  private static int upperBound(int[] arr, int target) {
    int low = 0,
      high = arr.length;
    while (low < high) {
      int mid = (low + high) / 2;
      if (arr[mid] <= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  public static int[] searchRange(int[] arr, int target) {
    int lb = lowerBound(arr, target);
    if (lb == arr.length || arr[lb] != target) {
      return new int[] { -1, -1 };
    }
    int ub = upperBound(arr, target);
    return new int[] { lb, ub - 1 };
  }

  public static void main(String args[]) {
    int[] arr = { 5, 7, 7, 8, 8, 10 };
    int target = 10;
    System.out.println(Arrays.toString(searchRange(arr, target)));
  }
}
