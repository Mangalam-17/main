public class copyconstructor{
    public static void main(String args[]){
        Student s1 = new Student();
        s1.name = "Mangalam";
        s1.roll = 461;
        s1.password = "abc";
        s1.marks[0] = 100;
        s1.marks[1] = 90;
        s1.marks[2] = 80;

        Student s2 = new Student(s1);
        s2.password = "xyz";
        s1.marks[2] = 100; 
        // After changing this value of s1, ideally the value of the s2 should
        // not be changing but here it changes because the array is passed via 
        // reference which means there is only one array and both the objects 
        // s1 & s2 points to the same array which was made during s1 marks 
        // if s2 points to another array it means it is deep copy 
        // But here it happens shallow copy 

        for(int i =0 ; i < 3 ; i++){
            System.out.println(s2.marks[i]);
        }
    }
}

class Student{
    String name;
    int roll;
    String password;
    int marks[];

    //copy constructors ->
    Student(Student s1){
        marks = new int[3];
        this.name = s1.name;
        this.roll = s1.roll;
        this.marks = s1.marks;
    }

    Student(){
        marks = new int[3];
        System.out.println("Constructor is called...");
    }

    Student(String name){
        marks = new int[3];
        this.name = name;
    }

    Student(int roll){
        marks = new int[3];
        this.roll = roll;
    }
}