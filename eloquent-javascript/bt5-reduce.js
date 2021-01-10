// with reduce: xoa cac phan tu trung trong mang
const array = [1, 2, 5, 7, 5, 7, 1, 5, 6, 4, 3, 4, 3, 6];
let result = array.sort().reduce(function (acc, currValue) {
    const length = acc.length
    if (length === 0 || acc[length - 1] !== currValue) {
        acc.push(length);
    }
    return acc;
}, []);
console.log(array.sort())
console.log(result)

//loop 0: acc=[], currValue=1
//=> length = 0; if(0 === 0 || acc[-1] !== 1) (false || undefiend !== 1) => [0]
//loop 1: acc=[0], currValue=1
//=> length = 1; if(1 === 0 || acc[0] !== 1) (false || 1 !==1 ) => [0]
//loop 2: acc=[0], currValue=2
//=> length = 1; if(1 === 0 || acc[0] !== 2) (false || 1 !==2 ) => [0,1]
//loop 3: acc=[0,1], currValue=3
//=> length = 2; if(2 === 0 || acc[1] !== 3) (false || true ) => [0,1,2]
//loop 4: acc=[0,1,2], currValue=3
//=> length = 3; if(3 === 0 || acc[2] !== 3) (false || true ) => [0,1,2,3]



// without reduce: xoa cac phan tu trung trong mang
const arrayWithout = [1, 2, 5, 7, 5, 7, 1, 5, 6, 4, 3, 4, 3, 6];