import java.util.*;
public class prctsort{
    public static void bubbleSortingDescending(int arr[]){
        for(int turn =0; turn <arr.length -1 ; turn ++){
            for(int j = 0 ; j<arr.length-1-turn; j++){
                if(arr[j] < arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void selectionSortingDescending(int arr[]){
        for(int i = 0; i<arr.length ; i++){
            int minPos = i;
            for(int j = i+1; j<arr.length; j++){
                if(arr[minPos] < arr[j]){
                    minPos = j;
                }
            }
            //swapping
            int temp = arr[minPos];
            arr[minPos] = arr[i];
            arr[i] = temp;
        }
    }
    public static void insertionSortingDescending(int arr[]){
        for(int i = 0; i<arr.length; i++){
            int curr = arr[i];
            int prev = i-1;
            while(prev >= 0 && arr[prev] > curr){
                arr[prev+1]= arr[prev];
                prev--;
            }
            //insertion
            arr[prev+1] = curr;
        }
    }
    public static void countingSortingDescending(int arr[]){
        int largest = Integer.MIN_VALUE;
        for(int i =0; i<arr.length; i++){
            largest = Math.max(largest,arr[i]);
        }

        int count[] = new int[largest+1];
        for(int i =0 ; i<arr.length; i++){
            count[arr[i]]++;
        }

        //sorting
        int j =0;
        for(int i = count.length - 1; i >= 0 ; i--){
            while(count[i] > 0){
                arr[j] = i;
                j++;
                count[i]--;
            
            }
        }
    }

     public static void printArray(int arr[]){
        for(int i = 0 ; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]){
        int arr[] = {3,6,2,1,8,7,4,5,3,1};
        //bubbleSortingDescending(arr);
        //selectionSortingDescending(arr);
        //insertionSortingDescending(arr);
        //countingSortingDescending(arr);
        printArray(arr);
    }
}