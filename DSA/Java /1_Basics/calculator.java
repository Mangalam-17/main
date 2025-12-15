import java.util.*;
public class calculator{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the first number : ");
        int a = input.nextInt();
        System.out.print("Enter the second number : ");
        int b = input.nextInt();
        System.out.print("Enter the operator : ");
        char operator = input.next().charAt(0);

        switch(operator){
            case '+' : System.out.println(a+b);
            break;
            case '-' : System.out.println(a-b);
            break;
            case '*' : System.out.println(a*b);
            break;
            case '/' : System.out.println(a/b);
            break;
            case '%' : System.out.println(a%b);
            break;
            default : System.out.print("Wrong operator !");
        }
    }
}