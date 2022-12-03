let arr = [1, [1, 2], [1,2,3,4,[5,6,7,[1,2,34,5]]],3, [[4], 5, 6]]

function flat(arr) {
    let flattendArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattendArr = flattendArr.concat(flat(arr[i]))
        }
        else flattendArr.push(arr[i]
        )
    }
    return flattendArr
}
console.log(flat(arr))