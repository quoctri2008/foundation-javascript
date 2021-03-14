function course(x) {
    console.log(typeof x, x) // function, function

    // way 1
    // if (typeof x === "number") {
    //     console.log('day la so number')
    // } else if (typeof x === "string") {
    //     console.log('day la string')
    // } else if (typeof x === "boolean") {
    //     console.log('day la boolean')
    // } else {
    //     x(); //  x()
    // }

    // way 2
    // if (typeof x === 'function') {
    //     x();
    // }

    // way 3
    if (typeof x !== 'function') return;
    x();
}

function myabc() {
    console.log('myabc 1')
}

// myabc();

course('myabc')