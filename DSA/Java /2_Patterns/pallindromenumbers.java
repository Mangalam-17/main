import java.util.*;
public class pallindromenumbers{
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
                System.out.print("   ");
            }
            //print stars ->replace with numbers
            int current_num = number_of_lines;
            for(int i=0 ; i<st ; i++){
                System.out.print(current_num + "  ");
                if(i < st/2){
                    current_num--;
                }
                else{
                    current_num++;
                }
            }
            //next line
            System.out.println();
            st+=2;
            sp--;
            number_of_lines++;
        }
    }
}