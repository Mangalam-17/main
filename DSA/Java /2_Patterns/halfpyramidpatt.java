import java.util.*;
public class halfpyramidpatt{
    public static void main(String args[]){

        int n= 4;

        for(int line = 1; line<=n ; line++){
            for(int i = 1; i<=line;i++){
                System.out.print(i);
            }
            System.out.println();
        }
    }
}