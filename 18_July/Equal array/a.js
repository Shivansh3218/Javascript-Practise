function isArray(arr, arr2){
    let count =0
  let arr3 = arr.sort()
   let  arr4 =arr2.sort()
    // console.log(arr4)
    // console.log(arr3)
    for(let i=0;i<arr.length;i++){
      if(arr3[i]==arr4[i]){}
        else {count+=1}
    }
    // console.log(count)
    if(count>=1) return false
    else return true
  }
  
 console.log( isArray([1, 5,4, 7, 8],
  [5, 8, 7, 1,3]))