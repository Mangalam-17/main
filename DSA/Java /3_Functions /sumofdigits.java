import java.util.*;
public class sumofdigits{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        System.out.println("Sum of digits of " + n + " is " + sumofdig(n));
    }
    public static int sumofdig(int num){
        int sumofdigits = 0;
        while(num > 0){
            int lastdigit = num % 10;
            sumofdigits = sumofdigits + lastdigit;
            num = num/10;
       }
       return sumofdigits;
    }
}