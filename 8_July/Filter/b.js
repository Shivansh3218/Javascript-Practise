let check =1
let arr =[1,2,3,4,1,5]
 let i=0 
  while (i<arr.length){
    // console.log(arr[i])
    for(let j=i+1;i<arr.length;j++){
      if(arr[i]==arr[j]) 
     check+=1 
       }
//   console.log(check)
    i++
 
  }
    
  if(check ==2) console.log(true) 
  else console.log(false)
