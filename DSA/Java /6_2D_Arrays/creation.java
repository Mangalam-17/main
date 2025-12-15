import java.util.*;
public class creation{
    public static int largestFind(int matrix[][]){
        int largest = Integer.MIN_VALUE;
        for(int i= 0 ; i<matrix.length; i++){
            for(int j =0; j<matrix[0].length; j++){
                if(largest < matrix[i][j]){
                    largest = matrix[i][j];
                }
            }
        }
        return largest;
    }
    public static int smallestFind(int matrix[][]){
        int smallest = Integer.MAX_VALUE;
        for(int i= 0 ; i<matrix.length; i++){
            for(int j =0; j<matrix[0].length; j++){
                if(smallest > matrix[i][j]){
                    smallest =  matrix[i][j];
                }
            }
        }
        return smallest;
    }

    public static boolean search(int matrix[][],int key){
        for(int i =0; i<matrix.length ; i++){
            for(int j = 0; j<matrix[0].length ; j++){
                if(matrix[i][j] == key){
                    System.out.println("key found at -> " + "(" + i + "," + j + ")");
                    return true;
                }
            }
        }
        System.out.println("Key not found");
        return false;
    }
    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
        int matrix[][] = new int[3][3];
        int  n = matrix.length;;
        int m = matrix[0].length;

        for(int i =0; i<n ; i++){
            for(int j = 0; j<m ; j++){
                matrix[i][j] = sc.nextInt();
            }
        }

        for(int i =0; i<n ; i++){
            for(int j = 0; j<m ; j++){
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        search(matrix,60);
        System.out.println("Largest element is -> " + largestFind(matrix));
        System.out.println("smallest element is -> " + smallestFind(matrix));
    }
}