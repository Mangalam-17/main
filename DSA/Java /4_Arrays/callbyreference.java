import java.util.*;
class callbyreference{
    public static void update(int marks[], int nonChangeable){
        nonChangeable = 10;
        for(int i=0; i<marks.length ; i++){
            marks[i] = marks[i] - 5;
        }
        //System.out.println(nonChangeable);
    }
    public static void main(String args[]){
        int nonChangeable = 5;

        int marks[] = {98,97,96};

        update(marks,nonChangeable);

        System.out.println(nonChangeable);

        //print our marks ->
        for(int i=0; i<marks.length; i++){
            System.out.print(marks[i] + " ");
        }
        System.out.println();
    }
}