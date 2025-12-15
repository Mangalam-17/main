public class FloorandCeil {

  public static int findFloor(int arr[], int target) {
    int n = arr.length;
    int low = 0;
    int high = n - 1;
    int floor = -1;

    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] <= target) {
        floor = arr[mid];
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return floor;
  }

  // ceil is the lowerbound only if we observe carefully
  public static int findCeil(int arr[], int target) {
    int n = arr.length;
    int low = 0;
    int high = n - 1;
    int ceil = -1;

    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] >= target) {
        ceil = arr[mid];
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ceil;
  }

  public static void main(String args[]) {
    int arr[] = { 3, 4, 4, 7, 8, 10 };
    int target = 8;
    int floor = findFloor(arr, target);
    int ceil = findCeil(arr, target);
    System.out.println(floor + " " + ceil);
  }
}
