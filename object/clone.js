// combine Object
const obj1 = {
    age: 1,
    name: 'tri1'
}
const obj2 = {
    number: 1,
    gender: 'female'
}

const newobj = { ...obj1, ...obj2 }
console.log(newobj)
//cho 1 array tu 1-10, in ra 1 object co cac phan tu ma key object do la index cua array

/* input
array = [1-10]
obj={}
*/

/*
output = {
    1: {
        value: 1,
        name: 'truong 1'
    }
}

*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let objCombine = {};

array.forEach(item => {
    const newobj = {
        value: item,
        name: `truong-${item}`
    }
    objCombine = {
        ...objCombine,
        [item]: newobj
    }
})

/*
how to work

1 => objCombine = {
    1: {
        value: 1,
        name: truong-1
    }
}

2 => objCombine = {
    1: {
        value: 1,
        name: truong-1
    },
    2: {
        value: 2,
        name: truong-2
    }
}

*/

console.log(objCombine)