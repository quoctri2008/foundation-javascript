Promise.resolve(1).then(val => console.log(val));
setTimeout(() => console.log(4),0)
console.log(2)
setTimeout(() => console.log(3),400)



// 1 2 3 4 tri
// 2 1 4 3 hung

function greet() {
  return 'Hello'
}

function respond() {
  return setTimeout(() => {
    return 'hey'
  }, 1000)
}

greet();
const b = respond();

console.log(b)

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => setTimeout(() => console.log("thrid"), 0);

bar();
foo();
baz();