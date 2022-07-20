let arr1 = [1, 2, 3]
let arr2 = [2, 1]
arr3 = [-1, 5]

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        for (var k = 0; k < arr3.length; k++) {
            // console.log(arr1.indexOf(arr1[i]))
            if(arr1.indexOf(arr1[i])==arr2[j]){
                arr1.splice(i,1,arr3[k])
            }
        }
    }
    
}
console.log(arr1)