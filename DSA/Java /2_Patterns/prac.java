import java.util.*;
public class prac{
    public static void main(String args[]){

        // inverted star pattern ->
        // Scanner sc = new Scanner(System.in);
        // System.out.print("Enter the value of n : ");
        // int n = sc.nextInt();

        // for(int i = 0; i<n ; i++){
        //     for(int j=0 ; j<n-i ; j++){
        //     System.out.print("* ");
        //     }
        //     System.out.println();
        // }


        // Hollow rectangle ->
        // int totRows = 3;
        // int totCols = 5; 

        // for(int i = 1 ; i<=totRows ; i++){
        //         if(i == 1 || i == totRows){ 
        //             for(int j = 1; j<=totCols; j++){
        //             System.out.print("*");
        //             }
        //         }
        //         else{
        //             for(int j =1; j<=totCols; j++){
        //                 if(j == 1 || j==totCols){
        //                     System.out.print("*");
        //                 }
        //                 else{
        //                     System.out.print(" ");
        //                 }
        //             }
        //         }
        //         System.out.println();
        // }


        // Inverted and rotated half pyramid ->

        int n = 4;
        for(int i = 1; i<=n ; i++){
            for(int j = 1 ; j<=n-i ; j++){
                //print spaces
                System.out.print(" ");
            }
            for(int j= 1; j<=i ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}