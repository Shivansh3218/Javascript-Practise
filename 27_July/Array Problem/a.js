//Find the second largest element in the array and return it if is present else return false.

let arr = [1,3,2,34,3]
for(let i=0;i<arr.length;i++){ //Bubble sort compares the element from index 0 and if the 0th index is greater than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens.
for(let j=0;j<arr.length-i-1;j++){
    if(arr[j] > arr[j+1]){
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
}console.log(arr)