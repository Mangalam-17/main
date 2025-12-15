public class oddoreven{
    public static void isOddorEven(int n){
        int bitmask = 1;
        if((n & bitmask) == 0){
            System.out.println("Even Number");
        }
        else{
            System.out.println("Odd Number");
        }
    }
    public static void main(String args[]){
        isOddorEven(5);
        isOddorEven(15);
        isOddorEven(50);
        isOddorEven(150);
    }
}