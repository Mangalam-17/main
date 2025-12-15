import java.util.*;
public class invertedstarpatt{
    public static void main(String args[]){
        
        int n= 4;
        // outer loop
        for(int line = 1; line<=n; line ++){
            //print stars
            for(int star = 1; star<= (n - line + 1) ; star++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}