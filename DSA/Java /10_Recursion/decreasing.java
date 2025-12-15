public class decreasing{
    public static void printDesc(int n){
        if(n == 1){
            System.out.println(n);
            return;
        }
        System.out.print(n + " ");
        printDesc(n - 1);
    }
    public static void main(String args[]){
        int n = 10;
        printDesc(n);
    }
}