const array = [];
for (let i = 1; i < 21; i++) {
    array.push(i);
}
const newArray = array.map(arr => arr * 7)
console.log('Map array: ', newArray);

const filterArray = newArray.filter(num => num % 2 == 0)
console.log('Filter array: ', filterArray);

// apply some, every