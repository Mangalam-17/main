public class allOccurences {

  public static void f(int arr[], int key, int idx) {
    if(idx == arr.length) return;

    if(arr[idx] == key){
        System.out.print(idx + " "); 
    }
    f(arr, 2, idx+1);
  }

  public static void main(String args[]) {
    int arr[] = { 3, 2, 4, 5, 6, 2, 7, 2, 2 };

    f(arr, 2, 0);
  }
}