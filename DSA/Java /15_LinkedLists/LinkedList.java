public class LinkedList {

  // the type of next variable is Node itself, why ?
  // b/c this next variable is pointing to the next object which is already an object
  // so we can see that the parameter defined under the class is the object of the class itself
  // this is a reference variable for some other object
  public static class Node {

    int data;
    Node next;

    // now we will make some constructors,
    // initially, for every node, we initialize its next value to null, b/c at beginning we assume that
    // whatever the node we are creating does not point to some other object

    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }

  // At any point of time, we keep track of two values, which are Head and Tail
  // Head Node is the very first node in a LinkedList
  // Tail Node is the last valid node in a LL which means it has a valid data stored
  // Even if we had the data of only Head and Tail, we can reach any of the in b/w nodes
  // B/c we can take the value of next and further traverse accoringly
  // when we have only single node, then the head and tail points to that node only
  // rest cases, the head and tail remains at opposite end of a LinkedList

  public static Node head;
  public static Node tail;
  public static int size;

  // we dont need to specify static function here, b/c the main function is static and
  // under a static function, only a static function can be called directly
  // but, now we won't make directly calls, we will call using the ll object
  // for that, if ll functions are static or non-static, that doesn't matters really

  // addFirst takes O(1), constant(there is no loops used, 3 ops only)
  public void addFirst(int data) {
    // step 1 - crate a new node
    Node newNode = new Node(data);
    size++;
    if (head == null) {
      head = tail = newNode;
      return;
    }

    // step 2 - newNode -> next = head
    newNode.next = head; // linking step, this creates a linkedlist

    // step 3 - head = newNode
    head = newNode;
  }

  // this also takes O(1), constant as there are only 3 ops everytime
  public void addLast(int data) {
    // step 1 - crate a new node
    Node newNode = new Node(data);
    size++;
    if (head == null) {
      head = tail = newNode;
      return;
    }

    // step 2 - tail -> next = newNode
    tail.next = newNode; // linking step, this creates a linkedlist

    // step 3 - tail = newNode
    tail = newNode;
  }

  //takes O(n) just b/c it has search for the index to be inserted
  public void add(int idx, int data) {
    if (idx == 0) {
      addFirst(data);
      return;
    }
    Node newNode = new Node(data);
    size++;
    Node temp = head;
    int i = 0;

    while (i < idx - 1) {
      temp = temp.next;
      i++;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  public int removeFirst() {
    if (size == 0) {
      System.out.println("LinkedList is empty");
      return Integer.MIN_VALUE;
    } else if (size == 1) {
      int val = head.data;
      head = tail = null;
      size = 0;
      return val;
    }
    int val = head.data;
    head = head.next;
    size--;
    return val;
  }

  public int removeLast() {
    if (size == 0) {
      System.out.println("LinkedList is empty");
      return Integer.MIN_VALUE;
    } else if (size == 1) {
      int val = head.data;
      head = tail = null;
      size = 0;
      return val;
    }
    Node prev = head;
    for (int i = 0; i < size - 2; i++) {
      prev = prev.next;
    }
    int val = prev.next.data; // or we can also take tail.data;
    prev.next = null;
    tail = prev;
    size--;
    return val;
  }

  public int iterativeSearch(int key) {
    Node temp = head;
    int i = 0;

    while (temp != null) {
      if (temp.data == key) {
        return i;
      }
      temp = temp.next;
      i++;
    }
    return -1;
  }

  public int helper(Node head, int key) {
    if (head == null) {
      return -1;
    }
    if (head.data == key) {
      return 0;
    }
    int idx = helper(head.next, key);
    if (idx == -1) {
      return -1;
    }

    return idx + 1;
  }

  public int recursiveSearch(int key) {
    return helper(head, key);
  }

  public void deleteNthfromEnd(int n) {
    int sz = 0;
    Node temp = head;
    while (temp != null) {
      temp = temp.next;
      sz++;
    }
    if (n == sz) {
      head = head.next; // removeFirst operation
      return;
    }

    // sz - n
    int i = 1;
    int iToFind = sz - n;
    Node prev = head;
    while (i < iToFind) {
      prev = prev.next;
      i++;
    }

    prev.next = prev.next.next;
    return;
  }

  public void reverse() {
    Node prev = null;
    Node curr = tail = head;
    // so we are reversing the linked list, means the head will become the tail right
    // so by the 2nd line, the value of tail gets stored in the curr as well as in head also
    // in java, assign operator works from right to left, so first head's value is assigned to tail
    // and then head's value is assigned to curr as well
    Node next;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    head = prev;
  }

  // Slow - Fast Approach
  public Node findMid(Node head) {
    Node slow = head;
    Node fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next; // +1
      fast = fast.next.next; // +2
    }
    return slow; // slow is the mid Node
  }

  // check palindrome
  public boolean checkPalindrome() {
    if (head == null || head.next == null) {
      return true; // if LL has 0 or 1 element
    }

    // step1: find mid
    Node midNode = findMid(head);

    // step2: reverse 2nd half
    Node prev = null;
    Node curr = midNode;
    Node next;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    Node right = prev;
    Node left = head;

    // step3: check left half and right half
    while (right != null) {
      if (left.data != right.data) {
        return false;
      }
      left = left.next;
      right = right.next;
    }
    return true;
  }

  // it takes O(n) as it reaches every node
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

  // when we create so many objects of Node class, then ultimately we will have a linkedList only !
  // the operations to be carried out on a LL, for that we will create proper individual methods
  public static void main(String args[]) {
    LinkedList ll = new LinkedList();
    // ll.addFirst(1);
    // ll.addFirst(2);
    // ll.addLast(2);
    // ll.addLast(1);
    // ll.add(3, 4);
    // ll.addLast(6);
    // ll.print();

    // System.out.println("The size of the LinkedList is - " + size);

    // ll.removeFirst();
    // ll.print();
    // System.out.println("The size of the LinkedList is - " + size);

    // ll.removeLast();
    // ll.print();
    // System.out.println("The size of the LinkedList is - " + size);

    // System.out.println(ll.iterativeSearch(5));
    // System.out.println(ll.iterativeSearch(10));

    // System.out.println(ll.recursiveSearch(5));
    // System.out.println(ll.recursiveSearch(10));

    // ll.reverse();

    // ll.deleteNthfromEnd(4);

    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(1);
    // ll.addLast(1);
    ll.print();
    System.out.println("size of linkedlist is " + size);
    // System.out.println(ll.checkPalindrome());
  }
}
