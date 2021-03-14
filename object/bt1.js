const array = [];
for (let i = 0; i < 10; i++) {
    const newObj = {
        id: i,
        name: `tri ${i}`
    };

    array.push(newObj);
}

console.log(array);

// 0 -> { id: 0, name: tri 0}
// 1 -> { id: 1, name: tri 1}


/* output:

[
    {
        id: 1,
        name: 'tri 1'
    },
    {
        id: 2,
        name: 'tri 2'
    }
]

*/