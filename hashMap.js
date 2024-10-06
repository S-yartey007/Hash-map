import { LinkedList } from "./linkedList.js";

class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  #size = 16;
  #capacity;
  #loadFactor;
  #buckets;
  constructor() {
    this.#buckets = new Array(this.#size);
    this.#capacity = this.#buckets.length;
    this.#loadFactor = 0.8;
  }
  #increaseSize() {
    if (this.length() >= this.#capacity * this.#loadFactor) {
      this.#size = this.#size * 2;
      const newArray = new Array(this.#size);
      this.#capacity = newArray.length;
      const temp = this.#buckets;
      this.#buckets = newArray;
      temp.forEach((bucket) => {
        if (bucket) {
          let current = bucket.head;
          while (current) {
            this.set(current.data.key, current.data.value);
            current = current.next;
          }
        }
      });
      this.#buckets = newArray;
    } else {
      console.log("size not excedded");
    }
  }
  getInfo() {
    return {
      loadFactor: this.#loadFactor,
      capacity: this.#capacity,
    };
  }
  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#size;
    }
    return hashCode;
  }

  set(key, value) {
    this.#increaseSize();
    const index = this.#hash(key);
    const entry = new Entry(key, value);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (!this.#buckets[index]) {
      this.#buckets[index] = new LinkedList();
    }
    const list = this.#buckets[index];
    if (list.contains(entry.key)) {
      list.at(list.find(entry.key)).value = entry.value;
    } else {
      list.append(entry);
    }
  }
  get(key) {
    const index = this.#hash(key);
    const list = this.#buckets[index];
    if (!list) {
      return null;
    }
    if (list.contains(key)) {
      return list.at(list.find(key)).value;
    } else {
      return null;
    }
  }
  has(key) {
    const index = this.#hash(key);
    console.log(key, index);
    const list = this.#buckets[index];
    if (!list) {
      return false;
    }
    if (list.contains(key)) return true;
    else return false;
  }
  remove(key) {
    const index = this.#hash(key);
    const list = this.#buckets[index];
    if (!list) {
      return false;
    }
    if (list.contains(key)) {
      list.removeAt(list.find(key));
      return true;
    } else {
      return false;
    }
  }
  length() {
    let count = 0;
    this.#buckets.forEach((bucket) => {
      if (bucket) {
        count += bucket.size();
      }
    });
    return count;
  }

  clear() {
    this.#buckets = [];
  }
  keys() {
    const keys = [];
    this.#buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          keys.push(current.data.key);
          current = current.next;
        }
      }
    });
    return keys;
  }
  values() {
    const values = [];
    this.#buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          values.push(current.data.value);
          current = current.next;
        }
      }
    });
    return values;
  }
  entries() {
    const entries = [];
    this.#buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          entries.push(current.data);
          current = current.next;
        }
      }
    });
    return entries;
  }
}

export { HashMap };
