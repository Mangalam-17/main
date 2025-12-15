public class remdupinstr{
    public static void removeDuplicates(String str,int idx,StringBuilder newstr,boolean map[]){
        // basecase 
        if(idx == str.length()){
            System.out.println(newstr);
            return;
        }
        // work 
        char currchar = str.charAt(idx);
        if(map[currchar - 'a'] == true){
            // duplicate
            removeDuplicates(str,idx+1,newstr,map);
        }
        else{
            map[currchar - 'a'] = true;
            removeDuplicates(str,idx+1,newstr.append(currchar),map);
        }
    }

    public static void main(String args[]){
        String str = "mangalam";
        removeDuplicates(str,0,new StringBuilder(""),new boolean[26]);
    }
}