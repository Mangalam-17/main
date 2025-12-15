import java.util.*;
public class evenoddcheck{
    public static boolean isEven(int n){
        if(n % 2 == 0){
            return true;
        }
        else
            return false;
        
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int num;

        System.out.print("Enter the number : ");
        num = sc.nextInt();
        
        if(num == 0){
            System.out.println("The number is zero ");
        }
        else if(isEven(num)){
            System.out.println("Number is even");
        }
        else{
            System.out.println("Number is odd");
        }

        // to imply check on the program 

        if(isEven(18)){
            System.out.println("The function is working properly ");
        }
        else{
            System.out.println("There is some error in function");
        }

        if(isEven(17)){
            System.out.println("There is some error in function");
        }
        else{
            System.out.println("The function is working properly ");
        }
            
    }
}