

let array1 = [
    { checked: true, id: "51308765a-87b3-cde" },
    { checked: true, id: "608abc90-1122-87h" },
    { checked: true, id: "51bhc678a-89hf-nlh" },
    { checked: true, id: "51df9087a-98a3-m89" }
];
let array2 = [
    { worksheetID: "60889bc90-1122-87h" },
    { worksheetID: "51bhc678a-89hf-nlh" },
    { worksheetID: "60889bm80-9bg-25n" },
    { worksheetID: "6088fgh7b-1285-dh9" },
];
const newarray = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i].id === array2[j].worksheetID) {
            array1[i].checked = !array1[i].checked;
            array2.splice(j, 1)
            newarray.push(array1, array2)
        }
    }
}

console.log('result: ', newarray)