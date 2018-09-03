/**
 *   to test TS itrators are applicable to which objects
 */

let str = "hello";
let arr = [1, 2, 3, 4];
let num = 12345;
let obj = { name: "Chandler" };

console.log("For String " + typeof str[Symbol.iterator]);
console.log("For array " + typeof arr[Symbol.iterator]);
console.log("For number " + typeof num[Symbol.iterator]);
console.log("For Object " + typeof obj[Symbol.iterator]);