public class SearchInsertPosition {

  public static int searchInsertPosition(int arr[], int target) {
    int n = arr.length;
    int low = 0;
    int high = n - 1;
    int idx = n;

    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] >= target) {
        idx = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return idx;
  }

  public static void main(String args[]) {
    int arr[] = { 1, 2, 4, 7 };
    int target = 2;
    int result = searchInsertPosition(arr, target);
    System.out.println(result);
  }
}
