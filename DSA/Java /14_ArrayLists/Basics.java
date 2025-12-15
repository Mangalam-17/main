import java.util.*;

public class Basics {

  public static void main(String args[]) {
    ArrayList<Integer> list = new ArrayList<>();

    // Operations - add, get, set, remove, contains

    //---------------------------------- add with O(1) -------------------------------------
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // System.out.println(list);

    //---------------------------------- add with O(n) -------------------------------------

    // add - O(n), adds element at a particular index
    // remaining elements gets shifted by 1 place in the right
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // list.add(0, 10);
    // list.add(1, 10);
    // list.add(2, 10);
    // System.out.println(list);

    //---------------------------------- get with O(1) -------------------------------------
    // list.add(1);
    // list.add(1);
    // list.add(2);
    // int element = list.get(1);
    // System.out.println(element);

    //---------------------------------- set with O(n) -------------------------------------
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // System.out.println(list);
    // list.set(0, 2);
    // list.set(1, 3);
    // list.set(2, 4);
    // list.set(3, 5);
    // System.out.println(list);

    //---------------------------------- remvove with O(n) -------------------------------------
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // System.out.println(list);
    // list.remove(0);
    // list.remove(1);
    // System.out.println(list);

    //---------------------------------- contains with O(n) -------------------------------------
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // System.out.println(list);
    // System.out.println(list.contains(1));
    // System.out.println(list.contains(3));
    // System.out.println(list.contains(5));
    // System.out.println(list.contains(7));

    //---------------------------------- Size of an arrayList -------------------------------------
    // list.add(1);
    // list.add(2);
    // list.add(3);
    // list.add(4);
    // System.out.println(list);
    // System.out.println(list.size());
  }
}
