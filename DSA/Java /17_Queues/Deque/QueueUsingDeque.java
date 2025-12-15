import java.util.*;

public class QueueUsingDeque {

  static class Queue {

    Deque<Integer> deque = new LinkedList<>();

    public void add(int data) {
      deque.addLast(data);
    }

    public int remove() {
      return deque.removeFirst();
    }

    public int peek() {
      return deque.getFirst();
    }
  }

  public static void main(String args[]) {
    // This queue is not the JCF queue
    // this queue is implemented using queue class, which is implemented using deque form 
    Queue q = new Queue(); // constructor call
    q.add(1);
    q.add(2);
    q.add(3);
    System.out.println("Peek() : " + q.peek());

    System.out.println(q.remove());
    System.out.println(q.remove());
    System.out.println(q.remove());
  }
}
