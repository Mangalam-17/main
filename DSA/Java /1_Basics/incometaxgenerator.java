import java.util.*;
public class incometaxgenerator{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter the income -> ");
        int income = input.nextInt();
        int tax;

        if(income < 500000){
            System.out.println("You dont have to pay any tax");
        }
        else if(income > 500000 && income < 1000000){
            tax = (int) (income * 0.2);
            System.out.println("You have to pay " + tax);
        }
        else{
            tax = (int) (income * 0.3);
            System.out.println("You have to pay " + tax);
        }
    }
}