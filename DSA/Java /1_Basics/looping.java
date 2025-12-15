import java.util.*;
public class looping{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        // System.out.print("Enter n : ");
        // int n = input.nextInt();

        int rev = 0;
        int n = 10899;

        while(n>0){
            int lastdigit = n%10;
            rev = (rev * 10) + lastdigit;
            n = n/10;
        }
        System.out.println(rev);
    }
}