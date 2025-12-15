public class DoublyLinkedList {

  public class Node {

    int data;
    Node next;
    Node prev;

    public Node(int data) {
      this.data = data;
      this.next = null;
      this.prev = null;
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
    head.prev = null;
    return;
  }

  public void addLast(int data) {
    Node newNode = new Node(data);
    size++;
    if (head == null) {
      head = tail = newNode;
      return;
    }

    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
    return;
  }

  public int removeFirst() {
    if (head == null) {
      System.out.println("Linked List is empty");
      return Integer.MIN_VALUE;
    }
    if (size == 1) {
      int val = head.data;
      head = tail = null;
      size--;
      return val;
    }
    int val = head.data;
    head = head.next;
    head.prev = null;
    size--;
    return val;
  }

  public int removeLast() {
    if (head == null) {
      System.out.println("Linked List is empty");
      return Integer.MIN_VALUE;
    }
    if (size == 1) {
      int val = head.data;
      head = tail = null;
      size--;
      return val;
    }
    int val = tail.data;
    tail = tail.prev;
    tail.next = null;
    size--;
    return val;
  }

  public void print() {
    Node temp = head;
    while (temp != null) {
      System.out.print(temp.data + "<->");
      temp = temp.next;
    }
    System.out.println("null");
  }

  public static void main(String args[]) {
    DoublyLinkedList dll = new DoublyLinkedList();
    dll.addFirst(5);
    dll.addFirst(4);
    dll.addFirst(3);
    dll.addFirst(2);
    dll.addFirst(1);
    dll.addLast(6);
    dll.addLast(7);
    dll.print();
    System.out.println("The size of DLL is " + size);

    // dll.removeFirst();
    // dll.print();
    // System.out.println("The size of DLL is " + size);

    dll.removeLast();
    dll.print();
    System.out.println("The size of DLL is " + size);
  }
}
