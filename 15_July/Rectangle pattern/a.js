let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];
for (let i = 0; i <= arr.length; i++) // For first line printing 
    console.log(arr[0][i]);

for (let i = 1; i < arr.length; i++)  // For first line printing 
    console.log(arr[i][arr.length]);

for (let i = arr.length - 1; i >= 0; i--) // For bottom line printing
    console.log(arr[arr.length - 1][i]);

for (let i = arr.length - 2; i >= 1; i--)
    console.log(arr[i][0]);

