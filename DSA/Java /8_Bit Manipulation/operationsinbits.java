public class operationsinbits{
    public static int getIthbit(int n, int i){
        int bitmask = 1<<i;
        if((n & bitmask) == 0){
            return 0;
        }
        else{
            return 1;
        }
    }

    public static int setIthbit(int n, int i){
        int bitmask = 1<<i;
        return n | bitmask;
    }

    public static int clearIthbit(int n, int i){
        int bitmask = ~(1<<i);
        return n & bitmask;
    }

    public static int updateIthbit(int n, int i, int newBit){
        // if(newBit == 0){
        //     return clearIthbit(n,i);
        // }
        // else{
        //     return setIthbit(n,i);
        // }

        n = clearIthbit(n,i);
        int bitmask = newBit << i;
        return n | bitmask;
    }

    public static int clearIBits(int n, int i){
        int bitmask = (~0)<<i;
        return n & bitmask;
    }

    public static int clearBitsinRange(int n, int i, int j){
        int a = ((~0)<<(j+1));
        int b = (1<<i)-1;
        int bitmask = a | b;
        return n & bitmask;
    }

    public static void main(String args[]){
        //System.out.println(getIthbit(10,2));
        //System.out.println(setIthbit(10, 2));
        //System.out.println(clearIthbit(10, 1));
        //System.out.println(updateIthbit(10,2,1));
        //System.out.println(clearIBits(15,2));
        System.out.println(clearBitsinRange(10, 2, 4));
    }
}