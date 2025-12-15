import java.util.*;
public class breakst{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

    
        do{
            System.out.print("Enter the number : ");
            int n = input.nextInt();

            if(n % 10 == 0){
                break;
            }
            System.out.println("number was : "+ n);
        }while(true);
    }
}