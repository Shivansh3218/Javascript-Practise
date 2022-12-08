let arr =[1,3,5,2,4]
let min
for(let i=0;i<arr.length;i++){
   min =i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min])
        min= j
    }
    if(min!=i){
        let temp= arr[i]
        arr[i]= arr[min]
        arr[min]= temp
    }
}
console.log(arr)

///////////////////////////////////////
let inputArr = [1,3,5,2,4]
let n = inputArr.length;
for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
        if(inputArr[j] < inputArr[min]) {
            min=j; 
        }
     }
     if (min != i) {
         // Swapping the elements
         let tmp = inputArr[i]; 
         inputArr[i] = inputArr[min];
         inputArr[min] = tmp;      
    }
}
// console.log(inputArr);