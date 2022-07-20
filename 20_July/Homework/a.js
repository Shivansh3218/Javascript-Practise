//Given an integer array, pos array and element array, change the elements in the integer array based on the arr2 array and arr3 array.

let arr1 = [1, 2, 3]
let arr2 = [2, 1]
arr3 = [-1, 5]

for (var i = 0; i < arr1.length; i++) { // First array which needs to be replaced element
    for (var j = 0; j < arr2.length; j++) {  // Second array which will determine element position
        for (var k = 0; k < arr3.length; k++) { // Third array to be replaced with element
            // console.log(arr1.indexOf(arr1[i]))
            if(arr1.indexOf(arr1[i])==arr2[j]){
                arr1.splice(i,1,arr3[k])
            }
        }
    }
    
}
console.log(arr1)