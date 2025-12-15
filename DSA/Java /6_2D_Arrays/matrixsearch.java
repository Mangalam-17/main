// Search in a sorted matrix ->
import java.util.*;
public class matrixsearch{
    public static boolean spiralSearch(int matrix[][], int key){
        
        // (n-1,0) approach ->
        // int row = matrix.length - 1, col = 0;

        // while(row >= 0 && col <= matrix[0].length - 1){
        //     if(key == matrix[row][col]){
        //         System.out.print("Key found at -> (" + row + "," + col + ")");
        //         return true;
        //     }
        //     else if(key > matrix[row][col]){
        //         col++;
        //     }
        //     else{
        //         row--;
        //     }
        // }
        // System.out.println("Key not found");
        // return false;

        // (0,m-1) approach -> 
        //int row = 0, col = matrix[0].length - 1;
        // while(row < matrix.length && col >= 0){
        //     if(matrix[row][col] == key){
        //         System.out.print("Key found at -> (" + row + "," + col + ")");
        //         return true;
        //     }
        //     else if(key < matrix[row][col]){
        //         col--;
        //     }
        //     else{
        //         row++;
        //     }
        // }
        // System.out.println("Key not found");
        // return false;
    }
    public static void main(String args[]){
        int matrix[][] = {{10,20,30,40},
                           {15,25,35,45},
                            {27,29,38,47},
                             {32,33,39,50}};

        int key = 10;
        spiralSearch(matrix,key);
    }
}