import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  getHead() {
    return this.head.data;
  }

  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }
  at(index) {
    if (this.head === null) return;
    if (index < 0 || index >= this.size()) {
      throw new Error("invalid index");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  addAt(index, data) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }

    const node = new Node(data);
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  removeFirst() {
    if (this.head === null) return;

    this.head = this.head.next;
  }

  pop() {
    if (this.head === null) return;
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data.key === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  find(data) {
    let current = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (current.data.key === data) {
        return i;
      }
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (this.head === null) return;

    if (index < 0 || index >= this.size()) {
      throw new Error("invalid index");
    }

    if (index === 0) {
      this.removeFirst();
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `(${current.data})-> `;
      current = current.next;
    }
    string += "null";
    return string;
  }
}

export { LinkedList };
