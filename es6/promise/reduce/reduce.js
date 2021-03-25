let orders = [
    { name: 'A', quality: 2, unitPrice: 100 },
    { name: 'B', quality: 1, unitPrice: 400 },
    { name: 'C', quality: 4, unitPrice: 15 },
];

const sum = orders.reduce(function (acc, curr) {
    return acc + curr.unitPrice * curr.quality;
}, 0);
console.log(sum);
//loop 1: 0 + 2*100 = 200
//loop 2: 200 + 1*400 = 600
//loop 3: 600 + 4815 = 660

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//dem so lan xuat hien phan tu trong mang
const number = names.reduce(function (acc, curr) {
    console.log(acc)
    if (curr in acc) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});
console.log(number)