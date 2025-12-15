import java.util.*;
public class binomialcoeff{
    public static int factorial(int n){
        int f = 1;
        for(int i = 1; i<=n ; i++){
            f = f* i;
        }
        return f;
    }

    public static int bincoe(int n, int r){
        int nf = factorial(n);
        int rf = factorial(r);
        int nmrf = factorial(n - r);

        int bc = nf/(rf * nmrf);
        return bc;
    }

    public static void main(String args[]){
        int bico = bincoe(5,2);
        System.out.println("Binomial Coefficient is : " + bico);
   }
}