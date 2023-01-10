import node from "./list_node";

class DoublyLinkedList<K, V> {
  private head?: node<K, V>;
  private tail?: node<K, V>;
  private size: number = 0;

  isEmpty(): boolean {
    return this.size <= 0;
  }

  length(): number {
    return this.size;
  }

  addToTop(newNode: node<K, V>) {
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = undefined;

      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  addToBottom(newNode: node<K, V>) {
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = undefined;
      newNode.prev = this.tail;

      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  removeFromTop(): node<K, V> | undefined {
    if (this.isEmpty()) return;

    const temp = this.head;

    if (this.size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head?.next;
      this.head!.prev = undefined;
    }

    this.size--;
    return temp;
  }

  removeFromBottom(): node<K, V> | undefined {
    if (this.isEmpty()) return;

    const temp = this.tail;

    if (this.size === 1) {
      this.tail = undefined;
      this.head = undefined;
    } else {
      this.tail = temp?.prev;
      this.tail!.next = undefined;
    }

    this.size--;
    return temp;
  }

  removeNode(targetNode: node<K, V>) {
    const prev = targetNode.prev;
    const next = targetNode.next;

    if (prev?.next) {
      prev.next = next;
    }

    if (next?.prev) {
      next.prev = prev;
    }
  }

  moveToHead(targetNode: node<K, V>) {
    this.removeNode(targetNode);
    this.addToTop(targetNode);
  }

  forEach(onData: (data?: V) => void) {
    let iter = this.head;
    while (iter) {
      onData(iter.data);
      iter = iter.next;
    }
  }
}

export default DoublyLinkedList;
