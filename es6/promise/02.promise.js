const promise = new Promise(
    function (resolve, reject) {
        //logic
        //thanh cong: resolve
        //that bai: reject
        resolve(22);
    }
)
promise
    .then(function (param) {
        console.log('Succes', param)
    })
    .catch(function () {
        console.log('fail')
    })
    .finally(function () {
        console.log('Done')
    })