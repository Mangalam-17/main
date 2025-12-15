import java.util.Collections;
import java.util.LinkedList;

public class DualLinkedListDemo {

  // Custom doubly linked list implementation
  static class CustomDoublyLinkedList {

    // Node class represents a node in the doubly linked list
    private static class Node {

      int data; // Data contained in this node
      Node prev; // Pointer to previous node in list
      Node next; // Pointer to next node in list

      // Node constructor to create a new node with given data
      Node(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
      }
    }

    private Node head; // Head (first) node of the list
    private Node tail; // Tail (last) node of the list
    private int size; // Number of nodes in the list

    // Add a new node at the end of the doubly linked list
    public void addLast(int data) {
      Node newNode = new Node(data); // Create new node
      if (head == null) {
        // If list is empty,
        head = tail = newNode; // new node is both head and tail
      } else {
        tail.next = newNode; // Link new node after tail
        newNode.prev = tail; // Link new node’s previous to current tail
        tail = newNode; // Update tail to new node
      }
      size++; // Increase list size
    }

    // Reverse the doubly linked list in-place
    public void reverse() {
      Node curr = head; // Start with head
      Node prev = null; // Previous node starts as null

      while (curr != null) {
        Node next = curr.next; // Temporarily save next node
        curr.next = prev; // Reverse current node's next pointer
        curr.prev = next; // Reverse current node's previous pointer
        prev = curr; // Move prev pointer forward
        curr = next; // Move to next node in original list
      }
      head = prev; // After reversal, prev points to new head
    }

    // Print all elements from head to tail on one line
    public void print() {
      Node curr = head; // Start from head
      while (curr != null) {
        System.out.print(curr.data + " "); // Print data
        curr = curr.next; // Move to next node
      }
      System.out.println(); // Newline after printing all nodes
    }
  }

  // Utility to reverse the built-in Java LinkedList using Collections API
  public static void reverseJavaLinkedList(LinkedList<Integer> list) {
    Collections.reverse(list); // Reverses list in place
  }

  // Utility to print the elements of Java LinkedList
  public static void printJavaLinkedList(LinkedList<Integer> list) {
    for (int val : list) {
      System.out.print(val + " "); // Print each element
    }
    System.out.println(); // Newline after printing all elements
  }

  public static void main(String[] args) {
    // Use custom doubly linked list
    CustomDoublyLinkedList customList = new CustomDoublyLinkedList();
    customList.addLast(1);
    customList.addLast(2);
    customList.addLast(3);
    customList.addLast(4);

    System.out.print("Custom list original: ");
    customList.print();

    customList.reverse();

    System.out.print("Custom list reversed: ");
    customList.print();

    // Use built-in Java LinkedList
    LinkedList<Integer> collectionList = new LinkedList<>();
    collectionList.add(1);
    collectionList.add(2);
    collectionList.add(3);
    collectionList.add(4);

    System.out.print("Collection list original: ");
    printJavaLinkedList(collectionList);

    reverseJavaLinkedList(collectionList);

    System.out.print("Collection list reversed: ");
    printJavaLinkedList(collectionList);
  }
}
