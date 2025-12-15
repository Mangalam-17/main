import java.util.*;
public class nintdegnumpyramid{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value of n : ");
        int n = sc.nextInt();

        for(int i=1 ; i<=n ; i++){
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