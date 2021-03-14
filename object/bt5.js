// in ra 1 array student chua 10 item oject voi IDBCursor, ten khac nhau
let student = [];
const obj = {};
for (i = 0; i < 10; i++) {
    let newobj = {
        id: i,
        name: `truong${i}`
    }
    // student = [...student, newobj]
    student.push(newobj)
    // console.log(newobj);
}
console.log(student);
