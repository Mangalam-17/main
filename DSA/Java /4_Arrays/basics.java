import java.util.*;
public class basics{
    public static void main(String args[]){
        
        // Array Declaration ->
        int marks[] = new int[50];
        
        // Array Input ->
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the physics marks : ");
        marks[0] = sc.nextInt();
        System.out.print("Enter the chemistry marks : ");
        marks[1] = sc.nextInt();
        System.out.print("Enter the maths marks : ");
        marks[2] = sc.nextInt();
        
        // Array Ouput ->
        System.out.println("Physics : " + marks[0]);
        System.out.println("Chemistry : " + marks[1]);
        System.out.println("Maths : " + marks[2]);

        // Array Updation ->
        marks[2] = marks[2] - 3;
        System.out.println("Updated Marks -> ");
        System.out.println("Physics : " + marks[0]);
        System.out.println("Chemistry : " + marks[1]);
        System.out.println("Maths : " + marks[2]);

        int percentage = (marks[0] + marks[1] + marks[2]) /3;
        System.out.println("Percentage : " + percentage + "%");


        // Calculating the length of an array -> arrayname.length
        System.out.println("The size of array is : " + marks.length);
    }
}