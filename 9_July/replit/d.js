let arr = [1,2,2,2,3]
let i=0; 
let a =0;
  while (i<arr.length){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]) 
    a =arr.splice(i,1)
 }
    i++
}

  // return arr
  console.log(arr)