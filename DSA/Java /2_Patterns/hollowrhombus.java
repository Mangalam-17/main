import java.util.*;
public class hollowrhombus{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value for n : ");
        int n = sc.nextInt();

        int number_of_lines = 1;
        int osp = n-1;
        int isp = n-2;

        while(number_of_lines <= n){   
            //print osp
                for(int i=0; i<osp; i++){
                    System.out.print("  ");
                }

            if(number_of_lines == 1 || number_of_lines == n){
                //print stars
                for(int i = 0 ; i<n ;i++){
                    System.out.print("* ");
                }
            }
            else{
                //print star
                System.out.print("* ");
                //print isp
                for(int i=0; i<isp; i++){
                System.out.print("  ");
                }
                //print star
                System.out.print("* ");
            }
            System.out.println();
            osp--;
            number_of_lines++;
        }
        }
    }