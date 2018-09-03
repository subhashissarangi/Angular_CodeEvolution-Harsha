
//There is no default iterator available for objects

let personObject = {
  "firstName": "Chandler",
  "lastName": "bing"
}

personObject[Symbol.iterator] = function() {
  let properties = Object.keys(personObject);
  let count = 0;
  let isDone = false;

  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return {
      done: isDone, value: this[properties[count++]];
    }
    return next;
  }
};

for(let p of personObject){
  console.log(p);
}



