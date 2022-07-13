let arr = [1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16];
let start = 0
let target = 3
let end = arr.length - 1

while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] == target) {
        console.log("Found at ", middle)
        start = start + 1
        end = end - 1

    }
    else if (arr[middle] < target) {
        start = middle + 1
    }
    else if (arr[middle] > target) {
        end = middle - 1
    }
    else {
        end = middle - 1
    }
}
