const myobj = { name: "john", age: 30, city: "hcm" }
const myJSON = JSON.stringify(myobj);
console.log(myJSON);
const myobj1 = JSON.parse(myJSON);
console.log(myobj1);