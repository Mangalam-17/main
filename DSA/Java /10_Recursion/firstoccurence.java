public class firstoccurence{
    public static int firstOcc(int arr[],int key,int i){
        if(i == arr.length){
            return -1;
        }
        if(arr[i] == key){
            return i;
        }
        return firstOcc(arr,key,i+1);
    }
    public static void main(String args[]){
        int arr[] = {15,12,14,4,5,10,9,5,10};
        System.out.println(firstOcc(arr,10,0));
    }
}