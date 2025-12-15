// variant 1 ->

import java.util.*;

public class QUsing2Stacks {

  static class Queue {

    // s1 (Main Stack): This stack always holds elements in FIFO (Queue) order.
    static Stack<Integer> s1 = new Stack<>();
    // s2 (Temp Stack): Used temporarily to reverse order during add.
    static Stack<Integer> s2 = new Stack<>();

    public static boolean isEmpty() {
      // Only s1 needs to be checked, as s2 should always be empty after an add.
      return s1.isEmpty(); 
    }

    // add - Time Complexity: O(n)
    public static void add(int data) {
      // 1. Move all existing elements from s1 to s2. (O(n))
      //    The elements are now reversed in s2.
      while (!s1.isEmpty()) {
        s2.push(s1.pop());
      }

      // 2. Push the new element onto s1. (O(1))
      //    This element goes to the bottom of the stack relative to the old elements.
      s1.push(data);

      // 3. Move all elements back from s2 to s1. (O(n))
      //    The old elements are now pushed on top of the new one, 
      //    making the OLDEST element land at the very top of s1.
      while (!s2.isEmpty()) {
        s1.push(s2.pop());
      }
    }

    // remove - Time Complexity: O(1)
    public static int remove() {
      if (isEmpty()) {
        System.out.println("Queue is Empty");
        return -1;
      }

      // The oldest element is guaranteed to be at the top of s1.
      return s1.pop();
    }

    // peek - Time Complexity: O(1)
    public static int peek() {
      if (isEmpty()) {
        System.out.println("Queue is Empty");
        return -1;
      }

      // The oldest element is guaranteed to be at the top of s1.
      return s1.peek();
    }
  }

  public static void main(String args[]) {
    Queue q = new Queue();

    q.add(1); // s1: [1]
    q.add(2); // s1: [2, 1] (2 is at bottom, 1 is at top)
    q.add(3); // s1: [3, 2, 1] (3 is at bottom, 1 is at top)
    
    // The main loop:
    while (!q.isEmpty()) {
      // Peek and remove are O(1)
      System.out.println("Front: " + q.peek()); // Output: 1, 2, 3
      q.remove();
    }
  }
}

// variant 2 -> pop in O(n)
import java.util.*;

public class QUsing2Stacks {

    static class Queue {

        // s1 is the Input Stack (for adding new elements)
        static Stack<Integer> s1 = new Stack<>();
        // s2 is the Output Stack (for removing old elements)
        static Stack<Integer> s2 = new Stack<>();

        public static boolean isEmpty() {
            return s1.isEmpty() && s2.isEmpty();
        }

        // add - O(1)
        public static void add(int data) {
            // New elements are just pushed onto the Input Stack. Simple O(1).
            s1.push(data);
        } 

        // Helper function to transfer elements (The O(n) part)
        private static void moveS1toS2() {
            // Only transfer elements if the Output Stack is empty
            if (s2.isEmpty()) {
                // Move everything from s1 to s2. This reverses the order.
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }
        }

        // remove - O(1) Amortized
        public static int remove() {
            if (isEmpty()) {
                System.out.println("Queue is Empty");
                return -1;
            }

            // Move elements if needed. This is where the O(n) worst-case cost occurs.
            moveS1toS2();
            
            // Pop the element from the Output Stack. This is O(1).
            return s2.pop(); 
        }

        // peek - O(1) Amortized
        public static int peek() {
            if (isEmpty()) {
                System.out.println("Queue is Empty");
                return -1;
            }

            // Move elements if needed.
            moveS1toS2();
            
            // Peek the element from the Output Stack. This is O(1).
            return s2.peek();
        }
    }

    public static void main(String args[]) {
        Queue q = new Queue();

        q.add(1); // s1: [1]
        q.add(2); // s1: [1, 2]
        q.add(3); // s1: [1, 2, 3]

        // Dequeue 1: s2 is empty, transfer happens (s2: [3, 2, 1]). Pop 1.
        System.out.println(q.remove()); // Output: 1

        // Dequeue 2: s2 is not empty. Pop 2.
        System.out.println(q.peek());   // Output: 2
        System.out.println(q.remove()); // Output: 2
        
        q.add(4); // s1: [4]
        q.add(5); // s1: [4, 5]

        // Dequeue 3: s2 is not empty. Pop 3.
        System.out.println(q.remove()); // Output: 3

        // Dequeue 4: s2 is empty. Transfer happens (s2: [5, 4]). Pop 4.
        System.out.println(q.remove()); // Output: 4

        // Dequeue 5: s2 is not empty. Pop 5.
        System.out.println(q.remove()); // Output: 5

        q.remove(); // Output: Queue is Empty -1
    }
}