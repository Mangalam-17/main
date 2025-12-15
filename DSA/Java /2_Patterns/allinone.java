public class allinone{
    public static void hollow_rectangle(int totRows,int totCols){
            
            //outer loop for rows  ->
            for(int i = 1; i<=totRows ; i++){
                //inner loop for columns -> 
                for(int j =1; j<=totCols;j++){
                    if(i==1 || i==totRows || j==1 || j==totCols){
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
    }

    public static void inverted_rotated_halfpyramid(int n){
        for(int i=1; i<=n; i++){
            //print spaces 
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //print stars
            for(int j=1; j<=i ; j++){
            System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void inverted_halfpyramid_numbers(int n){
        for(int i = 1; i<=n ; i++){
            for(int j=1; j<=n-i+1 ; j++){
                System.out.print(j);
            }
            System.out.println();
        }
        
    }
    
    public static void floyd_triangle(int n){
        int num = 1;
        for(int i =1; i<=n ; i++){
            //print num
            for(int j =1 ; j<=i ;j++){
                System.out.print(num+" ");
                num++;
            }
            System.out.println();
        }
    }

    public static void zero_one_triangle(int n){
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                if((i+j) % 2== 0){
                    System.out.print("1");
                }
                else{
                    System.out.print("0");
                }
            }
            System.out.println();
        }
    }

    public static void butterfly(int n){
        //Ist half ->
        for(int i = 1; i<=n ; i++){
            //print stars -> i 
            for(int j = 1 ; j<=i ; j++){
                System.out.print("*");
            }

            //print spaces -> 2*(n-i)
            for(int j = 1 ; j<=2*(n-i); j++){
                System.out.print(" ");
            }       
            
            //print stars -> i
            for(int j = 1 ; j<=i ; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        //IInd half ->
            for(int i = n; i>=1 ; i--){
            //print stars -> i
            for(int j=1; j<=i ; j++){
                System.out.print("*");
            }
            
            //print spaces -> 2*(n-i)
            for(int j = 1; j<= 2*(n-i); j++){
                System.out.print(" ");
            }

            //prints stars -> i
            for(int j = 1 ; j<=i ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void solid_rhombus(int n){
        for(int i = 1; i<=n ; i++){

            //print spaces 
            for(int j =1 ; j<=n-i ; j++){
                System.out.print(" ");
            }

            //print stars
            for(int j= 1; j<=n ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void hollow_rhombus(int n){
        for(int i= 1 ; i<=n ; i++){
            //print spaces -> n-i
            for(int j =1; j<=(n-i) ; j++){
                System.out.print(" ");
            }

            //print stars -> same as hollow rectangle 
            for(int j=1 ; j<=n ; j++){
                if(i==1 || i==n || j==1 || j==n){
                System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void diamond(int n){
        //Ist half ->
        for(int i = 1; i<=n ; i++){  

            //print spaces 
            for(int j = 1; j<=(n-i); j++){
                System.out.print(" ");
            }

            //print stars
            for(int j = 1; j<=((2*i)-1); j++){
                System.out.print("*");
            }
            System.out.println();
        }
        

        //IInd half ->
        for(int i = n; i>=1 ; i--){

            //print spaces 
            for(int j =1; j<=(n-i); j++){
                System.out.print(" ");
            }

            //print stars
            for(int j=1; j<=((2*i)-1); j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }


    
    public static void main(String args[]){
        //hollow_rectangle(4,5);
        //inverted_rotated_halfpyramid(4);
        //inverted_halfpyramid_numbers(5);
        //floyd_triangle(5);
        //zero_one_triangle(5);
        //butterfly(6);
        //solid_rhombus(5);
        //hollow_rhombus(5);
        diamond(4);
    }
}