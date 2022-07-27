//Find the second largest element in the array and return it.

let arr = [1, 3, 2, 34, 30]
let end = arr.length
//Bubble sort compares the element from index 0 and if the 0th index is greater than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens.
    for (let j = 0; j < end; j++) {
        if (arr[j] > arr[j + 1]) {
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            end-- //Here reducing the array .length value since we are arranging in a reverse order
        }

    }
console.log(arr)
// console.log(arr[arr.length-2])