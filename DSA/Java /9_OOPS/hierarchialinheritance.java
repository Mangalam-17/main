public class hierarchialinheritance{
    public static void main(String args[]){
        Bird robin = new Bird();
        robin.eat();

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
    void walk(){
        System.out.println("Walks");
    }
}

class Fish extends Animal{
    void swim(){
        System.out.println("Swims");
    }
}

class Bird extends Animal{
    void fly(){
        System.out.println("Flies");
    }
}