// without reduce: xoa cac phan tu trung trong mang
const arrayWithout = [1, 2, 5, 7, 5, 7, 1, 5, 6, 4, 3, 4, 3, 6];
const unique = {};

arrayWithout.forEach(item => {
 if(!unique[item]) {
   unique[item] = true
 }
})

console.log(unique)
