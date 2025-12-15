import java.util.*;
public class largestof3no{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        int a = 100;
        int b = 20;
        int c = 30; 

        if(a>=b && a>=c){
            System.out.println("a is largest of three");
        }
        else if(b>=c){
            System.out.println("b is largest of three");
        }
        else{
            System.out.println("c is largest of three");
        }
    }
}   