const obj = {
    a: 'something',
    b: 42,
    c: false,
};
const array = []
// object keys
console.log(Object.keys(obj));
Object.keys(obj).map(item => {
    console.log(obj[item])
    array.push(obj[item])
})
console.log(array)
// console.log(Object.keys(obj));
// object values
console.log(Object.values(obj));
// object entries
console.log(Object.entries(obj));