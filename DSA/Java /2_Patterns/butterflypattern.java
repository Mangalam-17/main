import java.util.*;
public class butterflypattern{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value for n : ");
        int n = sc.nextInt();

        int number_of_lines = 1;
        int st = 1;
        int sp = 2*n-2;

        while(number_of_lines <= 2*n){
            //print stars
            for(int i=0; i<st ; i++){
                System.out.print("* ");
            }

            //print spaces 
            for(int j=0 ; j<sp ; j++){
                System.out.print("  ");
            }

            //print stars
            for(int i=0; i<st ; i++){
                System.out.print("* ");
            }

            //next line ->
            if(number_of_lines < n){
            st++;
            sp = sp-2;
            }
            else{
                st--;
                sp = sp+2;
            }
            System.out.println();
            number_of_lines++;
        }
    }
}