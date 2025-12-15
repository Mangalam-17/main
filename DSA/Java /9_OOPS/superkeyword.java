public class superkeyword{
    public static void main(String args[]){
        Horse h = new Horse();
        System.out.println(h.color);
    }
}

class Animal{
    String color;
    Animal(){
        System.out.println("Animal constructor called...");
    }
}

class Horse extends Animal{
    Horse(){
        //super();              // we can access the properties of a parent
        super.color = "brown";  // class using super keyword
        System.out.println("Horse constructor called...");
    }
}