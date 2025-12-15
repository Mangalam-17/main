public class abstractclass{
    public static void main(String args[]){
        // Horse h = new Horse();
        // h.eat();
        // h.walk();

        // Chicken c = new Chicken();
        // c.eat();
        // c.walk();

        Mustang myhorse = new Mustang();
        // Hierarchy : Animal -> Horse -> Mustang

        //System.out.println(h.color); // constructor of super class invoked automatically
        //System.out.println(c.color); // constructor of super class invoked automatically
    }
}

abstract class Animal{
    Animal(){
        System.out.println("Animal constructor called...");
    }
    String color;

    // Constructors in abstract class is a unique concept
    //constructor -> first the constructor of parent class gets invoked
                   // after then the constructor of child class gets invoked
    // Animal(){
    //     color = "Brown";  // this initializes the child class color as brown
    // }
    void eat(){
        System.out.println("Animal eats");
    }

    abstract void walk();
}

class Horse extends Animal{
    Horse(){
        System.out.println("Horse constructor called...");
    }
    void changecolor(){
        color = "dark brown";
    }
    void walk(){
        System.out.println("Walks with 4 legs");
    }
}

class Mustang extends Horse{
    Mustang(){
        System.out.println("Mustang constructor called...");
    }
}

class Chicken extends Animal{
    Chicken(){
        System.out.println("Chicken constructor called...");
    }
    void changecolor(){
        color = "yellow";
    }
    void walk(){
        System.out.println("Walks with 2 legs");
    }
}