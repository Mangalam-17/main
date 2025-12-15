import java.util.*;
public class basics{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        String str = "abcd";
        System.out.println(str);

        String name;
        //name = sc.next();
        // name = sc.nextLine();
        // System.out.println(name);
        // System.out.println("String length -> " + name.length());

        // Concatenation in Strings ->
        String firstName = sc.next();
        String lastName = sc.next();
        String fullName = firstName + " " + lastName;

        System.out.println(fullName);

        // Using charAt() method -> printing each character
        for(int i = 0; i<fullName.length(); i++){
            System.out.print(fullName.charAt(i) + " ");
        }
        System.out.println();
    }
}