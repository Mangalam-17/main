public class sumofnatno{
    public static int calcSum(int n){
        if(n == 1){
            return 1;
        }
        int smn1 = calcSum(n - 1);
        int sn = n + smn1;
        return sn;
    }

    public static void main(String args[]){
        int n = 5;
        System.out.println(calcSum(n));
    }
}