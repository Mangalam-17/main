import java.util.*;
public class mathclass{
    public static void main(String args[]){
        double x = 28.0;
        double y = 4.0;
        int z = -23;

        System.out.println("Minimum of these two is : " + Math.min(x,y));
        System.out.println("Maximum of these two is : " + Math.max(x,y));
        System.out.println("Sqrt of these two is : " + Math.sqrt(y));
        System.out.println("Pow of these two is : " + Math.pow(x,y));
        //System.out.println("Minimum of these two is : " + Math.avg(x,y));
        System.out.println("Absolute value of these two is : " + Math.abs(z));  
    }
}