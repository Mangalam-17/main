public class Cycle {

  public static class Node {

    int data;
    Node next;

    public Node(int data) {
      this.data = data;
      this.next = next;
    }
  }

  public static Node head;
  public static Node tail;

  public static boolean isCycle() {
    Node slow = head;
    Node fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true;
      }
    }
    return false;
  }

  public static void removeCycle() {
    // detect cycle
    Node slow = head;
    Node fast = head;
    boolean cycle = false;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast == slow) {
        cycle = true;
        break;
      }
    }
    if (cycle == false) {
      return;
    }

    // find meeting point
    slow = head;
    Node prev = null;
    while (slow != fast) {
      prev = fast;
      slow = slow.next;
      fast = fast.next;
    }

    // remove cycle
    prev.next = null;
  }

  public static void main(String args[]) {
    head = new Node(1);
    head.next = new Node(2);
    Node temp = new Node(3);
    head.next.next = temp;
    temp.next = new Node(4);
    temp.next.next = head.next;

    // 1 - 2 - 3 - 1
    // corner case -> when there is a full cycle , which means the last element points to the head
    // but usually this does not happens in contests . . .
    // the cycle which we are referring connects somewhere in the middle of the LinkedList

    System.out.println(isCycle());
    removeCycle();
    System.out.println("THis is the current cycle - ");
    System.out.println(isCycle());
  }
}
