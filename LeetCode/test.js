let arr = [
    'e', 't', 'y', 'b', 'r',
    'e', 'd', 'o', 'c', 'j',
    '7', 'p', 'd', 'b', 'q',
    'h', 'e', 'f', '6', '2',
    '9'
  ]
let count = 0
for (let i = 0; i < arr.length; i++) {
    if (count === 2) {
        arr[i] = "X"
        count = 0
    }
    else count++

}
console.log(arr)