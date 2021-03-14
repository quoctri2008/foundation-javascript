//way 1
setTimeout(function () {
    console.log(1);
}, 1000)
setTimeout(function () {
    console.log(2);
}, 1000)
setTimeout(function () {
    console.log(3);
}, 1000)
//way 2
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
        }, 1000)
    }, 1000)
}, 1000)