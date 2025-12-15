import java.util.*;

public class DequeBasics {

  public static void main(String args[]) {
    // Deque is an interface in java
    Deque<Integer> deque = new LinkedList<>();
    deque.addFirst(1); // 1
    deque.addFirst(2); // 2, 1
    System.out.println(deque);
    System.out.println("First Element : " + deque.getFirst());
    System.out.println("Last Element : " + deque.getLast());

    deque.addLast(3); // 2, 1, 3
    deque.addLast(4); // 2, 1, 3, 4
    System.out.println(deque);
    System.out.println("First Element : " + deque.getFirst());
    System.out.println("Last Element : " + deque.getLast());

    deque.removeFirst();
    System.out.println(deque);
    System.out.println("First Element : " + deque.getFirst());
    System.out.println("Last Element : " + deque.getLast());

    deque.removeLast();
    System.out.println(deque);
    System.out.println("First Element : " + deque.getFirst());
    System.out.println("Last Element : " + deque.getLast());
  }
}
