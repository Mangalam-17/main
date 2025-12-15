import java.util.*;

public class character {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    String s = sc.next();

    // // precompute
    // int[] hash = new int[26];
    // for (int i = 0; i < s.length(); i++) {
    //   hash[s.charAt(i) - 'a']++;
    // }

    // int q = sc.nextInt();
    // while (q-- > 0) {
    //   char c = sc.next().charAt(0);
    //   // fetch
    //   System.out.println(hash[c - 'a']);
    // }

    // For all character up to 256
    int[] hash = new int[256];
    for (int i = 0; i < s.length(); i++) {
      hash[s.charAt(i)]++;
    }

    int q = sc.nextInt();
    while (q-- > 0) {
      char c = sc.next().charAt(0);
      // fetch
      System.out.println(hash[c]);
    }
  }
}
