import java.util.Scanner;
public class evenoddsum{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        
        int number ;
        int choice;
        int oddsum = 0;
        int evensum = 0;

        do{
            System.out.print("Enter the number : ");
            number = input.nextInt(); 

            if(number % 2 == 0){
                evensum += number;
            }
            else{
                oddsum += number;
            }
            System.out.print("Do you want to continue : Press 1 for yes and 0 for no : ");
            choice = input.nextInt();
        } while(choice == 1);
        System.out.println("Sum of even is " + evensum);
        System.out.println("Sum of odd is " + oddsum);
        }
    }