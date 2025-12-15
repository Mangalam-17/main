import java.util.*;
public class diamondpattern{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value for n : ");
        int n = sc.nextInt();
        int st = 1;
        int sp = n-1;
        int number_of_lines  =1;

        while(number_of_lines <= 2*n-1){
            //print spaces 
            for(int i=0 ;i<sp ; i++){
                System.out.print("  ");
            }

            //print stars
            for(int j = 0 ;j<st ; j++){
                System.out.print("* ");
            }

            //prepare for next line
            if(number_of_lines < n ){
                st+=2;
                sp--;
            }
            else{
                st-=2;
                sp++;
            }
            number_of_lines++;
            System.out.println();
        }        
    }
}