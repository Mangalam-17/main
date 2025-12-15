public class avgof3nos {
    public static float avg(float a, float b, float c) {
        float avrg = (a + b + c) / 3;
        return avrg;
    }

    public static void main(String args[]) {
        float a = avg(3.5f, 6.4f, 7.9f);
        System.out.println("Average is " + a);
    }
}