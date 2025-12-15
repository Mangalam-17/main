public class lastoccurence{
    public static int lastOcc(int arr[],int key,int i){
        if(i == arr.length){
            return -1;
        }
        int isFound = lastOcc(arr,key,i+1);
        if(isFound == -1 && arr[i] == key){
            return i;
        }
        return isFound;
    }
    
    public static void main(String args[]){
        int arr[] = {15,12,14,4,5,10,9,5,10};
        System.out.println(lastOcc(arr,12,0));
    }
}