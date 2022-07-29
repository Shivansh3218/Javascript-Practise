//program For Selection Sort 

let Arr = [23,4352,234,55,64548786,987,343,34]
let n = Arr.length;

for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (Arr[j] < Arr[min]) {
            min = j;
        }
    }
    if (min != i) {
        // Swapping the elements
        let temp = Arr[i];
        Arr[i] = Arr[min];
        Arr[min] = temp;
    }
}
console.log(Arr);
