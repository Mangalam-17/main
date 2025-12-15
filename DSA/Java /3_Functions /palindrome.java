import java.util.*;
public class palindrome{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number : ");
        int palindrome = sc.nextInt();

        if(ispalindrome(palindrome)){
            System.out.println("Number " + palindrome + " is a palindrome");
        }
        else{
            System.out.println("Number " + palindrome + " is not a palindrome");
        }
    }
    public static boolean ispalindrome(int number){
        int palindrome = number;
        int reverse = 0;

        while(palindrome != 0){
        //int rem = palindrome % 10;
        reverse = (reverse * 10);
        reverse = reverse + (palindrome % 10);
        palindrome = palindrome / 10;
        }
    if(number == reverse){
        return true;
    }
    return false;
    }
}