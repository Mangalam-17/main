import java.util.*;
public class inbuiltsort{
    public static void printArray(Integer arr[]){
        for(int i = 0 ; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // How a comparator is written in java
    // public static int compare(int a,int b){
    //     // a < b -ve
    //     // a == b 0
    //     // a > b +ve
    //     return a - b; //ascending
    //     return b - a; // descending
    // }

    public static void main(String args[]){
        Integer arr[] = {5,4,1,3,2};
        //For descending order we have to int as Integer value everywhere
        
        // Sorting in Ascending order ->

        //Arrays.sort(arrayname);
        // Arrays.sort(arr);
        // printArray(arr);

        //Arrays.sort(arrayname,si,ei);
        // here ending index is non inclusive -> (the index up to which we have to sort) + 1
        // indexes are non exclusive
        // Arrays.sort(arr,0,3);
        // printArray(arr);

        //Sorting in Descending order ->

        //Arrays.sort(arrayname,Collections.reverseOrder());
        // Arrays.sort(arr,Collections.reverseOrder());
        // printArray(arr);

        //Arrays.sort(arrayname,si,ei,Collections.reverseOrder());  // indexes are non exclusive
        Arrays.sort(arr,2,5,Collections.reverseOrder());
        printArray(arr);

    }
}   