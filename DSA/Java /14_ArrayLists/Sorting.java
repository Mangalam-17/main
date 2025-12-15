import java.util.ArrayList;
import java.util.Collections;

public class Sorting {

  public static void main(String args[]) {
    ArrayList<Integer> list = new ArrayList<>();
    list.add(2);
    list.add(5);
    list.add(9);
    list.add(3);
    list.add(6);

    // Collections -> class
    // Collection -> interface

    System.out.println(list);
    Collections.sort(list);
    // by default, it sorts in ascending order
    System.out.println(list);

    // what if we want to sort in descending order
    Collections.sort(list, Collections.reverseOrder());
    System.out.println(list);
    // Collections.reverseOrder() - this is a comparator
    // Comparators are fxns in java which defines the logic of how sorting should be done
    // these comparators are not only applicable on lists, it can be applied on the objects as well
    // we can further modify comparators on the basis of the requirement
  }
}
