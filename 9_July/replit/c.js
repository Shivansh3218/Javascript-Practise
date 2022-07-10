let arr = [1,2,2,2,3]
let i=0; 
let a =0;
let j = i+1
  while (i<arr.length){
    if(i==j){
        arr.splice(i,1)
    }
    j++
    i++
  }
  // return arr
  console.log(arr)