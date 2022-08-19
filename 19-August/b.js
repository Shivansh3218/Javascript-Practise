//REDUCE METHOD  PRACTISE FROM YOUTUBE

let arr = [1, 2, 2, 2, 3, 4, 54]
let b = arr.reduce(function (max, current) {
    if (current > max)
        max = current
    return max


})
console.log(b)