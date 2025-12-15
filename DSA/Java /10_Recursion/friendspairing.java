public class friendspairing{
    public static int friendsPairing(int n){
        // base case
        if(n == 1 || n == 2){
            return n;
        }

        // choice
        // single
        // int fnm1 = friendsPairing(n-1);

        //pair
        // int fnm2 = friendsPairing(n-2);
        // int pairways = (n-1) * fnm2;

        //total ways 
        // int totWays = fnm1 + pairways;
        // return totWays;

        return friendsPairing(n-1) + (n-1) * friendsPairing(n-2);
    }

    public static void main(String args[]){
        System.out.println(friendsPairing(3));
    }
}