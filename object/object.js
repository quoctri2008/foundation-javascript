// cach 1
const car1 = new Object();
car1.name = 'Ford';
car1.model = "Mustang";
car1.year = 1969;
console.log(car1)
// cach 2
const car2 = {
    name: 'Ford2',
    model: "Mustang2",
    year: 1969.2
}

console.log(car2)
//car2.name
//->  cup.name

function abc() {
    return 123
}

function show(obj, objName) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += `${objName}.${key} = ${obj[key]} \n`
        }
    }
    return result;
}

// obj[key] = obj['name'] = Ford2
const res = show(car2, "cup");
console.log(res)

const numbs = [{ numb: 1, nam: 'tri' }, { numb: 2, nam: 'tri2' }]

numbs.forEach((value, index) => {
    console.log(value.numb)
})


const tea = {
    name: 'tri'
}

console.log('before tea:', tea.name)

tea.name = 'truong';

console.log('after tea:', tea.name)



// Object methods
var myDog = {
    weight: 5,
    name: 'Dan',
    bark: function () {
        console.log('Gau gau', this.name)
    }
}
console.log(myDog.bark());


delete myDog['weight'];
console.log(myDog);


