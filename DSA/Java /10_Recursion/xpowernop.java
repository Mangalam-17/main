// Time Complexity -> O(logn)

public class xpowernop{
    public static int powerOptimized(int x,int n){
        if(n == 0){
            return 1;
        }
        // int halfPowerSq = powerOptimized(x,n/2) * powerOptimized(x,n/2);
        // if(n % 2 != 0){
        //     halfPowerSq = x * halfPowerSq;
        // }
        // return halfPowerSq;

        int halfPower = powerOptimized(x,n/2);
        int halfPowerSq = halfPower * halfPower;
        if(n % 2 != 0){
            halfPowerSq = x * halfPowerSq;
        }
        return halfPowerSq;
    }

    public static void main(String args[]){
        System.out.println(powerOptimized(2,10));
    }
}