import java.util.*;
public class reverse{
    public static void printReverse(int numbers[]){
        int first = 0, last = numbers.length - 1;

        while(first < last){
            // swap ->
            int temp = numbers[last];
            numbers[last] = numbers[first];
            numbers[first] = temp;

            first++;
            last--;
        }
    }
    public static void main(String args[]){
        int numbers[] = {2,4,6,8};

        // array before reversing -> 
        for(int i = 0; i<numbers.length ; i++){
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        printReverse(numbers);

        // array after reversing ->
        for(int i = 0; i<numbers.length ; i++){
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
    }
}