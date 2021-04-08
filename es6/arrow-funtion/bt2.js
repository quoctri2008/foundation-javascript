//cho array 0-10, file name random theo alphabet
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



console.log(makeid());
const newarr = arr.map(x => {
    return {
        name: makeid(x),
        id: x,
    }
});
console.log(newarr)
const newarr1 = newarr.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }

    // name trùng nhau
    return 0;
})
console.log(newarr1)

