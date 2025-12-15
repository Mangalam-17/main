public class LowerBound {

  public static int lowerBound(int arr[], int target) {
    int n = arr.length;
    int low = 0;
    int high = n - 1;
    int ans = n;

    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] >= target) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }

  public static void main(String args[]) {
    int arr[] = { 1, 2, 2, 3 };
    int target = 2;
    int result = lowerBound(arr, target);
    System.out.println(result);
  }
}
