// nhan tat cac cac thuoc tinh cho 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
};
for (let key in menu) {
    console.log(key)
    if (typeof menu[key] === 'number') {
        menu[key] = menu[key] * 2;
    }
}
console.log(menu)