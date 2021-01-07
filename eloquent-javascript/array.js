// sap xep array tu nho ->lon
let array = [10, 4, 1, 3, 9, 8, 6, 7];
array.sort(function (a, b) {
    return a - b;
})

// req: add 1 con so moi len dau mang
// array.unshift(5);

// req: remove 1 con so dau mang
// array.shift();

// req: add 1 con so moi len cuoi mang
// array.push(12);

// req: remove 1 con so cuoi mang
// array.pop();

// req:  remove so 7 trong mang
// way1 -> apply for..., splice
// for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] === 7) {
//         array.splice(i, 1);
//     }
// }
// console.log(array);

// way2 -> apply indexOf, splice
const index = array.indexOf(6);
if(index > -1) {
    array.splice(index, 1);
}
console.log(array);

// Filter Array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'Present'];
// const resFilter = words.filter(function(word) {
//     return word.length > 5;
// })

// filter array by Name
function searchByName(keyword) {
    const newArray = words.filter(word => word.toLocaleLowerCase().indexOf(keyword) > -1)
    return newArray;
}
const resSearchByName = searchByName('li');
console.log('Filter by Name: ', resSearchByName)

// traditional function
function test(value) {
    // something
    return value + 10
}
// arrow function: anomynous function
// way1 co text return: const test = (value) => {
//     return value + 10
// }
// way2: khong co text return;
// const test = (value) => value + 10;


// Map array
const mapArray = [10, 4, 1, 3, 9, 8, 6, 7];

const newMapArray = mapArray.map(number => number * 2);

console.log('Map Array: ', newMapArray)

