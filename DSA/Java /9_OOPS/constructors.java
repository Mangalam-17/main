public class constructors{
    public static void main(String args[]){
        Student s1 = new Student();
        Student s2 = new Student("Mangalam");
        Student s3 = new Student(123);
        //Student s4 = new Student("Mangalam",123); -> error b/c this type of constructors is not made
    }
}

class Student{
    String name;
    int roll;

    Student(){
        System.out.println("Constructor is called...");
    }

    Student(String name){
        this.name = name;
    }

    Student(int roll){
        this.roll = roll;
    }
}