import java.util.*;
public class selectionsort{
    public static void selectionSorting(int arr[]){
        for(int i = 0; i<arr.length-1 ; i++){
            int minPos = i;
            for(int j = i+1; j<arr.length ; j++){
                if(arr[minPos] > arr[j]){
                    minPos = j;
                }
            }
            // swap 
            int temp = arr[minPos];
            arr[minPos] = arr[i];
            arr[i] = temp;
        }
    }

    public static void printArray(int arr[]){
        for(int i = 0 ; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]){
        int arr[] = {5,4,1,3,2};
        System.out.print("Array before sorting -> ");
        printArray(arr); 

        selectionSorting(arr);
        System.out.print("Array after sorting -> ");
        printArray(arr);
    }
}   