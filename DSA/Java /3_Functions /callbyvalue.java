import java.util.*;
public class callbyvalue{
    public static void swap(int a, int b){
        // swapping both ->
        int temp = a;
        a = b;
        b = temp;        
    }
    public static void main(String args[]){
        
        int a = 5;
        int b = 10;

        // swapping both ->
        int temp = a;
        a = b;
        b = temp;
        swap(a,b);

        System.out.println("A is : " + a);
        System.out.println("B is : " + b);

    }
}