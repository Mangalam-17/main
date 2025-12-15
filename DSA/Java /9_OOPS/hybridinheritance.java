public class hybridinheritance{
    public static void main(String args[]){
    }
}

// Base class
class Animal{
    String color;

    void eat(){
        System.out.println("Eats");
    }

    void breathe(){
        System.out.println("Breathes");
    }
}

// Derived class 
class Mammal extends Animal{
    int legs;
}

class Dog extends Mammal{
    String breed;
}