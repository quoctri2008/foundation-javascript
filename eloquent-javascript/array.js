// sap xep array tu nho ->lon
let array = [10, 4, 1, 3, 9, 8, 6, 7];
array.sort(function (a, b) {
    return a - b;
})

// //add 1 con so moi len dau mang
// array.unshift(5);
// // remove 1 con so dau mang
// array.shift();
// //add 1 con so moi len cuoi mang
// array.push(12);
// // remove 1 con so cuoi mang
// array.pop();
// remove so 7 trong mang
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === 7) {
        array.splice(i, 1);
    }
}
console.log(array);
