let findMy = (array, callback) => {
    for(let x of array) {
        if(callback(x)) {
            return x;
        }
    }
}

let arr = [1,2,3,4,5]

console.log(findMy(arr, (x) => x % 3 === 0)); 