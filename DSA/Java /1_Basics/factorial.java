import java.util.*;
public class factorial{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        int fact = 1 ;
        System.out.print("Enter the number : ");
        int n = input.nextInt();
        

        for(int i = 1;i<=n ;i++){
            fact = fact*i;
        }
        System.out.println("Factorial is : " + fact);
    }
}