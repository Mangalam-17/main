import java.util.*;
public class numberpyramid{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value for n : ");
        int n = sc.nextInt();
        
        int number_of_lines = 1;
        int sp = n-1;
        int st = 1;

        while(number_of_lines <= n){
            //print spaces
            for(int i=0 ; i<sp ; i++){
                System.out.print("  ");
            }
            //print stars
            for(int i=0 ; i<st ; i++){
                System.out.print(number_of_lines + "   ");
            }
            //next line
            System.out.println();
            st++;
            sp--;
            number_of_lines++;

        }
    }
}