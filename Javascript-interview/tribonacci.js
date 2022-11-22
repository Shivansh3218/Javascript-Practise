let arr =[1,1,1] 
let num =5;
let sum =0 ;
let newArr =[...arr]
for(let i=arr.length;i<num;i++){
    // if(arr[i]===undefined) arr[i]= sum
    for(let j=0;j<=i;j++){
        sum+= arr[j]
        console.log(sum)
    }
    newArr.push(sum)
    sum=0
}
console.log(newArr)