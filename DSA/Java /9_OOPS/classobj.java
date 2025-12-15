public class classobj{
    public static void main(String args[]){

        Pen p1 = new Pen(); // created a pen object p1 -> created in heap
        p1.color = "Blue";
        p1.tip = 5;

        System.out.println(p1.color);
        System.out.println(p1.tip);

        p1.setColor("Yellow");
        p1.setTip(7);
        System.out.println(p1.color);
        System.out.println(p1.tip);
        
    }
}

class Pen{
    String color;
    int tip;

    void setColor(String newColor){
        color = newColor ;
    }

    void setTip(int newTip){
        tip = newTip;
    }
}