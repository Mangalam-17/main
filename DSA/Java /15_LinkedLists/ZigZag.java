public class ZigZag {

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

  public void addFirst(int data) {
    Node newNode = new Node(data);
    if (head == null) {
      head = tail = newNode;
      return;
    }

    newNode.next = head;

    head = newNode;
  }

  public void addLast(int data) {
    Node newNode = new Node(data);
    if (head == null) {
      head = tail = newNode;
      return;
    }

    tail.next = newNode;

    tail = newNode;
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

  public void zigZag() {
    // step1 : find mid
    Node slow = head;
    Node fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    Node mid = slow;

    // step2 : reverse 2nd half
    Node curr = mid.next;
    mid.next = null;
    Node prev = null;
    Node next;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    Node leftHead = head;
    Node rightHead = prev;
    Node nextLeft, nextRight;

    // step3 : alternate merging, zig-zag merge
    while (leftHead != null && rightHead != null) {
      nextLeft = leftHead.next;
      leftHead.next = rightHead;
      nextRight = rightHead.next;
      rightHead.next = nextLeft;

      leftHead = nextLeft;
      rightHead = nextRight;
    }
  }

  public static void main(String args[]) {
    ZigZag ll = new ZigZag();
    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);
    ll.addLast(4);
    ll.addLast(5);
    ll.addLast(6);
    // 1->2->3->4->5

    ll.print();
    ll.zigZag();
    ll.print();
  }
}
