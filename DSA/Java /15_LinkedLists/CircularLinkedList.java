public class CircularLinkedList {

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
    if (head == null) {
      head = tail = newNode;
      newNode.next = head;
      size++;
      return; // early return if list was empty
    }

    // This part runs only if the list is non-empty
    newNode.next = head;
    tail.next = newNode;
    head = newNode;
    size++;
  }

  public void addLast(int data) {
    Node newNode = new Node(data);
    if (head == null) {
      head = tail = newNode;
      newNode.next = head;
      size++;
      return; // early return for empty list
    }

    // Runs only if list is not empty
    newNode.next = head;
    tail.next = newNode;
    tail = newNode;
    size++;
  }

  public void addAtPosition(int data, int position) {
    if (position < 1 || position > size + 1) {
      System.out.println("Invalid position");
      return;
    }

    if (position == 1) {
      addFirst(data);
      return;
    }

    if (position == size + 1) {
      addLast(data);
      return;
    }

    Node newNode = new Node(data);
    Node temp = head;
    // Move to the node just before the position
    for (int i = 1; i < position - 1; i++) {
      temp = temp.next;
    }

    // Insert newNode between temp and temp.next
    newNode.next = temp.next;
    temp.next = newNode;
    size++;
  }

  public void removeFirst() {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }

    size--;
    if (head == tail) {
      // only one node
      head = tail = null;
      return;
    }

    head = head.next;
    tail.next = head; // maintain circular link
  }

  public void removeLast() {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }

    size--;
    if (head == tail) {
      // only one node
      head = tail = null;
      return;
    }

    Node temp = head;
    while (temp.next != tail) {
      temp = temp.next;
    }
    temp.next = head;
    tail = temp;
  }

  public void removeAtPosition(int position) {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }

    if (position < 1 || position > size) {
      System.out.println("Invalid position");
      return;
    }

    if (position == 1) {
      removeFirst();
      return;
    }

    if (position == size) {
      removeLast();
      return;
    }

    size--;
    Node temp = head;
    for (int i = 1; i < position - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  public void removeByKey(int key) {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }

    // If head node holds the key to be deleted
    if (head.data == key) {
      removeFirst();
      return;
    }

    Node current = head;
    // Traverse till node before the node to delete or till we circle back to head
    while (current.next != head && current.next.data != key) {
      current = current.next;
    }

    // If key not found
    if (current.next == head) {
      System.out.println("Key not found");
      return;
    }

    // If node to delete is tail
    if (current.next == tail) {
      removeLast();
      return;
    }

    // Node to be deleted is in between
    current.next = current.next.next;
    size--;
  }

  public void print() {
    if (head == null) {
      System.out.println("List is empty");
      return;
    }

    System.out.print("Linked List Elements : ");
    Node itr = head;
    do {
      System.out.print(itr.data + " ");
      itr = itr.next;
    } while (itr != head);
    System.out.println();
  }

  public static void main(String[] args) {
    CircularLinkedList cll = new CircularLinkedList();
    cll.addLast(10);
    cll.addLast(20);
    cll.addLast(30);
    cll.addLast(40);
    cll.print();
    cll.removeFirst();
    System.out.println("The size of the LinkedList is " + size);
    cll.print();
    cll.removeFirst();
    System.out.println("The size of the LinkedList is " + size);
    cll.print();
    cll.removeFirst();
    System.out.println("The size of the LinkedList is " + size);
    cll.print();
    cll.removeFirst();
    System.out.println("The size of the LinkedList is " + size);
    cll.print();
    cll.print();
    System.out.println("The size of the LinkedList is " + size);
    cll.print();
  }
}
