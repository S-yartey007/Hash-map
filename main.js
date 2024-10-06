import { HashMap } from "./hashMap.js";

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");

console.log(test.has("apple"));
console.log(test.length());
console.log(test.getInfo());
