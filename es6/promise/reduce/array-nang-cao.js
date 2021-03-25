// nhom cac doi tuong theo age
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
// console.log(people[1])
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);


// 0: acc = {}, obj = people[0], key = people[0]['age'],  acc[key] = [] => { 21: [ { name: 'Alice', age: 21 } ] }
// 1: acc = { 21: [] }, obj = people[1], key = people[1]['age'], acc[key] = [] => { 20: [] }
