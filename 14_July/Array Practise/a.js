let arr = [1, 5]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 3 !=0) {
        // console.log(arr[i])
        while (arr[i] % 3 != 0) {
            // console.log(arr[i])
            arr[i] = arr[i]+1
            // console.log(arr[i])
        }
    }if(arr[i]%3==0)arr2.push(arr[i])
}
console.log(arr2)