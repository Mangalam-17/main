import java.util.*;
public class numpyramid{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value of n : ");
        int n = sc.nextInt();
        
        // inverted star pattern used for left blank spaces 
        // ninety degree number pyramid used for middle pyramid formation
        // we can use right blank spaces depending on our choice 
        
        // outer loop for row 
        for(int i=1 ; i<=n ; i++){

            // for left blank spaces 
            for(int j = 0; j<n-i; j++){
                System.out.print(" ");
            }

            // for pyramid 
            for(int j = 0; j<2*i-1 ; j++){
                if(j%2==0){
                    System.out.print(i);
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}