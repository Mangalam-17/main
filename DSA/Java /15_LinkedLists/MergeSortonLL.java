import java.util.*;

public class MergeSortonLL {

  public static class Node {

    int data;
    Node next;

    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }

  public static Node head;
  public static Node tail;
  public static int size;

  public void addFirst(int data) {
    Node newNode = new Node(data);
    size++;
    if (head == null) {
      head = tail = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }

  public void print() {
    if (head == null) {
      System.out.println("LL is empty");
      return;
    }
    Node temp = head;
    while (temp != null) {
      System.out.print(temp.data + "->");
      temp = temp.next;
    }
    System.out.println("null");
  }

  private Node findMid() {
    Node slow = head;
    Node fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  private Node merge(Node leftHead, Node rightHead) {
    Node mergedLL = new Node(-1);
    Node temp = mergedLL;

    while (leftHead != null && rightHead != null) {
      if (leftHead.data <= rightHead.data) {
        temp.next = leftHead;
        leftHead = leftHead.next;
        temp = temp.next;
      } else {
        temp.next = rightHead;
        rightHead = rightHead.next;
        temp = temp.next;
      }
    }
    while (leftHead != null) {
      temp.next = leftHead;
      leftHead = leftHead.next;
      temp = temp.next;
    }
    while (rightHead != null) {
      temp.next = rightHead;
      rightHead = rightHead.next;
      temp = temp.next;
    }
    return mergedLL.next;
  }

  public Node mergeSort(Node head) {
    if (head == null || head.next == null) {
      return head;
    }

    // find mid
    Node mid = findMid();

    // left and right half
    Node rightHead = mid.next;
    mid.next = null;
    Node sortedLeftHalf = mergeSort(head);
    Node sortedRightHalf = mergeSort(rightHead);

    // merge
    return merge(sortedLeftHalf, sortedRightHalf);
  }

  public static void main(String args[]) {
    MergeSortonLL ll = new MergeSortonLL();
    ll.addFirst(1);
    ll.addFirst(2);
    ll.addFirst(3);
    ll.addFirst(4);
    // ll.addFirst(5);
    // 5->4->3->2->1

    ll.print();
    ll.head = ll.mergeSort(ll.head);
    ll.print();
  }
}
