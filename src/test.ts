import LRUCache from "./lru_cache";

const cache = new LRUCache<string, number>(3);
const handler = (data?: number) => console.log(data);
const print = () => cache.forEach(handler);

console.log("add 1...");
cache.put("1", 1);
print();

console.log("add 2...");
cache.put("2", 2);
print();

console.log("add 3...");
cache.put("3", 3);
print();

console.log(cache.length());
