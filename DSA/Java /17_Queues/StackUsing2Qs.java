// // // 1st variant in which pop takes O(n)
// // import java.util.*;
// // import java.util.LinkedList;
// // import java.util.Queue;
// // public class StackUsing2Qs {
// //   static class Stack {
// //     // q1 is the active queue where all elements are stored.
// //     // q2 is the auxiliary queue used for transfers.
// //     static Queue<Integer> q1 = new LinkedList<>();
// //     static Queue<Integer> q2 = new LinkedList<>();
// //     public static boolean isEmpty() {
// //       // Only q1 needs to be checked, as q2 is always empty or about to be swapped.
// //       return q1.isEmpty();
// //     }
// //     // push - Time Complexity: O(1)
// //     public static void push(int data) {
// //       // All elements MUST be added to the single active queue (q1).
// //       q1.add(data);
// //     }
// //     // pop - Time Complexity: O(n)
// //     public static int pop() {
// //       if (isEmpty()) {
// //         System.out.println("Stack is Empty");
// //         return -1;
// //       }
// //       // 1. Move n-1 elements from q1 to q2. (O(n))
// //       while (q1.size() > 1) {
// //         q2.add(q1.remove());
// //       }
// //       // 2. Remove the last element (the stack's "top"). (O(1))
// //       int topElement = q1.remove();
// //       // 3. Swap q1 and q2 references. (O(1))
// //       //    The full queue (q2) becomes the new main queue (q1).
// //       Queue<Integer> temp = q1;
// //       q1 = q2;
// //       q2 = temp;
// //       return topElement;
// //     }
// //     // peek - Time Complexity: O(n)
// //     public static int peek() {
// //       if (isEmpty()) {
// //         System.out.println("Stack is Empty");
// //         return -1;
// //       }
// //       // 1. Move n-1 elements from q1 to q2.
// //       while (q1.size() > 1) {
// //         q2.add(q1.remove());
// //       }
// //       // 2. Get the last element (the stack's "top").
// //       int topElement = q1.peek();
// //       // 3. CRITICAL: Move the top element to q2 to preserve it.
// //       q2.add(q1.remove());
// //       // 4. Swap q1 and q2 references.
// //       Queue<Integer> temp = q1;
// //       q1 = q2;
// //       q2 = temp;
// //       return topElement;
// //     }
// //   }
// //   public static void main(String args[]) {
// //     Stack s = new Stack();
// //     s.push(1);
// //     s.push(2);
// //     s.push(3); // q1: [1, 2, 3]
// //     System.out.println("Peek (O(n)): " + s.peek()); // Output: 3
// //     System.out.println("Pop (O(n)): " + s.pop()); // Output: 3
// //     // Stack is now [1, 2]
// //     System.out.println("Pop (O(n)): " + s.pop()); // Output: 2
// //   }
// // }
// // ------------------------------------------------------------------------------------------------
// // // 2nd variant in which push takes O(n)
// import java.util.LinkedList;
// import java.util.Queue; // Import the Queue interface
// public class StackUsing2Qs {
//   static class Stack {
//     // q1 (Main Queue): Holds elements, with the LIFO element at the front.
//     // q2 (Auxiliary Queue): Used only for temporary transfer during push.
//     static Queue<Integer> q1 = new LinkedList<>();
//     static Queue<Integer> q2 = new LinkedList<>();
//     public static boolean isEmpty() {
//       // Since all elements are moved back to q1 after every push,
//       // we only need to check q1.
//       return q1.isEmpty();
//     }
//     // push - Time Complexity: O(n)
//     public static void push(int data) {
//       // 1. Move all existing elements from q1 to q2. (O(n))
//       //    This isolates the front of q1.
//       while (!q1.isEmpty()) {
//         q2.add(q1.remove());
//       }
//       // 2. Add the new data to the now-empty q1. (O(1))
//       //    This element will be the new "top" of the stack.
//       q1.add(data);
//       // 3. Move all original elements back from q2 to q1. (O(n))
//       //    They go behind the new element, correctly creating LIFO order.
//       while (!q2.isEmpty()) {
//         q1.add(q2.remove());
//       }
//     }
//     // pop - Time Complexity: O(1)
//     public static int pop() {
//       if (isEmpty()) {
//         System.out.println("Stack is Empty");
//         return -1;
//       }
//       // The top element is guaranteed to be at the front.
//       return q1.remove();
//     }
//     // peek - Time Complexity: O(1)
//     public static int peek() {
//       if (isEmpty()) {
//         System.out.println("Stack is Empty");
//         return -1;
//       }
//       // The top element is guaranteed to be at the front.
//       return q1.peek();
//     }
//   }
//   public static void main(String args[]) {
//     Stack s = new Stack();
//     s.push(1); // q1: [1]
//     s.push(2); // q1: [2, 1] (2 is at front, 1 is behind)
//     s.push(3); // q1: [3, 2, 1] (3 is at front, 1 is at back)
//     // The sequence ensures LIFO order with O(1) removal.
//     while (!s.isEmpty()) {
//       System.out.println("Peek: " + s.peek() + ", Pop: " + s.pop());
//       // Output: 3, 2, 1
//     }
//   }
// }
