let filterMy = (array, callback) => {
    let newArr = []
    for(let el of array) {
        if(callback(el)) {
            newArr.push(el)
        }
    }
    return newArr
}

let arr = [1,2,3,4,5,6]

console.log(filterMy(arr, (el) => el>2  ));