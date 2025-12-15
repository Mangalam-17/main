import java.util.*;
public class billgeneration{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        float pencil = input.nextFloat();
        float pen = input.nextFloat();
        float eraser = input.nextFloat();

        float total = pencil + pen + eraser;
        System.out.println("Bill ->" + total);

        float gst = total + (0.18f * total);
        System.out.println("Including gst the bill is -> " + gst);
    }
}