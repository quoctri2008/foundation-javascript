const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve('foo'), 100)
});
// Promise.all([p1, p2, p3]).then(value => {
//     console.log(value);
// });
const p4 = new Promise((resolve, reject) => {
    reject('reject');
})
// resolve() => then
// reject() => catch

Promise.all([p1, p2, p3, p4]).then(value => {
    console.log(value);
}).catch(error => {
    console.log('bao loi', error)
});