// // // import java.util.ArrayDeque;
// // // import java.util.Queue;
// // // import java.util.LinkedList;

// // // // import java.util.*;

// // // public class QUsingJCF {

// // //   public static void main(String args[]) {
// // //     Queue<Integer> q = new LinkedList<>();

// // //     Queue<Integer> q = new ArrayDeque<>();

// // //     // Queue is an interface, so it does not have any own objects
// // //     // but it can be implemented using two classes which are LinkedList and ArrayDeque

// // //     q.add(1);
// // //     q.add(2);
// // //     q.add(3);
// // //     q.add(4);
// // //     q.add(5);

// // //     while (!q.isEmpty()) {
// // //       System.out.println(q.peek());
// // //       q.remove();
// // //     }
// // //   }
// // // }

// // // --------------------------------------------------------------------------------------------------------------------------
// // import java.util.*;

// // public class QueueExample {
// //     public static void main(String[] args) {
// //         // Create a Queue using LinkedList
// //         Queue<Integer> queue = new LinkedList<>();

// //         // Add elements
// //         queue.add(10);
// //         queue.add(20);
// //         queue.add(30);

// //         // Display the queue
// //         System.out.println("Queue: " + queue);

// //         // Access front element
// //         System.out.println("Head of queue: " + queue.peek());

// //         // Remove element from front
// //         System.out.println("Removed element: " + queue.remove());

// //         // Display updated queue
// //         System.out.println("Queue after removal: " + queue);
// //     }
// // }

// // // --------------------------------------------------------------------------------------------------------------------------
// import java.util.*;

// public class PriorityQueueExample {
//     public static void main(String[] args) {
//         // Create a PriorityQueue
//         Queue<Integer> pq = new PriorityQueue<>();

//         pq.add(30);
//         pq.add(10);
//         pq.add(20);

//         System.out.println("PriorityQueue: " + pq);
//         System.out.println("Head element: " + pq.peek());

//         // Remove head element
//         System.out.println("Removed: " + pq.poll());
//         System.out.println("Queue after removal: " + pq);
//     }
// }

// // // --------------------------------------------------------------------------------------------------------------------------
import java.util.*;

public class ArrayDequeExample {

  public static void main(String[] args) {
    Queue<String> queue = new ArrayDeque<>();

    queue.add("A");
    queue.add("B");
    queue.add("C");

    System.out.println("Queue: " + queue);
    System.out.println("Peek: " + queue.peek());
    queue.remove();
    System.out.println("After removing: " + queue);
  }
}
