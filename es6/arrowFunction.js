// bt1
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = array.map(x => x * 2);
// const newarr = array.map(x => {
//     if (x % 2 === 0) {
//         return x * 2;
//     }
//     return x;
// })
// console.log(newarr);
// bt2

// function abc(x) {
// }

// const tr = (x) => {
// }
// const randomText = (length) => {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charlength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charlength));
//     }
//     return result;
// }

// const newarr = array.map(x => {
//     return {
//         name: randomText(x),
//         id: x,
//     }
// })
// console.log(newarr);

// bt3
const array = [3, 5, 7, 2, 6, 8, 10, 11, 15, 1];
const randomtxt = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charlength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * array[i]));
    }
    return result;
}

const newarr = array.map(x => {
    return {
        name: randomtxt(x),
        price: x * 10,
    }
})
console.log(newarr);

// way1: useForeach
const useForeach = [];
newarr.forEach(item => {
    if (item.price > 50 && item.price < 100) {
        useForeach.push(item)
    }

})
console.log('way1: useForeach', useForeach);

// way2: useFilter
const useFilter = newarr.filter(item => {
    return item.price > 50 && item.price < 100
})
console.log('way2: useFilter: ', useFilter);

// way2: useFind
const use = newarr.find(x => x.price > 50 && x.price < 100);
console.log('useFind: ', use);