let array = [1, 3, 5, 6, 7, 8, 9, 10];
let copy = [];

// forEach array
const newArray = array.forEach(numb => {
    const can = numb * 2;
    copy.push(can)
})
console.log(copy)