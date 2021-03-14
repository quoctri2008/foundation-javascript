//tinh luong nhan vien, neu luong trong, kq = 0
const salaries = {
    tri: 200,
    truong: 300,
    minh: 1000
}
let result = 0;
for (let key in salaries) {
    console.log(key)
    result += salaries[key]
}

// tri: salaries['tri'] = 200
console.log(result);