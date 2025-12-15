import java.util.*;

class Main {
    // int st = 1;
    //     int sp = n - 1;

    //     int number_of_line = 1;

    //     while(number_of_line<=n){
    //         // print spaces 
    //         for(int i=0; i<sp; i++){
    //             System.out.print("  ");
    //         }

    //         // print stars
    //         for(int i=0; i<st; i++){
    //             System.out.print("* ");
    //         }

    //         // prepare for next line
    //         System.out.println();
    //         st++;
    //         sp--;
    //         number_of_line++;



    /// hollow rectangle

    // int st = n;
    // int sp = n-2;

    // while(number_of_line <= n-1){
    //     if(number_of_line == 1 || number_of_line == n-1){

    //         // print n stars
    //         for(int i=0; i<st; i++){
    //             System.out.print("* ");
    //         }

    //     } else {

    //         // print one star
    //         System.out.print("* ");

    //         // print spaces
    //         for(int i=0; i<sp; i++){
    //             System.out.print("  ");
    //         }

    //         // print one star
    //         System.out.print("* ");
    //     }

    //     // next line
    //     System.out.println();
    //     number_of_line++;
    // }


    /// butterfly 

    // int number_of_line = 1;
    //     int st = 1;
    //     int sp = 2*n-2;

    //     while(number_of_line<= 2*n){
    //         // print stars
    //         for(int i=0; i<st; i++){
    //             System.out.print("* ");
    //         }

    //         // print spaces
    //         for(int i=0; i<sp; i++){
    //             System.out.print("  ");
    //         }

    //         // print stars
    //         for(int i=0; i<st; i++){
    //             System.out.print("* ");
    //         }

    //         // next line
    //         if(number_of_line<n){
    //             st++;
    //             sp = sp - 2;
    //         } else if(number_of_line>n){
    //             st--;
    //             sp = sp+2;
    //         }
            
    //         System.out.println();
    //         number_of_line++;
    //     }


    // diamond pattern 
        // int st = 1;
        // int sp = n-1;
        // int number_of_line = 1;
        // while(number_of_line <= 2*n-1){
        //     // print spaces
        //     for(int i=0; i<sp; i++){
        //         System.out.print("  ");
        //     }

        //     // print stars
        //     for(int i=0; i<st; i++){
        //         System.out.print("* ");
        //     }

        //     // next line
        //     if(number_of_line<n){
        //         st = st + 2;
        //         sp--;
        //     } else {
        //         st = st - 2;
        //         sp++;
        //     }
        //     number_of_line++;
        //     System.out.println();
        // }

        // hollow rhombus

        // int number_of_line = 1;
        // int osp = n - 1;
        // int isp = n - 2;
        // while(number_of_line<=n){
        //     // print outer spaces
        //     for(int i=0; i<osp; i++){
        //         System.out.print("  ");
        //     }

        //     if(number_of_line == 1 || number_of_line ==n){
                
        //         for(int i=0; i<n; i++){
        //             System.out.print("* ");
        //         }
                
        //     } else {
        //         // print stars 
        //         System.out.print("* ");

        //         // print inner spaces
        //         for(int i=0; i<isp; i++){
        //             System.out.print("  ");
        //         }

        //         // print star
        //         System.out.print("* ");
        //     }

        //     System.out.println();
        //     osp--;
        //     number_of_line++;
        // }


        // Number pyramid pattern
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int number_of_line = 1;
        int sp = n - 1;
        int st = 1;

        // pallindromic pattern with numbers 
        while(number_of_line<=n){
            // print spaces
            for(int i=0; i<sp; i++){
                System.out.print("  ");
            }

            // print stars -> replace with numbers 
            int current_num = number_of_line;
            for(int i=0; i<st; i++){
                System.out.print(current_num+" ");
                if(i < st/2){
                    current_num--;
                } else {
                    current_num++;
                }
            }

            // next line
            System.out.println();
            sp--;
            st=st+2;
            number_of_line++;
        }
    }
}