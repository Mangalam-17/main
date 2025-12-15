public class accessmodifiers{
    public static void main(String args[]){
        BankAccount myAc = new BankAccount();
        myAc.username = "MangalamMishra";
        myAc.setPass("abcdefgh");

        System.out.println(myAc.username);
        myAc.display();
    }
}

class BankAccount{
    public String username;
    private String password;

    public void setPass(String pwd){
        password = pwd;
    }

    public void display(){
        System.out.println(password);
    }
}