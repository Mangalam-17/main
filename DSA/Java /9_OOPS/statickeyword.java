public class statickeyword{
    public static void main(String args[]){

        // static property -> when we are changing the value of the static var
                        //    it gets changed for every object 


        Student s1 = new Student();
        s1.schoolname = "ABC";
        System.out.println("School name ->" + s1.schoolname);

        Student s2 = new Student();
        //s2.schoolname = "DEF";
        System.out.println("School name ->" + s2.schoolname);

        Student s3 = new Student();
        //s3.schoolname = "GHI";
        System.out.println("School name ->" + s3.schoolname);
    }
}

class Student{
    String name;
    int rollno;

    static String schoolname;

    // This static func is created only once and used for all the objects
    // which helps to save memory otherwise when static keyword isnt used 
    // here then for diff objs diff memory spaces will be taken for the same func
    
    static int calcPercentage(int math, int phy, int chem){
        return (math + phy + chem) / 3;
    }

    void setname(String name){
        this.name = name;
    }

    String getname(){
        return this.name;
    }
}