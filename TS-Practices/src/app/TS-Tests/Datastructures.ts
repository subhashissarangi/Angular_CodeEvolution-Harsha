var x = 10;
let y = 20;

let aSet = new Set();
aSet.add("a");// Set can  take any input

let aMap = new Map();
aMap.set("key", "Value");// Map takes anything as key

let aWeakSet = new WeakSet();
let obj = {};
aWeakSet.add(obj);// WeakSet can only accept object



let aWeakMap = new WeakMap();
let obj1 = {};
aWeakMap.set(obj1, "val1");// WeakMap takes only object as key

let s = Symbol(); // to create a symbol
let s1 = Symbol.for("my symbol");//to register a symbol
