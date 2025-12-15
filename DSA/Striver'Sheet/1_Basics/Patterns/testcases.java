import java.util.*;
public class testcases{
    public static void pattern1(int n){
        for(int i = 0; i<n; i++){
            for(int j = 0; j<n; j++){
                System.out.print("* ");
            }
            System.out.println("\n");
        }
    }
    public static void main(String args[]){
        int t;

        Scanner sc = new Scanner(System.in);
        t = sc.nextInt();

        for(int i = 0; i<t; i++){
            int n;
            n = sc.nextInt();
            pattern1(n);
        }
        sc.close();
    }
}