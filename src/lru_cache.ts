import DoublyLinkedList from "./doubly_linkedlist";
import node from "./list_node";

class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, node<K, V>>;
  private list: DoublyLinkedList<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.list = new DoublyLinkedList();
  }

  put(key: K, value: V) {
    if (this.cache.has(key)) {
      const targetNode = this.cache.get(key);
      targetNode!.data = value;
      this.list.moveToHead(targetNode!);
    } else {
      const targetNode = new node<K, V>(value);
      targetNode.key = key;
      this.list.addToTop(targetNode);
      this.cache.set(key, targetNode);

      if (this.list.length() > this.capacity) {
        const evicted = this.list.removeFromBottom();
        this.cache.delete(evicted!.key!);
      }
    }
  }

  get(key: K): V | number | undefined {
    if (this.cache.has(key)) {
      return this.cache.get(key)?.data;
    }

    return -1;
  }

  forEach(onData: (data?: V) => void) {
    this.list.forEach(onData);
  }

  length() {
    return this.list.length();
  }
}

export default LRUCache;
