import java.util.*;
public class function1{
    public static void printhw(){
        System.out.println("Hello World!");
        System.out.println("Hello World!");
        System.out.println("Hello World!");
        return;
    }

    public static void calculateSum1(){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the first number : ");
        int a = input.nextInt();
        System.out.print("Enter the second number : ");
        int b = input.nextInt();
        int sum = a+b;
        System.out.print("Sum is : " + sum);
    }

    public static void calculateSum2(int a, int b){
        int sum = a+b;
        System.out.print("Sum is : " + sum);
    }

    public static int calculateSum3(int num1, int num2){
        int sum = num1 + num2;
        return sum;
        
    }

    public static void main(String args[]){
        //printhw();
        //calculateSum1();
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the first number : ");
        int a = input.nextInt();
        System.out.print("Enter the second number : ");
        int b = input.nextInt();
        //calculateSum2(a,b);
        int sum = calculateSum3(a,b);
        System.out.print("Sum is : " + sum);
    }
}