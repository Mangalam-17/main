public class BinarySearchAlgo {

  public static int binarySearch(int arr[], int target) {
    int n = arr.length;
    int low = 0;
    int high = n - 1;

    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] == target) return mid;
      else if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return -1;
  }

  public static void main(String args[]) {
    int arr[] = { 1, 3, 5, 7, 9 };
    int target = 9;

    int result = binarySearch(arr, target);

    System.out.println(result);
  }
}
