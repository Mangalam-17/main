public class multilevelinheritance{
    public static void main(String args[]){
        Dog dobby = new Dog();
        dobby.eat();
        dobby.legs = 4;
        System.out.println(dobby.legs);
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

// Derived class 1
class Mammal extends Animal{
    int legs;
}

// Derived class 2 
class Dog extends Mammal{
    String breed;
}