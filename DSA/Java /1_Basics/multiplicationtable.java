import java.util.*;
public class multiplicationtable{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        int table = 1;
        System.out.print("Enter the number : ");
        int n = input.nextInt();

        for(int i = 1; i<=10 ; i++){
            table = i *n;
            System.out.println("Table is : "+ table);
        }
        
    }
}