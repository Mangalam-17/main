public class methodoverriding{
    public static void main(String args[]){
        Deer d = new Deer();
        d.eat();
        // Animal a = new Animal();
        // a.eat();
    }
}

// Base class
class Animal{
    String color;

    void eat(){
        System.out.println("Eats anything");
    }
}

// Derived class 
class Deer extends Animal{
    void eat(){
        System.out.println("Eats grass");
    }
}