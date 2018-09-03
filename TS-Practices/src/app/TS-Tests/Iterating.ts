let itearable = [1, 2, 3];

function createIterator(array) {
  let count = 0;

  return {
    next: function(){
              return count< array.length ? {vlaue: array[count++], done: false} : {value: undefined, done: true}
  }
}
 }

let myIterator = createIterator(itearable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());